import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      {/**
       *  UI: Spotlights - Beach theme with ocean and coral colors
       */}
      <div>
        <Spotlight
          className="-top-80 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#14b8a6" // tropical teal
        />
        <Spotlight
          className="h-[90vh] w-[50vw] top-10 left-full"
          fill="#ff7f50" // coral
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#0ea5e9" /> {/* ocean blue */}
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-deep-space-900 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-ocean-900 bg-white dark:bg-grid-white/[0.001] bg-grid-ocean-900/[0.8]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-ocean-900
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-8 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-tropical-200 max-w-80 mb-4">
            Welcome to my site!
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           */}
          <TextGenerateEffect
            words="Transforming Ideas into Code, Always Innovating"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-6"
          />

          <div className="flex flex-col md:flex-row items-center">
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl md:mb-0 md:mr-4 text-sand-100">
              Hi! I&apos;m Khushi Patel, a Masters student majoring in Computer Science at University of California, San Diego.
            </p>
            <Image
              src="/KP.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-full border-2 border-coral-400"
            />
          </div>

          <a href="#experience">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
