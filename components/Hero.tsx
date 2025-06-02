import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

export const Hero = () => {
      return (
      <div className="pb-20  relative" id="about">

            <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
            <div
            className={cn(
                  "absolute inset-0",
                  "[background-size:40px_40px]",
                  "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                  "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

            {/* Centered Text Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-20">
                  <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        {/* Crafting elegant code, intuitive experiences, and impactful digital products. */}

                        About
                  </h2>

                  <TextGenerateEffect
                  className="text-center text-[40px] md:text-5xl lg:text-6xl"
                  words="“Turning Ideas into Scalable, Real-World Solutions”
                        "
                  duration={3.5}
                  filter={false}
                  />

                  <p className="text-center text-white md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
                  Hi, I’m <span className="text-purple-400">Piyush</span>, a Computer Science student at NIT Raipur with a strong interest in web development, AI/ML, and problem-solving. I enjoy building impactful projects using React, Next.js, Node.js, and love exploring new tech to grow as a developer.
                  </p>


                  <a href="#projects">
                        <MagicButton
                        title="Show my work"
                        icon={<FaLocationArrow />}
                        position="right"
                        />
                  </a>
            </div>
            </div>
            </div>
      </div>
      );
};

export default Hero;
