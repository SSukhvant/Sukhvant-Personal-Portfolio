import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dm from "@/public/dm.png";
import NotesApp from "@/public/NotesApp.png";
// import dashboard from "@/public/dashboard.png";
// import dashboardGreen from "@/public/dashboardGreen.png";
import ecomReact from '@/public/ecom-react.png'
import LetterCount from "@/public/LetterCount.jpg";
import chatApp from '@/public/chatApp.png';
import aesop from '@/public/aesop.png'
import tc from "@/public/twitterclone.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School (10th)",
    location: "Smt. K. J. M. Inter Collage Nanakmatta, Uttarakhand, India",
    description:
      "Fundamental education in core subjects. And established a solid academic foundation with engagement in extracurricular activities.",
    icon: React.createElement(LuGraduationCap),
    date: "2012-2013",
  },
  {
    title: "Intermediate (12th)",
    location: "P. P. S. V. M. Inter Collage Nanakmatta, Uttarakhand, India",
    description:
      "Focused on science and mathematics. And strong academic performance with participation in extracurricular activities.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2015",
  },
  {
    title: "B.Tech Computer Science and Engineering",
    location: "Lovely Professional University, Phagwara, India",
    description:
      "Emphasis on programming, algorithms, database management, web development, and more. Notable achievements include excellence in programming and successful project contributions.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Front-End Developer (Intern)",
    location: "OSCARBLACK Private Limited, Remote",
    description:
      "Led UI and responsive HTML development, collaborating closely with developers and management to meet project goals. Advised on design patterns based on market trends",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Full Stack Developer",
    location: "FREELANCE, Remote",
    description:
      " Delivered 30+ responsive websites across industries such as e-commerce, travel, Business, Health, and NGOs",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full Stack Developer",
    location: "BROWNFLEET OÜ, Remote",
    description:
      "Wrote clean, clear, and well-tested code for various projects and Collaborated with other developers to identify and alleviate the number of bugs in the software.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Twitter Clone",
    description:
      "Designed and developed Twitter Clone, built with Next.js 14 and enhanced with the sleekness of Tailwind CSS",
    tags: ["Next.js", "NextAuth", "Firebase", "Recoil", "API", "Tailwind"],
    imageUrl: tc,
    projectUrl: "https://twritter-clone.vercel.app",
  },
  {
    title: "Keep Notes PWA",
    description:
      "This is a Progressive Web Application with CRUD functionality, designed and developed using React JS and Bootstrap 5.",
    tags: ["React.js", "Node JS", "Express JS", "MongoDB", "Bootstrap"],
    imageUrl: NotesApp,
    projectUrl: "https://s-notes-app.netlify.app",
  },
  {
    title: "Digital Marketing Agency Website",
    description:
      "Designed and developed digital marketing agency website, built with Next.js 13 and enhanced with the sleekness of Tailwind CSS",
    tags: ["React.js", "Next.js", "Tailwind", "Framer Motion", "NodeMailer"],
    imageUrl: dm,
    projectUrl: "https://webdev-digital-marketing.vercel.app",
  },
  {
    title: "Chat Application",
    description:
      "Developed a dynamic chat application using ReactJS, and Firebase (Authentication and Real-time Database)",
    tags: ["React.js", "Firebase", "Authentication","Real-time Database"],
    imageUrl: chatApp,
    projectUrl: "https://s-chat-app.netlify.app",
  },
  {
    title: "Ecommerce",
    description:
      "This is a responsive website with search and filter functionality, designed and developed using React JS and Material UI.",
    tags: ["React.js", "Material UI"],
    imageUrl: ecomReact,
    projectUrl: "https://s-ecom.netlify.app",
  },
  {
    title: "Aesop.com home page clone",
    description:
      "Created a dynamic web application with React JS, SCSS, and API integration.",
    tags: ["React.js", "Firebase", "Authentication","Real-time Database"],
    imageUrl: aesop,
    projectUrl: "https://aesop-homepage.netlify.app",
  },
  {
    title: "Letter Count and Add Random User Web App ",
    description:
      "Built this application using React Js, APIs and localStorage. Exposed GET, Add, and Delete methods using Axios, React Functions, and React Hooks",
    tags: ["React.Js", "React Hooks", "APIs"],
    imageUrl: LetterCount,
    projectUrl: "https://github.com/SSukhvant/Letter-Count-and-CRUD-App",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux",
  "Recoil",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "RDBMS(MySQL)",
  "NeDB",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Bootstrap",
  "Linux",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "WordPress",
  "Shopify",
] as const;
