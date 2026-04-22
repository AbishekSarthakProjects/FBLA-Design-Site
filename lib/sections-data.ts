export interface TechSection {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  ascii: string
  specs: { label: string; value: string }[]
  commands: string[]
}

export interface TutoringSession {
  id: string
  title: string
  tutor: string
  time: string
  date: string
  topic: string
  spots: number
  maxSpots: number
  level: "Beginner" | "Intermediate" | "Advanced"
}

export interface StudyGroup {
  id: string
  name: string
  topic: string
  members: number
  maxMembers: number
  nextMeeting: string
  frequency: string
}

export interface Resource {
  id: string
  title: string
  type: "video" | "lesson" | "quiz" | "download"
  topic: string
  duration?: string
  questions?: number
  fileSize?: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed?: boolean
}

export interface ProgressItem {
  id: string
  title: string
  category: string
  progress: number
  lastActivity: string
}

export const techSections: TechSection[] = [
  {
    id: "algorithms",
    number: "01",
    title: "Algorithms & Data Structures",
    subtitle: "Foundation of efficient code",
    description:
      "Master the building blocks of computer science. From arrays and linked lists to trees and graphs, learn how to organize data and solve problems efficiently with proven algorithmic techniques.",
    ascii: `
    ┌─────────────────────────────┐
    │     BINARY SEARCH TREE      │
    │            [8]              │
    │           /   \\             │
    │         [3]   [10]          │
    │         / \\      \\          │
    │       [1] [6]   [14]        │
    │           / \\    /          │
    │         [4] [7] [13]        │
    └─────────────────────────────┘`,
    specs: [
      { label: "Topics", value: "Arrays, Trees, Graphs, Sorting" },
      { label: "Complexity", value: "Big O Notation" },
      { label: "Languages", value: "Python, Java, C++" },
      { label: "Practice", value: "100+ Coding Challenges" },
    ],
    commands: [
      "$ run binary_search.py",
      "Input: [1, 3, 5, 7, 9, 11, 13]",
      "Target: 7",
      "Output: Found at index 3",
      "Time Complexity: O(log n)",
      "Status: PASSED [100%]",
    ],
  },
  {
    id: "programming",
    number: "02",
    title: "Programming Fundamentals",
    subtitle: "Write your first programs",
    description:
      "Begin your coding journey with Python, the most beginner-friendly language. Learn variables, loops, functions, and object-oriented programming through hands-on projects and interactive exercises.",
    ascii: `
    ┌─────────────────────────────┐
    │  def hello_world():         │
    │      name = input()         │
    │      print(f"Hello {name}") │
    │                             │
    │  if __name__ == "__main__": │
    │      hello_world()          │
    │                             │
    │  >>> Hello, Student!        │
    └─────────────────────────────┘`,
    specs: [
      { label: "Language", value: "Python 3.12" },
      { label: "Paradigms", value: "OOP, Functional" },
      { label: "Projects", value: "12 Guided Builds" },
      { label: "Exercises", value: "200+ Problems" },
    ],
    commands: [
      "$ python3 --version",
      "Python 3.12.0",
      "$ python3 calculator.py",
      ">>> Basic Calculator v1.0",
      ">>> Enter expression: 2 + 2",
      ">>> Result: 4",
    ],
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    subtitle: "Build for the internet",
    description:
      "Create stunning websites and web applications. Master HTML structure, CSS styling, and JavaScript interactivity. From static pages to dynamic single-page applications with React.",
    ascii: `
    ┌─────────────────────────────┐
    │  <!DOCTYPE html>            │
    │  <html>                     │
    │    <head>                   │
    │      <title>My Site</title> │
    │      <link rel="css"/>      │
    │    </head>                  │
    │    <body>                   │
    │      <script src="app.js"/> │
    │    </body>                  │
    │  </html>                    │
    └─────────────────────────────┘`,
    specs: [
      { label: "Frontend", value: "HTML, CSS, JavaScript" },
      { label: "Framework", value: "React, Next.js" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Projects", value: "5 Full Websites" },
    ],
    commands: [
      "$ npm create next-app@latest",
      "Creating new Next.js project...",
      "$ npm run dev",
      "Ready on http://localhost:3000",
      "$ npm run build",
      "Build completed [0 errors]",
    ],
  },
  {
    id: "databases",
    number: "04",
    title: "Database Systems",
    subtitle: "Store and query data",
    description:
      "Learn how modern applications store and retrieve information. Master SQL queries, database design, and understand when to use relational vs. NoSQL databases for different use cases.",
    ascii: `
    ┌─────────────────────────────┐
    │  TABLE: students            │
    │  ┌────┬──────────┬───────┐ │
    │  │ id │   name   │ grade │ │
    │  ├────┼──────────┼───────┤ │
    │  │ 1  │ Alice    │  A    │ │
    │  │ 2  │ Bob      │  B+   │ │
    │  │ 3  │ Charlie  │  A-   │ │
    │  └────┴──────────┴───────┘ │
    └─────────────────────────────┘`,
    specs: [
      { label: "SQL", value: "PostgreSQL, MySQL" },
      { label: "NoSQL", value: "MongoDB, Redis" },
      { label: "ORM", value: "Prisma, Drizzle" },
      { label: "Design", value: "Normalization, ERD" },
    ],
    commands: [
      "$ psql -d school_db",
      "school_db=#",
      "SELECT * FROM students",
      "WHERE grade = 'A';",
      "  id | name  | grade",
      "   1 | Alice |  A",
    ],
  },
  {
    id: "cybersecurity",
    number: "05",
    title: "Cybersecurity Basics",
    subtitle: "Protect digital systems",
    description:
      "Understand the principles of digital security. Learn about encryption, authentication, common vulnerabilities, and ethical hacking practices to build secure applications and protect data.",
    ascii: `
    ┌─────────────────────────────┐
    │   ENCRYPTION FLOW           │
    │                             │
    │   [Plaintext]               │
    │        │                    │
    │    ┌───▼───┐                │
    │    │  KEY  │ + Algorithm    │
    │    └───┬───┘                │
    │        │                    │
    │   [Ciphertext]              │
    │   0x7F3A2B1C...             │
    └─────────────────────────────┘`,
    specs: [
      { label: "Encryption", value: "AES, RSA, SHA-256" },
      { label: "Protocols", value: "HTTPS, TLS, OAuth" },
      { label: "Practice", value: "CTF Challenges" },
      { label: "Tools", value: "Wireshark, Burp Suite" },
    ],
    commands: [
      "$ openssl enc -aes-256-cbc",
      "Encrypting message...",
      "$ hash sha256 password.txt",
      "5e884898da280471...",
      "$ nmap localhost",
      "PORT 443 [SECURE]",
    ],
  },
  {
    id: "machine-learning",
    number: "06",
    title: "Intro to AI & ML",
    subtitle: "Teach computers to learn",
    description:
      "Explore the fascinating world of artificial intelligence. Build your first machine learning models, understand neural networks, and see how AI is transforming every industry.",
    ascii: `
    ┌─────────────────────────────┐
    │     NEURAL NETWORK          │
    │                             │
    │     O   O   O   Input       │
    │      \\ │ /                  │
    │       \\│/                   │
    │     O──O──O   Hidden        │
    │       /│\\                   │
    │      / │ \\                  │
    │     O   O   O   Output      │
    └─────────────────────────────┘`,
    specs: [
      { label: "Libraries", value: "TensorFlow, PyTorch" },
      { label: "Models", value: "CNN, RNN, Transformers" },
      { label: "Data", value: "Pandas, NumPy" },
      { label: "Projects", value: "Image Classification" },
    ],
    commands: [
      "$ python train_model.py",
      "Loading dataset: MNIST",
      "Epoch 1/10: loss=0.42",
      "Epoch 10/10: loss=0.08",
      "Accuracy: 97.3%",
      "Model saved: model.h5",
    ],
  },
  {
    id: "version-control",
    number: "07",
    title: "Git & Collaboration",
    subtitle: "Code as a team",
    description:
      "Learn professional development workflows with Git and GitHub. Master version control, branching strategies, pull requests, and collaborative coding practices used in industry.",
    ascii: `
    ┌─────────────────────────────┐
    │     GIT BRANCH FLOW         │
    │                             │
    │  main ──●──●──●──●──●──►    │
    │              \\    /         │
    │  feature ─────●──●          │
    │                             │
    │  $ git merge feature        │
    │  Merge successful!          │
    └─────────────────────────────┘`,
    specs: [
      { label: "VCS", value: "Git 2.43" },
      { label: "Platform", value: "GitHub, GitLab" },
      { label: "Workflow", value: "GitFlow, Trunk" },
      { label: "CI/CD", value: "GitHub Actions" },
    ],
    commands: [
      "$ git init",
      "Initialized empty Git repo",
      "$ git add .",
      "$ git commit -m 'Initial'",
      "$ git push origin main",
      "Branch 'main' pushed [OK]",
    ],
  },
  {
    id: "problem-solving",
    number: "08",
    title: "Competitive Programming",
    subtitle: "Sharpen your skills",
    description:
      "Prepare for coding interviews and competitions. Practice problem-solving under pressure, learn advanced techniques, and compete in weekly challenges against other students.",
    ascii: `
    ┌─────────────────────────────┐
    │   LEADERBOARD               │
    │   ┌────┬──────────┬───────┐ │
    │   │ #  │  Student │ Score │ │
    │   ├────┼──────────┼───────┤ │
    │   │ 1  │ Alex     │ 2847  │ │
    │   │ 2  │ Jordan   │ 2651  │ │
    │   │ 3  │ Taylor   │ 2598  │ │
    │   │ 4  │   YOU    │ 2445  │ │
    │   └────┴──────────┴───────┘ │
    └─────────────────────────────┘`,
    specs: [
      { label: "Platforms", value: "LeetCode, HackerRank" },
      { label: "Contests", value: "Weekly Challenges" },
      { label: "Topics", value: "DP, Graphs, Greedy" },
      { label: "Prep", value: "Interview Ready" },
    ],
    commands: [
      "$ submit solution.py",
      "Running test cases...",
      "Test 1: PASSED [2ms]",
      "Test 2: PASSED [5ms]",
      "Test 3: PASSED [3ms]",
      "All tests passed! +100pts",
    ],
  },
]

export const navLinks = techSections.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
}))

