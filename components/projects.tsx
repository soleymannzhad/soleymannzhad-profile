"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projects = [
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform with React and Node.js",
    image: "/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with Next.js",
    image: "/project2.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with WordPress",
    image: "/project3.jpg",
    tags: ["WordPress", "PHP", "MySQL"],
  },
];

export default function Projectsweb() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="title-all-section">My Projects</span>
          <p className="mt-4 text-gray-500 text-center">
            Here are some of my recent projects. Each project is a unique
            challenge that I've tackled with modern technologies and best
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500 "
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
