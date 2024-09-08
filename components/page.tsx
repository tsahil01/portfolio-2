"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Pages() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: "TypeScript", level: 4 },
    { name: "React.js", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "Solana", level: 3 },
    { name: "Web3.js", level: 3 },
    { name: "Node.js", level: 4 },
    { name: "Express.js", level: 4 },
    { name: "AWS", level: 4 },
    { name: "Docker", level: 4 },
    { name: "PostgreSQL", level: 3 },
];


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans p-6">
      <main className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-gradient-to-r  from-blue-600 to-zinc-900 text-white p-6 flex flex-row justify-between">
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-2">Sahil Tiwaskar</h1>
            <p className="text-xl">Fullstack & Web3 Developer</p>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="my-auto"
          >
            <div className="flex space-x-4 my-auto h-full">
              <a
                href="https://github.com/tsahil01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sahil-tiwaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sahiltiwaskar2003@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </header>

        <div className="p-6 space-y-6 border">
          <motion.section initial="initial" animate="animate" variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-1">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Final year Computer Engineering student, experienced fullstack
              developer with a strong focus on Web3 technologies. Passionate
              about building innovative decentralized solutions and creating
              seamless digital experiences.
            </p>
          </motion.section>

          <motion.section initial="initial" animate="animate" variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((block) => (
                      <div
                        key={block}
                        className={`h-2 w-full rounded-lg  ${
                          block <= skill.level ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="initial" animate="animate" variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Pouch: A Web3 Wallet",
                  description:
                    "An open-source HD wallet generator for Solana and Ethereum. Supports multiple blockchains and ensures secure key generation.",
                  technologies:
                    "Next.js, TypeScript, solana/web3.js, ethers, Tailwind",
                  link: "https://web3pouch.vercel.app/",
                },
                {
                  title: "Web-Dock Playground",
                  description:
                    "A SaaS platform providing instant access to Ubuntu Docker containers from the browser, with automatic disposal after use.",
                  technologies:
                    "AWS EC2, Docker, Express.js, Next.js, WebSockets",
                  link: "https://github.com/tsahil01/containers-web-editor",
                },
                {
                  title: "Quick Share",
                  description:
                    "A unique file-sharing app with a 24-hour server storage system, allowing custom URLs for easy access.",
                  technologies: "Next.js, Prisma, Tailwind, Uploadthing",
                  link: "https://ezfiles.vercel.app/",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="border-l-4 border-blue-600 pl-4"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                  <p className="text-gray-500 mt-1 text-sm">
                    Technologies: {project.technologies}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-1 text-sm"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="initial" animate="animate" variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-1">
              Education
            </h2>
            <div>
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  Bachelor of Technology in Computer Engineering
                </h3>
                <p className="text-gray-600">2021 - 2025</p>
              </div>
              <p className="text-gray-600">
                St. Vincent Pallotti College of Engineering and Technology,
                Nagpur, India <br />
                Cumulative GPA: 8.32/10.0 | 2021-2025
              </p>
            </div>
          </motion.section>

          <motion.section initial="initial" animate="animate" variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-1">
              Contact
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tsahil01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sahil-tiwaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sahiltiwaskar2003@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="text-center mt-6 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Sahil Tiwaskar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