export const tutoringSessions: TutoringSession[] = [
  {
    id: "t1",
    title: "Python Basics Workshop",
    tutor: "Ms. Rodriguez",
    time: "3:30 PM - 4:30 PM",
    date: "Monday",
    topic: "Programming Fundamentals",
    spots: 8,
    maxSpots: 15,
    level: "Beginner",
  },
  {
    id: "t2",
    title: "Algorithm Problem Solving",
    tutor: "Mr. Chen",
    time: "4:00 PM - 5:00 PM",
    date: "Tuesday",
    topic: "Algorithms & Data Structures",
    spots: 3,
    maxSpots: 10,
    level: "Intermediate",
  },
  {
    id: "t3",
    title: "React & Next.js Deep Dive",
    tutor: "Ms. Patel",
    time: "3:00 PM - 4:30 PM",
    date: "Wednesday",
    topic: "Web Development",
    spots: 12,
    maxSpots: 20,
    level: "Intermediate",
  },
  {
    id: "t4",
    title: "SQL Masterclass",
    tutor: "Mr. Johnson",
    time: "4:00 PM - 5:00 PM",
    date: "Thursday",
    topic: "Database Systems",
    spots: 5,
    maxSpots: 12,
    level: "Beginner",
  },
  {
    id: "t5",
    title: "Capture The Flag Prep",
    tutor: "Dr. Williams",
    time: "3:30 PM - 5:00 PM",
    date: "Friday",
    topic: "Cybersecurity Basics",
    spots: 2,
    maxSpots: 8,
    level: "Advanced",
  },
  {
    id: "t6",
    title: "LeetCode Practice Session",
    tutor: "Peer Tutors",
    time: "12:00 PM - 1:00 PM",
    date: "Saturday",
    topic: "Competitive Programming",
    spots: 15,
    maxSpots: 25,
    level: "Intermediate",
  },
]

