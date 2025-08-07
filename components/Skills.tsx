"use client";
import { useState } from "react";
interface Skill {
  skill: string;
  percent: number;
}

interface TabContent {
  frontend: Skill[];
  uiux: Skill[];
  backend: Skill[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Front Development" },
    { id: "uiux", label: "UI / UX Designer" },
    { id: "backend", label: "Backend Development" },
  ];

  const tabContent = {
    frontend: [
      { skill: "HTML", percent: 80 },
      { skill: "CSS", percent: 80 },
      { skill: "JavaScript", percent: 80 },
    ],
    uiux: [
      { skill: "Figma", percent: 70 },
      { skill: "Photoshop", percent: 70 },
    ],
    backend: [
      { skill: "PHP", percent: 80 },
      { skill: "MySQL", percent: 80 },
      { skill: "Next.js", percent: 80 },
    ],
  };

  return (
    <section className=" relative mb-16  scroll-mt-[100px] min-h-screen">
      <div className="container " id="skills">
        <div className="text-center">
          <span className="block text-colortheme2">My journey</span>
          <span className="block font-bold text-4xl">Qualification</span>
        </div>

        <div className="flex max-w-4xl mx-auto p-6">
          {/* ستون تب‌ها */}
          <div className="w-1/3 border-r pr-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون محتوا */}
          <div className="w-2/3 pl-6">
            <h2 className="text-xl font-semibold mb-4">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h2>
            <div className="space-y-4">
              {tabContent[activeTab as keyof TabContent].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{item.skill}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
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

// export default function Skills() {
//   return (
//     <>
//       <section className=" relative pt-16  scroll-mt-[100px] min-h-screen">
//         <div className="container ">

//           <div className="text-center">
//             <span className="block text-colortheme2">My journey</span>
//             <span className="block font-bold text-4xl">Qualification</span>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-16 md:mx-36">

//             <div>

// 1

//             </div>

//             <div>
// 2

//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
