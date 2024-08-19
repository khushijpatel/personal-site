// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";

// const RecentProjects = () => {
//   return (
//     <div id="projects" className="py-20">
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
//         {projects.map((item) => (
//           <div
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//             key={item.id}
//           >
//             <PinContainer
//               title="/ui.aceternity.com"
//               href="https://twitter.com/mannupaaji"
//             >
//               <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162D" }}
//                 >
//                   <img src="/bg.png" alt="bgimg" />
//                 </div>
//                 <img
//                   src={item.img}
//                   alt="cover"
//                   className="z-10 absolute bottom-0"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                 {item.title}
//               </h1>

//               <p
//                 className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon5" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center"
//                 >
//                   <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </a>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;


"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setSelectedProject(null);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [selectedProject]);

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            onClick={() => setSelectedProject(item)}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            ref={popupRef}
            className="bg-white p-8 rounded-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-black text-bold text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-black text-base mb-4">{selectedProject.des}</p>
            <div className="flex gap-2 mb-4">
              {selectedProject.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                >
                  <img src={icon} alt={`icon${index}`} className="p-2" />
                </div>
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple underline"
            >
              Visit Live Site
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
