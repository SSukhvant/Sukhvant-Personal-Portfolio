"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const [show, setShow] = useState(false);

  const showMore = () => {
    setShow(!show);
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Greetings! I'm Sukhvant Singh, and I'm thrilled to welcome you to my
        digital realm. I've always been captivated by the limitless
        possibilities of the digital world, and my journey as a{" "}
        <span className="font-medium">web developer</span> has been nothing
        short of exhilarating.
        <br />
        My educational voyage led me to{" "}
        <span className="font-medium">Lovely Professional University</span>,
        where I immersed myself in the world of{" "}
        <span className="font-medium">Computer Science and Engineering</span>.
        Graduating with a degree in this field was the foundation that laid the
        groundwork for my passion in web development. It was here that I
        discovered my love for coding and the art of creating seamless,
        user-centric online experiences.
        <br />
      </p>
      {show && (
        <p>
          In my quest to master the digital landscape, I've honed my skills in a
          diverse array of technologies.{" "}
          <span className="font-medium">JavaScript</span>, with its dynamic
          capabilities, is my canvas; I craft intricate, interactive features
          with this versatile language.{" "}
          <span className="font-medium italic">
            React JS, Next.js, Bootstrap, Material UI, and Tailwind CSS
          </span>{" "}
          are my trusty brushes, helping me shape captivating user interfaces
          and responsive designs. My familiarity with databases like{" "}
          <span className="font-medium">MongoDB and NeDB</span> ensures that the
          data beneath the surface is as solid as the{" "}
          <span className="font-medium">front-end</span> experience.
          <br />
          What drives me is not just the technical aspect, but the fusion of
          creativity and <span className="font-medium">problem-solving</span>.
          I've had the privilege of designing and developing websites that are
          not just functional but also aesthetically pleasing. Crafting clean
          and modern websites using{" "}
          <span className="font-medium italic">
            Next.js, Tailwind CSS, Node Mailer, and Framer Motion
          </span>{" "}
          has been a particularly rewarding experience. It's about creating
          digital spaces that users can effortlessly navigate, irrespective of
          the device they're on.
          <br />
          My passion extends to e-commerce as well, where I've worked
          extensively with{" "}
          <span className="font-medium">WordPress and WooCommerce</span>,
          optimizing websites for speed and user experience. Building a seamless
          shopping experience and ensuring that customers have a frictionless
          journey is my ultimate goal in{" "}
          <span className="font-medium">e-commerce</span> web development.
          <br />
          Apart from the technical facets, I thrive in the dynamic world of
          problem-solving. I've developed a{" "}
          <span className="font-medium">Progressive Web App (PWA)</span> using
          React JS and Bootstrap, where users can create, edit, filter, and
          delete notes. It's the fusion of creativity and functionality that
          excites me every day.
          <br />
          I'm not just about the code; I'm a creative thinker and a team player.
          My experience has taught me the importance of collaboration, and I'm
          equally at ease working independently or as part of a diverse team. I
          believe that the best solutions often arise from combining unique
          perspectives and talents.
          <br />
          As I look forward, I'm inspired by the ever-evolving nature of
          technology. Staying updated and continually learning is not just a
          habit but a way of life for me. I'm eager to explore new challenges
          and bring my skills to the table, whether it's designing a sleek
          website, crafting efficient code, or contributing innovative ideas to
          a team.
          <br />
          Thank you for taking the time to get to know me. I'm excited about the
          prospect of collaborating on projects that push the boundaries of
          what's possible in the digital world. If you'd like to connect,
          discuss ideas, or explore potential opportunities, please don't
          hesitate to reach out.
          <br />
          Let's embark on this digital journey together!
        </p>
      )}

      <button
        className="btn-highlight-none group bg-white px-7 py-3 mt-7 mx-auto flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        onClick={showMore}
      >
        {show ? "Load Less" : "Load More"}
      </button>
    </motion.section>
  );
}
