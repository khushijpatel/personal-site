import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const list1 = ["Java", "Python", "C++", "Git", "Linux"];
  const list2 = ["Ubuntu", "TypeScript", "Kubernetes", "JavaScript", "HTML"];
  const list3 = ["CSS", "Angular", "Next.js", "Haskell", "R"];
  const list4 = ["MongoDB", "React", "Docker", "JIRA", "Node.js"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "kjp002@ucsd.edu";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  // Dynamic background with blue-green gradients only
  const getGridBackground = () => {
    switch (id) {
      case 1:
        return "linear-gradient(135deg, rgba(2,44,34,0.9) 0%, rgba(14,165,233,0.8) 100%)";
      case 2:
        return "linear-gradient(135deg, rgba(3,105,161,0.9) 0%, rgba(52,211,153,0.8) 100%)";
      case 3:
        return "linear-gradient(135deg, rgba(6,78,59,0.9) 0%, rgba(2,132,199,0.8) 100%)";
      case 4:
        return "linear-gradient(135deg, rgba(2,132,199,0.9) 0%, rgba(4,120,87,0.8) 100%)";
      case 5:
        return "linear-gradient(135deg, rgba(4,120,87,0.9) 0%, rgba(14,165,233,0.8) 100%)";
      case 6:
        return "linear-gradient(135deg, rgba(14,165,233,0.9) 0%, rgba(6,78,59,0.8) 100%)";
      default:
        return "linear-gradient(90deg, rgba(2,44,34,1) 0%, rgba(6,78,59,1) 100%)";
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: getGridBackground(),
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 5 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-sand-300 z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-40`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div with blue-green colors */}
          {id === 5 && (
            <div className="flex gap-1 lg:gap-1 w-fit absolute -right-1 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {list1.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-ocean-600"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-ocean-600"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {list2.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-forest-700"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-forest-700"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-aurora/80"></span>
                {list3.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-aurora/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-ocean-700"></span>
                {list4.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-ocean-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-ocean-600"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
