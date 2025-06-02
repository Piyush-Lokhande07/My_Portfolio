'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
// import animationData from '@/data/confetti.json';
// import MagicButton from "./MagicButton";
// import { IoCopyOutline } from "react-icons/io5";
// import Lottie from 'lottie-react';

// === GRID WRAPPER COMPONENT ===
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
            "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mx-auto",
            className
            )}
      >



            {children}
      </div>
      );
      };

      // === INDIVIDUAL GRID ITEM COMPONENT ===
      export const BentoGridItem = ({
      className,
      title,
      description,
      img,
      imgClassName,
      titleClassName,
      spareName,
      id,
      spareImg,
      }: {
      className?: string;
      title?: string | React.ReactNode;
      description?: string | React.ReactNode;
      header?: React.ReactNode;
      icon?: React.ReactNode;
      id: number; // Used to conditionally render different content
      img?: string;
      imgClassName?: string;
      titleClassName?: string;
      spareName?: string;
      spareImg?: string;
      }) => {
      const [copied, setCopied] = useState(false);

      // === Handles email copy interaction ===
      const handleCopy = () => {
      navigator.clipboard.writeText('piyushkailas88@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      };

      return (
      <div
            className={cn(
            "group/bento shadow-input overflow-hidden row-span-1 flex flex-col justify-between space-y-4 relative rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-non border border-white/[0.1] h-[300px]",
            className,
            )}
            style={{
            background:
            "linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #7e3ff2 100%)",
            }}
      >
            

            {/* === Outer Content Wrapper (adds optional center alignment for id 6) === */}
            <div className={`${id === 6 && 'flex justify-center'}h-full`}>

            {/* === Main Background Image (for any card that provides `img`) === */}
            <div className="w-full h-full absolute">
            {img && (
                  <img
                  src={img}
                  alt="grid-img"
                  className={cn(imgClassName, "object-cover object-center")}
                  />
            )}
            </div>

            {/* === Optional Spare Image (for cards with `spareImg`) === */}
            {spareImg && (
            <div className={cn("absolute right-0 -bottom-5", id === 5 && "w-full opacity-80")}>
                  <img
                  src={spareImg}
                  alt="spare-img"
                  className={cn(imgClassName, "object-cover object-center w-full h-full")}
                  />
            </div>
            )}

            {/* === Special Animated Background for Card ID 6 === */}
            {id === 6 && (
            <BackgroundGradientAnimation>
                  {/* Put animated content here if needed */}
            </BackgroundGradientAnimation>
            )}

            {/* === Main Card Content Area (text + custom content) === */}
            <div
            className={cn(
                  titleClassName,
                  'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}
            >

            {/* === Description Text (shown in all cards) === */}
            <div
                  className={cn(
                  "font-sans text-[#c1c2d3] font-extralight z-10",
                  id === 4 ? "text-lg md:text-xl lg:text-2xl" : "text-sm md:text-xs lg:text-base"
                  )}
                  >
                  {description}
            </div>


            {/* === Title Text (shown in all cards) === */}
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mb-3">
                  {title}
            </div>

            {/* === Globe Animation (Only in Card ID 2) === */}
            {id === 2 && <GlobeDemo />}

            {/* === Tech Stack Tags (Only in Card ID 3) === */}
            {id === 3 && (
                  <div className="flex flex-wrap justify-center gap-4 max-w-full mx-auto">
                  {/* Group 1 */}
                  <div className="flex flex-col gap-3">
                        {['React.js', 'Next.js', 'Typescript'].map((item) => (
                        <span
                        key={item}
                        className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white/10 text-white"
                        >
                        {item}
                        </span>
                        ))}
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                  </div>

                  {/* Group 2 */}
                  <div className="flex flex-col gap-3">
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                        {['NodeJS', 'MongoDB', 'ExpressJS'].map((item) => (
                        <span
                        key={item}
                        className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white/10 text-white"
                        >
                        {item}
                        </span>
                        ))}
                  </div>

                  {/* Group 3 */}
                  <div className="flex flex-col gap-3">
                        {['JavaScript', 'HTML', 'CSS'].map((item) => (
                        <span
                        key={item}
                        className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white/10 text-white"
                        >
                        {item}
                        </span>
                        ))}
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                  </div>

                  {/* Group 4 */}
                  <div className="flex flex-col gap-3">
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                        {['Git', 'C++', 'Tailwind CSS'].map((item) => (
                        <span
                        key={item}
                        className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white/10 text-white"
                        >
                        {item}
                        </span>
                        ))}
                  </div>
                  </div>
            )}



            {/* === Email Copy Button with Confetti (Only in Card ID 6) === */}
            {/* {id === 6 && (
                  <>
                  <div className="mt-5 relative">
                  <div className="absolute -bottom-5 right-0">
                        <Lottie
                        animationData={animationData}
                        loop={copied}
                        autoplay={copied}
                        style={{ height: 60, width: 60 }}
                        />
                  </div>
                  </div>

                  <MagicButton
                  title={copied ? 'Email copied' : 'Copy my email'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31] mt-4"
                  handleClick={handleCopy}
                  />
                  </>
            )} */}
            </div>
            </div>
      </div>
      );
};
