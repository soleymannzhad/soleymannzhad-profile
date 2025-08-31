"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowRight, RxCross2 } from "./ui/icons";

// نوع پروژه
type Project = {
  id: number;
  title: string;
  title_popup: string;
  category: "web" | "support";
  image: string;
  description: string;
  features: string[]; // لیست ویژگی‌ها
  website?: string; // لینک سایت (اختیاری)
};

// دیتا
const projects: Project[] = [
  {
    id: 1,
    title: "Web design",
    title_popup: "Personal project for portfolio presentation",
    category: "web",
    image: "/p-2.jpg",
    description:
      "This is my personal project, implemented using the latest global technologies, intended for portfolio presentation.",
    features: [
      "Created - 18 June 2025",
      "Technology - React , Next.js , Tailwindcss , HTML , css ",
      "Role - Frontend",
    ],
    website: "https://soleymannzhad.ir",
  },

 {
    id: 2,
    title: "Web design",
    title_popup: "Design and implementation of a food website",
    category: "web",
    image: "/p-7.jpg",
    description:
      "Design, implementation, and development of a fully responsive, custom e-commerce website in the food industry.",
    features: [
      "Created - 3 April 2024",
      "Technology - HTML , Css , Eelementor , JavaScript , WordPress , php , jet Engine",
      "Role - Frontend , Backend",
    ],
    website: "https://bealavehfood.ir",
  },



  
  {
    id: 3,
    title: "Web design",
    title_popup: "Design and implementation of an English landing page",
    category: "web",
    image: "/p-9.jpg",
    description:
      "Implementation of a complete English landing page, from start to finish, as requested by the esteemed client, for a website in the coaching and psychology field.",
    features: [
      "Created - 22 May 2025",
      "Technology - HTML , Css , JavaScript , WordPress , php",
      "Role - Frontend",
    ],
    website: "https://rai-mana.com/en",
  },
  {
    id: 4,
    title: "support",
    title_popup: "Full project support and development",
    category: "support",
    image: "/p-8.jpg",
    description:
      "Complete support and development of an e-commerce website in the field of tools and hardware sales.",
    features: [
      "Created - 28 March 2024",
      "Technology - HTML , Css , JavaScript , WordPress , php",
      "Role - Frontend , Backend",
    ],
    website: "https://olamaee.com",
  },


{
    id: 5,
    title: "Web design",
    title_popup: "Security Systems E-Commerce Website",
    category: "web",
    image: "/p-1.jpg",
    description:
      "The Sabaa System project has been active for years in the field of security systems and CCTV cameras, and it has been fully implemented from scratch with a custom approach.",
    features: [
      "Created - 29 July 2024",
      "Technology - HTML , Css , JavaScript , WordPress , php , jet Engine ",
      "Role - Frontend",
    ],
    website: "https://sabasystemcctv.com",
  },



 



  {
    id: 6,
    title: "support",
    title_popup: "Full-scale technical development, support, and SEO",
    category: "support",
    image: "/p-4.jpg",
    description:
      "I manage a fully custom-coded coaching and psychology e-commerce site, including development, technical, and SEO support.",
    features: [
      "Created - 28 December 2023",
      "Technology - HTML , Css , JavaScript , WordPress , php , CMB2",
      "Role - Frontend , Backend",
    ],
    website: "https://rai-mana.com",
  },
    {
    id: 7,
    title: "Web design",
    title_popup: "Design and implementation of a dairy and ice cream factory website",
    category: "web",
    image: "/p-3.jpg",
    description:
      "Fully custom website implementation with scalability, available in both Persian and Arabic.",
    features: [
      "Created - 15 December 2024",
      "Technology - HTML , Css , JavaScript , WordPress , php , jet Engine",
      "Role - Frontend , Backend",
    ],
    website: "https://shavis.ir",
  },
    {
    id: 8,
    title: "Web design",
    title_popup: "Custom-built and scalable corporate website implementation",
    category: "web",
    image: "/p-5.jpg",
    description:
      "This website is fully custom-built with complete scalability and is available in Arabic, English, and Persian.",
    features: [
      "Created - 28 December 2023",
      "Technology - HTML , Css , JavaScript , WordPress , php , jet Engine",
      "Role - Frontend , Backend",
    ],
    website: "https://bealaveh.com",
  },
  {
    id: 9,
    title: "Web design",
    title_popup: "Implementation of a personal website for consulting",
    category: "web",
    image: "/p-6.jpg",
    description:
      "Implementation of a personal website for digital marketing consulting, available in both Persian and English.",
    features: [
      "Created - 28 December 2023",
      "Technology - HTML , Css , JavaScript , WordPress , php , jet Engine",
      "Role - Frontend , Backend",
    ],
    website: "https://hamidrezaazizi.com",
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "support">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="relative mb-16 scroll-mt-[100px] min-h-screen">
      <div className="container" id="work">
        <div className="text-center">
          <span className="block text-colortheme2">My Portfolio</span>
          <span className="block font-bold text-4xl">Recent Works</span>
        </div>

        <div className="p-8">
          {/* تب‌ها */}
          <div className="flex gap-4 mb-8 justify-center">
            {["all", "web", "support"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "all" | "web" | "support")}
                className={`px-4 py-2 rounded-xl font-medium transition ${
                  activeTab === tab
                    ? "bg-colortheme2 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* گرید پروژه‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-colortheme1 rounded-2xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover rounded-lg"
                      style={{
                        boxShadow: "0px 0px 12px 0px rgb(223 223 223 / 22%)",
                      }}
                    />
                  </div>
                  <div className="p-4 ">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="py-4 text-colortheme2 flex items-center group"
                    >
                      Demo
                      <span className="transition-all duration-200 group-hover:ml-2">
                        <TiArrowRight />
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* مودال نمایش جزئیات پروژه */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 "
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-colortheme1 rounded-lg p-6 max-w-5xl w-full
             max-h-[90vh] overflow-y-auto"
                >
                  <div className="py-6 md:py-0">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="md:absolute top-3.5 right-4 p-2"
                    >
                      <RxCross2 className="text-colortheme2 text-xl" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="flex items-center">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full object-cover rounded-lg"
                        style={{
                          boxShadow: "0px 0px 12px 0px rgb(223 223 223 / 22%)",
                        }}
                      />
                    </div>

                    <div className="space-y-6">
                      {/* دسته‌بندی */}
                      <div className="text-sm text-white mt-6">
                        Featured –
                        {selectedProject.category === "web"
                          ? "Web Design"
                          : " Support"}
                      </div>

                      {/* عنوان */}
                      <h2 className="text-2xl font-bold text-white">
                        {selectedProject.title_popup}
                      </h2>

                      {/* توضیحات */}
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>

                      {/* لیست ویژگی‌ها */}
                      {selectedProject.features &&
                        selectedProject.features.length > 0 && (
                          <ul className="list-none list-inside space-y-1 text-gray-300 ">
                            {selectedProject.features.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}

                      {/* لینک سایت */}
                      {selectedProject.website && (
                        <div className="text-sm ">
                          <span className="font-medium mr-3">View: </span>
                          <a
                            href={selectedProject.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-colortheme2 hover:underline"
                          >
                            {selectedProject.website.replace(
                              /^https?:\/\//,
                              ""
                            )}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