export const studyGroups: StudyGroup[] = [
  {
    id: "sg1",
    name: "Python Pioneers",
    topic: "Programming Fundamentals",
    members: 12,
    maxMembers: 15,
    nextMeeting: "Monday 4PM",
    frequency: "Weekly",
  },
  {
    id: "sg2",
    name: "Web Wizards",
    topic: "Web Development",
    members: 8,
    maxMembers: 12,
    nextMeeting: "Wednesday 3:30PM",
    frequency: "Twice Weekly",
  },
  {
    id: "sg3",
    name: "Algorithm Aces",
    topic: "Algorithms & Data Structures",
    members: 6,
    maxMembers: 8,
    nextMeeting: "Tuesday 5PM",
    frequency: "Weekly",
  },
  {
    id: "sg4",
    name: "Security Squad",
    topic: "Cybersecurity Basics",
    members: 5,
    maxMembers: 10,
    nextMeeting: "Thursday 4PM",
    frequency: "Bi-Weekly",
  },
  {
    id: "sg5",
    name: "ML Explorers",
    topic: "Intro to AI & ML",
    members: 10,
    maxMembers: 12,
    nextMeeting: "Friday 3PM",
    frequency: "Weekly",
  },
]

export const resources: Resource[] = [
  // Videos
  {
    id: "r1",
    title: "Introduction to Python",
    type: "video",
    topic: "Programming Fundamentals",
    duration: "45 min",
    difficulty: "Beginner",
    completed: true,
  },
  {
    id: "r2",
    title: "Understanding Big O Notation",
    type: "video",
    topic: "Algorithms & Data Structures",
    duration: "32 min",
    difficulty: "Intermediate",
    completed: true,
  },
  {
    id: "r3",
    title: "Building Your First React App",
    type: "video",
    topic: "Web Development",
    duration: "58 min",
    difficulty: "Intermediate",
    completed: false,
  },
  {
    id: "r4",
    title: "Neural Networks Explained",
    type: "video",
    topic: "Intro to AI & ML",
    duration: "41 min",
    difficulty: "Advanced",
    completed: false,
  },
  // Lessons
  {
    id: "r5",
    title: "Variables and Data Types",
    type: "lesson",
    topic: "Programming Fundamentals",
    duration: "20 min read",
    difficulty: "Beginner",
    completed: true,
  },
  {
    id: "r6",
    title: "SQL JOIN Operations",
    type: "lesson",
    topic: "Database Systems",
    duration: "15 min read",
    difficulty: "Intermediate",
    completed: false,
  },
  {
    id: "r7",
    title: "Git Branching Strategies",
    type: "lesson",
    topic: "Git & Collaboration",
    duration: "12 min read",
    difficulty: "Beginner",
    completed: true,
  },
  {
    id: "r8",
    title: "Encryption Fundamentals",
    type: "lesson",
    topic: "Cybersecurity Basics",
    duration: "25 min read",
    difficulty: "Intermediate",
    completed: false,
  },
  // Quizzes
  {
    id: "r9",
    title: "Python Basics Quiz",
    type: "quiz",
    topic: "Programming Fundamentals",
    questions: 20,
    difficulty: "Beginner",
    completed: true,
  },
  {
    id: "r10",
    title: "Data Structures Challenge",
    type: "quiz",
    topic: "Algorithms & Data Structures",
    questions: 15,
    difficulty: "Intermediate",
    completed: false,
  },
  {
    id: "r11",
    title: "HTML/CSS Assessment",
    type: "quiz",
    topic: "Web Development",
    questions: 25,
    difficulty: "Beginner",
    completed: true,
  },
  {
    id: "r12",
    title: "Security Best Practices",
    type: "quiz",
    topic: "Cybersecurity Basics",
    questions: 18,
    difficulty: "Intermediate",
    completed: false,
  },
  // Downloads
  {
    id: "r13",
    title: "Python Cheat Sheet",
    type: "download",
    topic: "Programming Fundamentals",
    fileSize: "2.4 MB",
    difficulty: "Beginner",
  },
  {
    id: "r14",
    title: "Algorithm Complexity Guide",
    type: "download",
    topic: "Algorithms & Data Structures",
    fileSize: "1.8 MB",
    difficulty: "Intermediate",
  },
  {
    id: "r15",
    title: "React Component Library",
    type: "download",
    topic: "Web Development",
    fileSize: "5.2 MB",
    difficulty: "Intermediate",
  },
  {
    id: "r16",
    title: "SQL Commands Reference",
    type: "download",
    topic: "Database Systems",
    fileSize: "1.1 MB",
    difficulty: "Beginner",
  },
]

export const progressData: ProgressItem[] = [
  {
    id: "p1",
    title: "Programming Fundamentals",
    category: "Course",
    progress: 78,
    lastActivity: "2 hours ago",
  },
  {
    id: "p2",
    title: "Algorithms & Data Structures",
    category: "Course",
    progress: 45,
    lastActivity: "Yesterday",
  },
  {
    id: "p3",
    title: "Web Development",
    category: "Course",
    progress: 62,
    lastActivity: "3 days ago",
  },
  {
    id: "p4",
    title: "Python Basics Quiz",
    category: "Quiz",
    progress: 100,
    lastActivity: "1 week ago",
  },
  {
    id: "p5",
    title: "Database Systems",
    category: "Course",
    progress: 23,
    lastActivity: "5 days ago",
  },
  {
    id: "p6",
    title: "Git & Collaboration",
    category: "Course",
    progress: 91,
    lastActivity: "Today",
  },
]
