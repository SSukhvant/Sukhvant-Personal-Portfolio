import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dm from "@/public/dm.png";
import NotesApp from "@/public/NotesApp.png";
// import dashboard from "@/public/dashboard.png";
// import dashboardGreen from "@/public/dashboardGreen.png";
import LetterCount from "@/public/LetterCount.jpg";

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
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2015",
  },
  {
    title: "Bachelor of Technology Computer Science and Engineering",
    location: "Lovely Professional University Phagwara, Punjab, India",
    description:
      "Emphasis on programming, algorithms, database management, web development, and more. Notable achievements include excellence in programming and successful project contributions.",
    icon: React.createElement(FaReact),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Digital Marketing Agency Website",
    description:
      "Designed and developed digital marketing agency website, built with Next.js 13 and enhanced with the sleekness of Tailwind CSS",
    tags: ["React.js", "Next.js", "Tailwind", "Framer Motion", "NodeMailer"],
    imageUrl: dm,
    projectUrl: "https://webdev-digital-marketing.vercel.app",
  },
  {
    title: "Keep Notes Progressive Web App",
    description:
      "This is a Progressive Web Application with CRUD functionality, designed and developed using React JS and Bootstrap 5.",
    tags: ["React.js", "Bootstrap"],
    imageUrl: NotesApp,
    projectUrl: "https://s-notes-app.netlify.app",
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
  "Java",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "WordPress",
  "Shopify"
] as const;
