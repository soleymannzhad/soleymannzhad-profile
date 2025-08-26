"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowRight, RxCross2 } from "./ui/icons";

// نوع پروژه
type Project = {
  id: number;
  title: string;
  title_popup: string;
  category: "web" | "app";
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
    title_popup: "Security Systems E-Commerce Website",
    category: "web",
    image: "/p-1.jpg",
    description:
      "The Sabaa System project has been active for years in the field of security systems and CCTV cameras, and it has been fully implemented from scratch with a custom approach.",
    features: [
      "Created - 29 July 2024",
      "Technology - HTML , Css , JavaScript , WordPress",
      "Role - Frontend",
    ],
    website: "https://sabasystemcctv.com",
  },
  {
    id: 2,
    title: "Web design",
    title_popup: "Personal project for portfolio presentation",
    category: "web",
    image: "/p-2.jpg",
    description:
      "This is my personal project, implemented using the latest global technologies, intended for portfolio presentation.",
    features: [
      "Created - 18 June 2025",
      "Technology - React , Next.js , Tailwindcss , HTML ",
      "Role - Frontend",
    ],
    website: "https://soleymannzhad.ir",
  },
  // {
  //   id: 2,
  //   title: "اپلیکیشن موبایل آموزش",
  //   title_popup: "project Saba",
  //   category: "app",
  //   image: "https://via.placeholder.com/400x250?text=App+Education",
  //   description: "اپلیکیشن آموزش زبان برای موبایل، با طراحی ساده و کاربرپسند.",
  // },
  // {
  //   id: 3,
  //   title: "وب‌سایت شرکتی",
  //   category: "web",
  //   image: "https://via.placeholder.com/400x250?text=Corporate+Site",
  //   description: "سایت شرکتی با طراحی مدرن و ریسپانسیو برای معرفی خدمات.",
  // },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "app">("all");
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
            {["all", "web", "app"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "all" | "web" | "app")}
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
                          : "App Design"}
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
