import React from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
      return (
      <div className="py-20" id="projects">
            <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-[3rem] text-center font-bold">
                  My <span className="text-purple-400">Projects</span>
            </h1>



            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 mt-0">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
                  key={id}
                  className="lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[41rem] h-[32rem]"
            >
                  <PinContainer title={title} href={link}>
                  <div className="relative flex flex-col items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden lg:h-[30vh] mb-10 sm:h-[40vh] h-[30vh]">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img src={img} alt={title} />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                  </h1>

                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white">
                  {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  {/* <div className="flex items-center gap-2">
                        {iconLists.map((icon, index) => (
                        <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                        >
                        <img src={icon} alt="icon" className="p-2" />
                        </div>
                        ))}
                  </div> */}
                  <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-500 lg:text-xl md:text-xs text-sm"
                  >
                        Check GitHub Repo
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                  </div>
                  </PinContainer>
            </div>
            ))}
            </div>
      </div>
      );
};

export default RecentProjects;
