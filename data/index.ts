import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

export const skills = [
  { name: "HTML/CSS", icon: Code, level: 95 },
  { name: "JavaScript", icon: Code, level: 90 },
  { name: "Bootstrap", icon: Code, level: 95 },
  { name: "Laravel", icon: Code, level: 95 },
  { name: "PHP", icon: Code, level: 95 },
  { name: "React", icon: Code, level: 95 },
  { name: "Tailwind CSS", icon: Code, level: 95 },
  { name: "Next.js", icon: Globe, level: 90 },
  { name: "Node.js", icon: Server, level: 85 },
  { name: "MySql", icon: Code, level: 80 },
  { name: "PostgreSQL", icon: Database, level: 85 },
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "GitHub", icon: Database, level: 80 },
  
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by OpenAI's GPT API with custom training data and context-aware responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for data visualization with real-time charts, filtering capabilities, and export functionality.",
    tech: ["D3.js", "React", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with user authentication, markdown support, and social sharing capabilities.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
];

export const experience = [
  {
    title: "MERN STACK AND LARAVEL DEVELOPER",
    company: "Rank Sol.",
    period: "2026 - Present",
    location: "Faisalabad",
     description:
      "As a MERN Stack and Laravel Developer at Rank Sol, I am responsible for designing, developing, and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Laravel framework. My role involves collaborating with cross-functional teams to deliver high-quality solutions that meet client requirements. I have successfully built scalable web applications, developed reusable components, integrated RESTful APIs, and improved website performance while ensuring cross-browser compatibility.",
    achievements: [
      "Developed a responsive Ion Fair  frontend using Tailwind CSS and JavaScript. ",
      "Built scalable web applications using MERN Stack and Laravel.",
      "Developed reusable React components and Laravel Blade templates",
      "Integrated RESTful APIs and third-party services.",
      "Improved website performance and ensured cross-browser compatibility",
      "Worked closely with designers and backend teams to deliver high-quality solutions",
    ],
  },
  
  {
    title: "Frontend Developer",
    company: "Burj Soft",
    period: "01/Oct,2025/ 31 Dec,2025 ",
    location: "Multan",
    description:
      "As a Frontend Developer at Burj Soft, I am responsible for designing and developing responsive web applications using modern technologies like Tailwind CSS and JavaScript. My role involves creating user-friendly interfaces, optimizing performance, and ensuring cross-browser compatibility.",
    achievements: [
      "Developed a responsive Flight Booking website frontend using Tailwind CSS and JavaScript.",
      "The application allows users to search for flights, view dynamic flight results, and book flights with data stored in the browser using LocalStorage",
      "The project focuses on clean UI/UX design, responsive layouts, and interactive components. Tailwind CSS was used to create modern, mobile-first layouts with utility-first styling, while JavaScript handled dynamic rendering, search functionality, booking logic, and state management.",
      "Currently learning PHP laravel framework and completed assigned tasks related laravel admin dasboard, users CRUD, bareeze package, and REST API’s.",
    ],
  },

  {
    title: "Intern - Web Development",
    company: "PNY Technology.",
    period: "July 2025 - Sep 2025 ",
    location: "Multan",
    description:
      "As a Web Development Intern at PNY Technology, I gained hands-on experience in developing and maintaining web applications using React.js, Node.js, Laravel, and MongoDB/MySQL. I collaborated with the development team to implement new features, fix bugs, and optimize performance. This internship provided me with valuable insights into the software development lifecycle and enhanced my skills in frontend and backend technologies.",
    achievements: [
      "Trained in developing and maintaining full-stack applications using React.js,Node.js, Laravel, and MongoDB/MySQL.",
     
    ],
  },
];
