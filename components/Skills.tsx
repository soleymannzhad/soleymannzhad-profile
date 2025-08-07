"use client";
import { useState, JSX } from "react";
import { FaCode, FaPaintBrush, FaServer, FaAngleRight } from "./ui/icons";

interface Skill {
  skill: string;
  percent: number;
}

interface TabContent {
  frontend: Skill[];
  uiux: Skill[];
  backend: Skill[];
}

interface Tab {
  id: string;
  label: string;
  dec: string;
  icon: JSX.Element;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs: Tab[] = [
    {
      id: "frontend",
      label: "Front Development",
      dec: "More than 3 Years ",
      icon: <FaCode className="mr-2 text-3xl text-colortheme2" />,
    },
    {
      id: "uiux",
      label: "UI / UX Designer",
      dec: "More than 1 Years ",
      icon: <FaPaintBrush className="mr-2 text-3xl text-colortheme2" />,
    },
    {
      id: "backend",
      label: "Backend Development",
      dec: "More than 2 Years ",
      icon: <FaServer className="mr-2 text-3xl text-colortheme2" />,
    },
  ];

  const tabContent: TabContent = {
    frontend: [
      { skill: "HTML", percent: 70 },
      { skill: "CSS", percent: 60 },
      { skill: "React", percent: 40 },
      { skill: "JavaScript", percent: 55 },
    ],
    uiux: [
      { skill: "Figma", percent: 60 },
      { skill: "Photoshop", percent: 75 },
    ],
    backend: [
      { skill: "PHP", percent: 75 },
      { skill: "MySQL", percent: 70 },
      { skill: "Next.js", percent: 60 },
    ],
  };

  return (
    <section className="relative mb-16 scroll-mt-[100px] min-h-screen">
      <div className="container" id="skills">
        <div className="text-center">
          <span className="block text-colortheme2">My Abilities</span>
          <span className="block font-bold text-4xl">My Experience</span>
        </div>

        <div className="md:flex md:mx-36 mt-16">
          {/* ستون تب‌ها */}

          <div className="w-full pr-4">
            <ul className="flex flex-col h-full justify-between gap-0">
              {tabs.map((tab) => (
                <li key={tab.id} className="flex-1 my-2">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className="w-full flex items-center justify-between text-left px-4 py-3 rounded-lg transition-all h-full"
                  >
                    <div className="flex items-center gap-2">
                      {tab.icon}
                      <div>
                        {tab.label}
                        <span className="block text-sm text-gray-500">
                          {tab.dec}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`transition-transform duration-300 ${
                        activeTab === tab.id ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      <FaAngleRight className="text-colortheme2" />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون محتوا */}
          <div className="w-full">
            <div className="space-y-4">
              {tabContent[activeTab as keyof TabContent].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{item.skill}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="w-full bg-colortheme1 rounded-full h-3">
                    <div
                      className="bg-colortheme2 h-3 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
