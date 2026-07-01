export interface Notification {
  id: string;
  category: "Academic" | "Exam" | "Fee" | "Placement";
  title: string;
  description: string;
  time: string;
  read: boolean;
}

export interface Assignment {
  id: string;
  subject: string;
  title: string;
  description?: string;
  dueDate: string;
  status: "Pending" | "Completed" | "Graded";
  grade?: string;
  feedback?: string;
  timeLeft?: string;
  countdownSeconds?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  dueDate: string;
  daysLeft: number;
  coverUrl: string;
  renewed: boolean;
}

export interface DigitalAsset {
  id: string;
  name: string;
  size: string;
  date: string;
  format: "pdf" | "epub" | "doc";
}

export interface FinanceInstallment {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  status: "Pending" | "Paid" | "Overdue";
}

export interface Interview {
  id: string;
  company: string;
  round: string;
  time: string;
  type: string;
  icon: string;
}

export interface EligibleCompany {
  id: string;
  name: string;
  role: string;
  package: string;
  logoUrl: string;
}

export interface RecentApplication {
  id: string;
  company: string;
  logoText: string;
  status: "In Review" | "Shortlisted" | "Applied" | "Rejected";
  date: string;
}

export interface ScheduleClass {
  id: string;
  time: string;
  period: "AM" | "PM";
  subject: string;
  instructor: string;
  room: string;
  duration: string;
  active?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  departmentId: string;
  semester: number;
  credits: number;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  role: "student" | "teacher" | "admin" | "advisor";
  departmentId?: string;
  rollNumber?: string;
  registerNumber?: string;
  semester?: number;
  batch?: string;
  advisorId?: string;
  academicStatus?: "Active" | "Probation" | "Suspended" | "Graduated";
}

export interface Enrollment {
  id: string;
  studentId: string;
  subjectCode: string;
  semester: number;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  subjectCode: string;
  date: string;
  status: "Present" | "Absent" | "No Class";
  recordedBy: string;
  recordedAt: string;
  disputed?: boolean;
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  studentName: string;
  submittedAt: string;
  status: "Pending" | "Submitted" | "Late" | "Completed" | "Graded";
  fileUrl: string;
  score?: number;
  maxScore: number;
  feedback?: string;
  gradedAt?: string;
  gradedBy?: string;
}

export interface Exam {
  id: string;
  subjectCode: string;
  subjectName: string;
  date: string;
  time: string;
  room: string;
  instructions?: string;
  hallTicketReady: boolean;
}

export interface ExamMark {
  id: string;
  subjectCode: string;
  studentId: string;
  studentName: string;
  examName: string;
  score: number;
  maxScore: number;
  published: boolean;
}

export interface TimetableSlot {
  id: string;
  subjectCode: string;
  subjectName: string;
  dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  time: string;
  period: "AM" | "PM";
  duration: string;
  room: string;
  teacherId: string;
  teacherName: string;
  section?: string;
}

export interface AdvisorNote {
  id: string;
  studentId: string;
  advisorId: string;
  advisorName: string;
  note: string;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  actorName: string;
  actorEmail: string;
  action: string;
  entity: string;
  entityType: string;
  timestamp: string;
  metadata?: string;
}