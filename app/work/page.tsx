"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

interface Project {
  serialNo: number;
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string; icon: React.ReactElement }[];
  image: string;
  live: string;
  github: string;
}

interface SwiperInstance {
  activeIndex: number;
}

// projects data
const projects: Project[] = [
  {
    serialNo: 1,
    num: "01",
    category: "Full-stack",
    title: "Foxtech (Manufacturer site)",
    description:
      "Foxtech is a manufacturer website with features like user authentication, order management, product showcases, and secure data handling, tailored for industrial businesses.",
    stack: [
      {
        name: "React.Js",
        icon: <SiReact />,
      },
      {
        name: "React query",
        icon: <SiReactquery />,
      },
      {
        name: "React-hook-form",
        icon: <SiReacthookform />,
      },
      {
        name: "Tailwind css",
        icon: <SiTailwindcss />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "Node.Js",
        icon: <SiNodedotjs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens />,
      },
    ],
    image: "/assets/work/foxtech.png",
    live: "https://foxtech-90c48.web.app/",
    github: "https://github.com/MahadebSen/Foxtech-client-12.git",
  },
  {
    serialNo: 2,
    num: "02",
    category: "Full-stack",
    title: "TechNet (E-commerce site)",
    description:
      "TechNet is a e-commerce platform made with modern tech stack offering user authentication, product search, filtering, and cart management.",
    stack: [
      {
        name: "Vite.js",
        icon: <SiVite />,
      },
      {
        name: "Redux toolkit",
        icon: <SiRedux />,
      },
      {
        name: "React-hook-form",
        icon: <SiReacthookform />,
      },
      {
        name: "Tailwind css",
        icon: <SiTailwindcss />,
      },
      {
        name: "Shadcn ui",
        icon: <SiShadcnui />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "Node.Js",
        icon: <SiNodedotjs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
    ],
    image: "/assets/work/technet.png",
    live: "https://technet-81747.web.app/",
    github: "https://github.com/MahadebSen/TechNet-redux-toolkit.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperInstance) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-1/2">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stacks */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-4xl text-accent">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group">
                          <div className="hover:text-white transition-all duration-300">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {/* {item.icon} */}
                    {/* remove the last coma */}
                    {/* {index !== project.stack.length - 1 && ","} */}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github repo button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slide */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary w-[44px] h-[44px] flex justify-center items-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                iconStyles="text-[25px]"
                rightButtonDisabled={
                  project.serialNo === projects.length ? true : false
                }
                leftButtonDisabled={project.serialNo === 1 ? true : false}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
