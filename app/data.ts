export const profile = {
  name: "Aadhil N J",
  firstName: "Aadhil",
  monogram: "AN",
  role: "Full Stack Developer",
  location: "Kollam, India",
  email: "aadhilnj7@gmail.com",
  phone: "+91 7994634815",
  linkedin: "https://linkedin.com/in/aadhilnj",
  github: "https://github.com/aadhilnizar",
  resumeFile: "/Aadhil_NJ_Resume.pdf",
  available: true,
  tagline:
    "I build and modernize enterprise web applications — from legacy migrations to clean, responsive interfaces, end to end.",
  summary:
    "Junior full-stack developer with 1+ year of professional experience building production web applications with React.js, Node.js, Express.js, and JavaScript/TypeScript. Currently developing Loyaltri, a full-scale HRMS and employee-engagement platform used by 5000+ HR administrators, managers, and employees. Experienced in responsive UI development, reusable component libraries, RESTful API design and integration, role-based access control, and both relational and NoSQL databases (PostgreSQL, MySQL, MongoDB). Led the migration of a legacy internal support tool to a modern React.js and Node.js stack, and work effectively in Agile/Scrum teams across the full software development lifecycle.",
};

export const stats = [
  { value: "5000+", label: "Users served on Loyaltri HRMS" },
  { value: "10+", label: "Responsive React pages shipped" },
  { value: "~20%", label: "Page-load performance gained" },
  { value: "End-to-end", label: "Projects delivered independently" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer (Full Stack)",
    company: "Docme Cloud Solutions",
    period: "Sep 2025 — Present",
    points: [
      "Develop and maintain Loyaltri, a full-scale HRMS and employee-engagement platform serving 5000+ users, shipping features with cross-functional product and HR teams for employee records, leave management, and attendance workflows.",
      "Led the modernization of the internal Loyaltri Support Tool, migrating a legacy codebase to a React.js and Node.js stack and reducing long-standing technical debt.",
      "Re-engineered core support-tool functionality into a RESTful API using Node.js and Express.js and redesigned the interface, cutting manual support turnaround time by 10%.",
      "Built and maintained 10+ responsive React.js pages, restructuring components and removing UI inconsistencies to improve page-load performance by roughly 20%.",
      "Created reusable React.js components and shared UI patterns with Ant Design and Tailwind CSS, accelerating feature development and keeping the interface consistent across modules.",
      "Integrated frontend modules with backend REST APIs, implementing data fetching, form validation, loading states, and error handling.",
      "Implemented role-based access control (RBAC) and role-specific views so HR administrators, managers, and employees access only the data and actions relevant to their role.",
      "Debugged and resolved production issues and customer-reported bugs with QA and support teams, keeping releases stable.",
      "Tested and documented API endpoints in Postman, simplifying integration and handover across the development team.",
      "Participated in Agile sprint planning and peer code reviews, maintaining consistent code quality and on-time delivery across releases.",
    ],
  },
];

export const featured = {
  name: "Loyaltri",
  tagline: "HRMS & Employee-Engagement Platform",
  context: "Docme Cloud Solutions",
  period: "Sep 2025 — Present",
  role: "Frontend & Full-Stack Development",
  liveUrl: "https://www.loyaltri.com",
  description:
    "A full-scale HRMS and employee-engagement platform serving 5000+ users across HR teams and employees — covering onboarding, attendance, payroll, leave, and a social feed. I ship features across the product and led the modernization of its internal Support Tool, migrating a legacy codebase to a modern React + Node RESTful stack.",
  highlights: [
    "Serves 5000+ users across HR admins and employees",
    "Built 10+ responsive React pages — ~20% faster page loads",
    "Migrated the legacy Support Tool to a React.js + Node.js stack",
    "Re-engineered core support flows into a RESTful API — 10% faster turnaround",
  ],
  stack: ["React.js", "Node.js", "Express.js", "RESTful API", "Agile / Scrum"],
  // Real Loyaltri product screenshots (in /public/loyaltri). The first gallery
  // item is the default view; set `video` to a clip to override the images.
  // If a file is missing, the frame falls back to a styled dashboard mock.
  media: {
    video: "", // e.g. "/loyaltri/demo.mp4" (takes priority over images)
    gallery: [
      { src: "/loyaltri/dashboard.jpg", label: "Dashboard" },
      { src: "/loyaltri/payroll.jpg", label: "Payroll" },
      { src: "/loyaltri/attendance.jpg", label: "Attendance" },
      { src: "/loyaltri/dashboard-dark.jpg", label: "Dark mode" },
    ] as { src: string; label: string }[],
  },
};

export type Project = {
  name: string;
  type: string;
  period: string;
  description: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Eclipse Pay",
    type: "Full-Stack Payment System · Academic",
    period: "Jan 2024 — Mar 2024",
    description:
      "A secure payment-processing system with validation and error-handling designed to streamline the payment flow.",
    points: [
      "Handled 20+ simulated transactions with robust validation and error-handling.",
      "Built end-to-end with a RESTful API layer connecting frontend and backend.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Library Management / File Upload System",
    type: "Educational Platform · Freelance",
    period: "Sep 2024 — Oct 2024",
    description:
      "An integrated educational application letting 100+ students upload, organize, and access textbooks through a centralized library.",
    points: [
      "Enabled 100+ students to manage textbooks via a centralized library system.",
      "Delivered independently from requirements gathering through to deployment.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB"],
  },
];

export const skills = [
  {
    group: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "C++", "PHP", "HTML5", "CSS3 / SASS"],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "React Hooks",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
      "Ant Design",
      "shadcn/ui",
      "Responsive Web Design",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "API Integration",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    group: "Databases & ORMs",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Mongoose", "Firebase"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Figma"],
  },
  {
    group: "Practices",
    items: [
      "Agile / Scrum",
      "SDLC",
      "Code Review",
      "Unit Testing",
      "Debugging",
      "API Documentation",
      "Cross-Functional Collaboration",
    ],
  },
  {
    group: "Spoken Languages",
    items: ["English (Professional)", "Malayalam (Native)"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Sree Narayana College of Technology — University of Kerala",
    period: "Oct 2021 — Apr 2024",
  },
  {
    degree: "Higher Secondary Education (Kerala State Board)",
    school: "AKMHSS",
    period: "Jun 2020 — Mar 2021",
  },
];

export const interests = ["Football", "Coding", "Automobiles", "Gaming"];
