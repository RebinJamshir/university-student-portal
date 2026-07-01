import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, context } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Invalid messages array" });
      return;
    }

    const ai = getAI();
    
    const systemPrompt = `You are "Aura", an empathetic, highly knowledgeable AI Academic Counselor and Study Assistant at the university student portal.
Your tone is encouraging, clear, and academically rigorous yet supportive.
Keep responses moderately concise, and use Markdown for clean formatting.
Current context of the student:
${JSON.stringify(context || {}, null, 2)}`;

    const lastMessage = messages[messages.length - 1]?.text || "";
    
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `System Prompt:\n${systemPrompt}\n\nStudent Message:\n${lastMessage}`
          }
        ]
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        temperature: 0.7,
      }
    });

    res.json({ text: response.text || "Sorry, I couldn't process that query." });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    res.status(500).json({ 
      error: error.message || "An internal error occurred",
      isConfigError: !process.env.GEMINI_API_KEY 
    });
  }
});

app.post("/api/resume-review", async (req, res) => {
  try {
    const { resumeText, targetRole } = req.body;
    if (!resumeText) {
      res.status(400).json({ error: "Resume content is required" });
      return;
    }

    const ai = getAI();

    const systemPrompt = `You are an elite Tech Career Recruiter and Placement Mentor.
Analyze the following student's resume text and target role: "${targetRole || "Software Engineer"}".
Rate the resume quality out of 100, provide specific actionable improvement points, and suggest structural enhancements.
Return the output STRICTLY as a JSON object of this structure:
{
  "score": number, // an integer score between 0 and 100
  "strengths": string[], // list of 3-4 strengths identified
  "improvements": string[], // list of 3-4 clear, actionable improvements with bullet points
  "keywordSuggestions": string[], // list of 5-6 key industry terms/tools to include
  "summary": string // a brief encouraging summary (2-3 sentences)
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `${systemPrompt}\n\nStudent's Resume Content:\n${resumeText}`,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      }
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("Resume Review API Error:", error);
    res.status(500).json({ 
      error: error.message || "An internal error occurred",
      isConfigError: !process.env.GEMINI_API_KEY 
    });
  }
});

app.post("/api/predict-gpa", async (req, res) => {
  try {
    const { targetGpa, studyHours, currentGpa, attendance } = req.body;
    const ai = getAI();

    const prompt = `Student GPA Prediction Request:
- Current CGPA: ${currentGpa || 3.4}
- Target CGPA: ${targetGpa || 3.8}
- Study Hours per week: ${studyHours || 15}
- Current Attendance rate: ${attendance || 85}%

Act as a smart data-driven academic predictive algorithm. Generate a personalized prediction smart tip (2 sentences max).
Include:
1. Is this target realistically achievable given their parameters?
2. What specific micro-habit should they change immediately?

Return the response strictly as a JSON object with a single key "tip" containing the generated text.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.5,
      }
    });

    const result = JSON.parse(response.text || "{}");
    res.json(result);
  } catch (error: any) {
    console.error("GPA Predictor API Error:", error);
    res.status(500).json({ 
      error: error.message || "An internal error occurred",
      isConfigError: !process.env.GEMINI_API_KEY 
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();