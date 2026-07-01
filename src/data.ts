import { 
  Notification, 
  Assignment, 
  Book, 
  DigitalAsset, 
  FinanceInstallment, 
  Interview, 
  EligibleCompany, 
  RecentApplication, 
  ScheduleClass 
} from "./types";

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: "notif-1",
    category: "Academic",
    title: "Mid-Semester Grades Released",
    description: "Your grade sheet for Advanced Mathematics is available in Academics.",
    time: "2 hours ago",
    read: false
  },
  {
    id: "notif-2",
    category: "Exam",
    title: "Algorithms Exam Schedule",
    description: "Data Structures & Algorithms midterm starts tomorrow at 09:00 AM in Lecture Hall C.",
    time: "4 hours ago",
    read: false
  },
  {
    id: "notif-3",
    category: "Placement",
    title: "Google Interview Shortlist",
    description: "Congratulations! You have been shortlisted for Google UX Engineering Interview Round 1.",
    time: "1 day ago",
    read: false
  },
  {
    id: "notif-4",
    category: "Fee",
    title: "Tuition Fee Reminder",
    description: "The 3rd installment deadline of $1,250 is approaching on July 10th, 2026.",
    time: "2 days ago",
    read: true
  },
  {
    id: "notif-5",
    category: "Academic",
    title: "Quantum Physics Lab Rescheduled",
    description: "The lab session is moved from Thursday 10:00 AM to Friday 02:00 PM.",
    time: "3 days ago",
    read: true
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: "assign-1",
    subject: "Advanced Mathematics",
    title: "Fourier Transform & PDEs",
    description: "Solve problems 1-12 on Partial Differential Equations and continuous Fourier synthesis. Show complete mathematical derivations.",
    dueDate: "Tomorrow, 11:59 PM",
    status: "Pending",
    timeLeft: "27 hours left",
    countdownSeconds: 97200
  },
  {
    id: "assign-2",
    subject: "Quantum Physics Lab",
    title: "Zeeman Effect Experiment",
    description: "Submit laboratory write-up and calculations for the Zeeman Effect under localized magnetic field lines. Compile in standardized IEEE PDF.",
    dueDate: "July 04, 2026",
    status: "Pending",
    timeLeft: "4 days left",
    countdownSeconds: 345600
  },
  {
    id: "assign-3",
    subject: "Cognitive Neuroscience",
    title: "fMRI Data Analysis & Mapping",
    description: "Identify and map neurological activation in high-resolution cortical scans during linguistic and auditory task responses.",
    dueDate: "July 08, 2026",
    status: "Pending",
    timeLeft: "8 days left",
    countdownSeconds: 691200
  },
  {
    id: "assign-4",
    subject: "Data Structures & Algorithms",
    title: "Optimal BST Implementation",
    dueDate: "June 28, 2026",
    status: "Graded",
    grade: "A+",
    feedback: "Exceptional runtime performance. The dynamic programming cache is extremely clean."
  },
  {
    id: "assign-5",
    subject: "Software Engineering",
    title: "Microservices Design & Architecture",
    dueDate: "June 25, 2026",
    status: "Graded",
    grade: "A",
    feedback: "Pristine domain boundaries. Adding a circuit breaker pattern is highly recommended next time."
  },
  {
    id: "assign-6",
    subject: "Advanced Mathematics",
    title: "Linear Algebra & Vectors",
    dueDate: "June 20, 2026",
    status: "Completed"
  }
];

export const BORROWED_BOOKS: Book[] = [
  {
    id: "book-1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    dueDate: "July 05, 2026",
    daysLeft: 5,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=150&auto=format&fit=crop",
    renewed: false
  },
  {
    id: "book-2",
    title: "Principles of Neural Science",
    author: "Eric R. Kandel",
    dueDate: "July 12, 2026",
    daysLeft: 12,
    coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=150&auto=format&fit=crop",
    renewed: false
  },
  {
    id: "book-3",
    title: "Quantum Mechanics: Concept & App",
    author: "Nouredine Zettili",
    dueDate: "Tomorrow",
    daysLeft: 1,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=150&auto=format&fit=crop",
    renewed: true
  }
];

export const DIGITAL_ASSETS: DigitalAsset[] = [
  {
    id: "asset-1",
    name: "Fourier Analysis Cheat Sheet.pdf",
    size: "2.4 MB",
    date: "June 20, 2026",
    format: "pdf"
  },
  {
    id: "asset-2",
    name: "Zeeman Lab Handout v2.epub",
    size: "4.1 MB",
    date: "June 18, 2026",
    format: "epub"
  },
  {
    id: "asset-3",
    name: "Neuroscience-Cortical-Mapping-Slides.pdf",
    size: "12.8 MB",
    date: "June 25, 2026",
    format: "pdf"
  },
  {
    id: "asset-4",
    name: "Algorithms-Practice-Midterm.doc",
    size: "1.2 MB",
    date: "June 29, 2026",
    format: "doc"
  }
];

