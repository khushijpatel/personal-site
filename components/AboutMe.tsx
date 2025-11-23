import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-20">
      <h1 className="heading">
        About <span className="text-ocean-500">Me</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="My Academic Background"
          icon={<AceternityIcon order="Academics" />}
          des={`College: University of California, San Diego<br />
                Degree Pursuing: Masters in Science<br />
                Major: Computer Science with specialization in Artificial Intelligence<br />
                Degree Obtained: Bachelors of Science in Computer Science from UCSD<br />`}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-forest-800 rounded-3xl overflow-hidden"
            colors={[
              [4, 120, 87],   // emerald-700
              [52, 211, 153], // aurora
            ]}
          />
        </Card>
        <Card
          title="Career Interests"
          icon={<AceternityIcon order="Career Interests" />}
          des="I'm interested in working as a Software Engineer with opportunities to grow my skills and make meaningful contributions to my workplace. I have an interest in artificial intelligence (AI), human computer interface (HCI) and computer vision (CV) applied in robotics."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-ocean-600 rounded-3xl overflow-hidden"
            colors={[
              [14, 165, 233],  // ocean-500
              [125, 211, 252], // sky-300
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Personal Interests"
          icon={<AceternityIcon order="Personal Interests" />}
          des="I love cooking, spending time with family and friends, and watching tv shows and movies."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-aurora/80 rounded-3xl overflow-hidden"
            colors={[
              [52, 211, 153],  // aurora
              [6, 78, 59],     // forest-800
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-ocean-500/20 group/canvas-card flex items-center justify-center
       dark:border-aurora/20  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl glass-card"
      style={{
        background: "linear-gradient(135deg, rgba(2,44,34,0.8) 0%, rgba(6,78,59,0.9) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-ocean-300 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-ocean-300 opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-ocean-300 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-ocean-300 opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // making it center
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="text-sand-100 text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 font-bold group-hover/canvas-card:text-sand-100 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-sand-300 text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200 text-sand-300"
          dangerouslySetInnerHTML={{ __html: des }} // Render HTML with <br /> tags
        />
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#34d399_25%,#0284c7_50%,#047857_75%,#0ea5e9_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-forest-900 px-5 py-2 text-aurora backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
