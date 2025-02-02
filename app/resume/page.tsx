"use client";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiLinux,
  SiRazorpay,
  SiFirebase,
  SiStyledcomponents,
  SiJest,
  SiCypress,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFastapi,
  SiKeras,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiJenkins,
  SiDocker,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJava,
} from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { duplexPair } from "stream";
import { link } from "fs";

// about data
// about data
const about = {
  title: "About me",
  description:
    "Software Development Engineer, excels in AI, ML, and full-stack development, creating optimized solutions with Python, Java, React.js, AWS, and CI/CD expertise",
  info: [
    {
      fieldName: "Name",
      value: "Souvik Samanta",
    },
    {
      fieldName: "Phone",
      value: "(+91) 8436892673",
    },
    {
      fieldName: "Experience",
      value: "2+ years",
    },
    {
      fieldName: "Nationality",
      value: "Indian",
    },
    {
      fieldName: "Freelance",
      value: "Available",
    },
    {
      fieldName: "Email",
      value: "souviksamanta3103@gmail.com",
    },
    {
      fieldName: "Languages",
      value: "English, Hindi, Bengali",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Experience in developing AI-powered solutions, focusing on computer vision, video processing optimization, and scalable web applications using Python, Django, React.js, and AWS.",
  info: [
    {
      company: "AIMonk Labs Private Ltd",
      link: "https://aimonk.com",
      position: "Software Development Engineer",
      duration: "2024 - Present",
      description: [
        "Reduced video generation time from 40 mins to 5 mins through parallel processing",
        "Built CI/CD pipelines using Docker and AWS",
        "Developed GIF and video rendering features",
      ],
    },
    {
      company: "Freelance Developer",
      link: "https://souviksamanta.in",
      position: "Full Stack Developer",
      duration: "2020 - 2024",
      description: [
        "Developed and published Android app with 50K+ downloads on Play Store",
        "Created custom web applications using React.js and Django",
        "Implemented payment integrations and Firebase backends",
        "Worked with clients to deliver scalable solutions",
      ],
    },
    {
      company: "Teaching",
      link: "",
      position: "Data Science & Java Programming",
      duration: "2019 - 2024",
      description: [
        "Taught programming fundamentals to school and college students",
        "Created comprehensive curriculum for Java and Python",
        "Mentored students in DSA and competitive programming",
      ],
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Strong academic background in Information Technology with focus on computer science fundamentals and practical applications",
  items: [
    {
      institution: "Kalyani Government Engineering College",
      degree: "B.Tech. in Computer Science",
      duration: "2021-2024",
      link: "https://www.kgec.edu.in/",
    },
    {
      institution: "The Calcutta Technical School",
      degree: "Diploma in Computer Science",
      duration: "2018 - 2021",
      link: "https://polytechnic.wbtetsd.gov.in/ctskolkata",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Comprehensive skillset in full-stack development, AI/ML, and DevOps technologies",
  skillsList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiKeras />,
      name: "Keras",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiJenkins />,
      name: "Jenkins",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skils</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-full xl:h-[450px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="capitalize">
                                {skill.name}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-full xl:h-[450px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.value}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