export const FINANCE_INSTALLMENTS: FinanceInstallment[] = [
  {
    id: "inst-1",
    name: "1st Installment (Admission Fee)",
    amount: 1500,
    dueDate: "Sept 10, 2025",
    status: "Paid"
  },
  {
    id: "inst-2",
    name: "2nd Installment (Semester Fee)",
    amount: 2250,
    dueDate: "Jan 15, 2026",
    status: "Paid"
  },
  {
    id: "inst-3",
    name: "3rd Installment (Tuition & Lab)",
    amount: 1250,
    dueDate: "July 10, 2026",
    status: "Pending"
  },
  {
    id: "inst-4",
    name: "4th Installment (Exam & Amenities)",
    amount: 750,
    dueDate: "Oct 15, 2026",
    status: "Pending"
  }
];

export const UPCOMING_INTERVIEWS: Interview[] = [
  {
    id: "int-1",
    company: "Google",
    round: "UX Engineering (Technical Round 1)",
    time: "July 02, 2026 • 10:00 AM",
    type: "Virtual Classroom",
    icon: "Code"
  },
  {
    id: "int-2",
    company: "Stripe",
    round: "Software Engineer (System Architecture)",
    time: "July 06, 2026 • 02:30 PM",
    type: "Google Meet",
    icon: "Server"
  },
  {
    id: "int-3",
    company: "Meta",
    round: "AI Research Assistant (Hiring Manager Round)",
    time: "July 15, 2026 • 11:00 AM",
    type: "Metaverse / VC Hub",
    icon: "BrainCircuit"
  }
];

export const ELIGIBLE_COMPANIES: EligibleCompany[] = [
  {
    id: "company-1",
    name: "Google",
    role: "UX Engineer / Frontend Architect",
    package: "$180,000 / Year",
    logoUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=80&auto=format&fit=crop"
  },
  {
    id: "company-2",
    name: "Stripe",
    role: "Core Infrastructure Engineer",
    package: "$165,000 / Year",
    logoUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=80&auto=format&fit=crop"
  },
  {
    id: "company-3",
    name: "Netflix",
    role: "Streaming Infrastructure Developer",
    package: "$195,000 / Year",
    logoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=80&auto=format&fit=crop"
  }
];

export const RECENT_APPLICATIONS: RecentApplication[] = [
  {
    id: "app-1",
    company: "Google",
    logoText: "G",
    status: "Shortlisted",
    date: "June 25, 2026"
  },
  {
    id: "app-2",
    company: "Stripe",
    logoText: "S",
    status: "In Review",
    date: "June 28, 2026"
  },
  {
    id: "app-3",
    company: "Uber",
    logoText: "U",
    status: "Applied",
    date: "June 29, 2026"
  },
  {
    id: "app-4",
    company: "Microsoft",
    logoText: "M",
    status: "Rejected",
    date: "June 15, 2026"
  }
];

export const WEEKLY_SCHEDULE: ScheduleClass[] = [
  {
    id: "class-1",
    time: "09:00",
    period: "AM",
    subject: "Advanced Mathematics",
    instructor: "Dr. Emily Ross",
    room: "Room 402-A",
    duration: "1.5 hours",
    active: true
  },
  {
    id: "class-2",
    time: "11:00",
    period: "AM",
    subject: "Quantum Physics Lab",
    instructor: "Prof. Albert Stern",
    room: "Laser lab 3",
    duration: "2 hours"
  },
  {
    id: "class-3",
    time: "02:00",
    period: "PM",
    subject: "Cognitive Neuroscience",
    instructor: "Dr. Sarah Vance",
    room: "Seminar Room B",
    duration: "1.5 hours"
  },
  {
    id: "class-4",
    time: "04:00",
    period: "PM",
    subject: "Data Structures & Algorithms",
    instructor: "Prof. Alan Turing",
    room: "Lecture Hall C",
    duration: "1 hour"
  }
];

export const SUBJECT_ATTENDANCE = [
  { id: "sub-1", code: "MTH-401", name: "Advanced Mathematics", present: 28, total: 32, percentage: 87.5, bunkable: 2 },
  { id: "sub-2", code: "PHY-402L", name: "Quantum Physics Lab", present: 14, total: 15, percentage: 93.3, bunkable: 1 },
  { id: "sub-3", code: "NEU-405", name: "Cognitive Neuroscience", present: 22, total: 28, percentage: 78.5, bunkable: 0 },
  { id: "sub-4", code: "CSE-409", name: "Data Structures & Algorithms", present: 30, total: 35, percentage: 85.7, bunkable: 3 },
  { id: "sub-5", code: "SWE-412", name: "Software Engineering", present: 24, total: 24, percentage: 100, bunkable: 4 }
];