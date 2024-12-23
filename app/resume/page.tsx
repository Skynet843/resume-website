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

// about data
const about = {
  title: "About me",
  description:
    "Passionate full-stack developer with expertise in optimizing web applications. Specializing in React.js, Node.js, Django, and AWS deployments.",
  info: [
    {
      fieldName: "Name",
      value: "Mahadeb Sen",
    },
    {
      fieldName: "Phone",
      value: "(+91) 7908020943",
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
      value: "mahadebsen237@gmail.com",
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
    "2 years of experience developing scalable, high-performance web applications with React.js, Django, and GraphQL, focusing on front-end optimization, API design, and AWS deployments.",
  info: [
    {
      company: "AIMonk Labs Pvt. Ltd.",
      link: "https://aimonk.com",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Continuous learner with education in AWS and web development. Enhancing university degree with technical certifications for industry relevance.",
  items: [
    {
      institution: "Scaler",
      degree: "AWS Certification",
      duration: "Aug 2024",
      link: "https://moonshot.scaler.com/s/sl/m5mXN9udxY?_gl=1*raklxs*_gcl_au*ODQzMDQ4NDM3LjE3MjQ0Nzg2NDE.*FPAU*ODQzMDQ4NDM3LjE3MjQ0Nzg2NDE.*_ga*MTE4MTI2NTQuMTcyNDQ3ODY0Mg..*_ga_53S71ZZG1X*MTcyNDc4NDY3My43LjEuMTcyNDc4NTEyMi4wLjAuMTk4MTkxOTY5NA..",
    },
    {
      institution: "Programming Hero",
      degree: "Frontend Web Development",
      duration: "Dec 2021 - Aug 2022",
      link: "https://drive.google.com/file/d/1RNo449r3jTkzFoqFC1UuED51qplBF1x1/view",
    },
    {
      institution: "Bankura University",
      degree: "Graduation",
      duration: "Jun 2018 - Aug 2021",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Versatile full-stack developer skilled in modern web technologies. Experienced in React.js ecosystem, Python frameworks, and cloud infrastructure.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiStyledcomponents />,
      name: "Styled components",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux.js",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiApollographql />,
      name: "Apollo Client",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
    {
      icon: <SiRazorpay />,
      name: "Razorpay integration",
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
