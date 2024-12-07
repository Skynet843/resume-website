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

// projects data
const projects = [
  {
    num: "01",
    category: "Full-stack",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat nobis excepturi quasi dicta nulla temporibus provident sit mollitia optio.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React.Js" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat nobis excepturi quasi dicta nulla temporibus provident sit mollitia optio.",
    stack: [
      { name: "Next.Js" },
      { name: "Tailwind css" },
      { name: "React.Js" },
      { name: "Node.Js" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Full-stack",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat nobis excepturi quasi dicta nulla temporibus provident sit mollitia optio.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React.Js" },
      { name: "Next.Js" },
      { name: "Tailwind css" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
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
            <ul className="flex gap-4">
              {project.stack.map((item, index) => (
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {/* remove the last coma */}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
          </div>

          {/* slide */}
          <div className="w-full xl:w-1/2">slide</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
