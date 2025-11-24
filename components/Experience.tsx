import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full relative">
      {/* Beach-themed background overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-coral-300/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-40 h-40 bg-gradient-to-br from-tropical-400/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-ocean-400/20 to-transparent rounded-full blur-xl"></div>
      </div>

      <h1 className="heading relative z-10">
        My <span className="text-coral-500">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 relative z-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: index % 4 === 0 
                ? "linear-gradient(135deg, rgba(0,51,102,0.95) 0%, rgba(14,165,233,0.9) 100%)"
                : index % 4 === 1 
                ? "linear-gradient(135deg, rgba(255,127,80,0.95) 0%, rgba(234,88,12,0.9) 100%)"
                : index % 4 === 2 
                ? "linear-gradient(135deg, rgba(20,184,166,0.95) 0%, rgba(13,148,136,0.9) 100%)"
                : "linear-gradient(135deg, rgba(240,230,140,0.95) 0%, rgba(214,165,116,0.9) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-ocean-400/20 dark:border-tropical-500/30 hover:border-coral-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-ocean-500/20"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2 w-12 h-12 border border-sand-100 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border border-sand-200 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-6 h-6 bg-sand-100 rounded-full blur-sm"></div>
              </div>
              
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 rounded-xl border-2 border-sand-100/30 shadow-lg relative z-10"
              />
              <div className="lg:ms-5 relative z-10">
                <h1 className="text-start text-xl md:text-2xl font-bold text-sand-50 mb-2">
                  {card.title}
                </h1>
                <h3 className="text-start text-l md:text-xl text-coral-300 font-semibold mb-1">
                  {card.company}
                </h3>
                <h3 className="text-start text-sand-200 mb-3 font-medium">
                  {card.dates}
                </h3>
                <p className="text-start text-sand-100 mt-3 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      
      {/* Additional beach decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
        <div className="flex justify-center items-end h-full space-x-8">
          <div className="w-2 h-8 bg-gradient-to-t from-coral-400 to-transparent rounded-full"></div>
          <div className="w-3 h-12 bg-gradient-to-t from-tropical-500 to-transparent rounded-full"></div>
          <div className="w-2 h-6 bg-gradient-to-t from-ocean-400 to-transparent rounded-full"></div>
          <div className="w-4 h-16 bg-gradient-to-t from-sunset-500 to-transparent rounded-full"></div>
          <div className="w-2 h-10 bg-gradient-to-t from-coral-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
