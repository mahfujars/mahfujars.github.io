import React, { useState } from "react";

// icons
import {
  FaPython,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

import { TbApi, TbRobot, TbRegex } from "react-icons/tb";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Python & Data",
        icons: [
          <FaPython key="python" />,
          <FaDatabase key="db" />,
          <SiPostgresql key="postgres" />,
          <SiMysql key="mysql" />,
          <TbRegex key="regex" />,
        ],
      },
      {
        title: "Web Crawling",
        icons: [
          <TbRobot key="bot" />,
          <TbApi key="api" />,
          <FaJs key="js" />,
        ],
      },
      {
        title: "Infra & Tools",
        icons: [
          <FaAws key="aws" />,
          <FaLinux key="linux" />,
          <FaGitAlt key="git" />,
          <SiNextdotjs key="next" />,
          <FaReact key="react" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "ACM-ICPC Asia Dhaka Regional", stage: "2019" },
      { title: "LEDP Top Earner — ICT Division", stage: "2020" },
      { title: "Asst. Country Director — Youth Summit", stage: "—" },
      { title: "Campus Ambassador — ICT Olympiad BD", stage: "—" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Python Data Engineer — LOBSTR.IO", stage: "Oct 2022 — Present" },
      { title: "Junior IT Executive — WSDA NZ", stage: "Aug — Oct 2022" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "B.Sc. CSE — University of Rajshahi", stage: "2017 — 2022" },
      { title: "H.S.C. Science — Devi Chowdhurani College", stage: "2015 — 2016" },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 pt-20 sm:pt-24 xl:pt-0 pb-24 xl:pb-0 text-center xl:text-left relative">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden max-w-[450px] max-h-[600px] xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col xl:pl-[80px] justify-center w-full">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Crafting <span className="text-accent">resilient</span> data pipelines.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto xl:mx-0 mb-4 xl:mb-8 px-2 xl:px-0 text-xs sm:text-sm xl:text-base"
          >
            I&apos;m Mahfujar — Python Data Engineer at{" "}
            <span className="text-white font-medium">lobstr.io</span>. I build
            large-scale crawlers, bypass Datadome/PerimeterX, and ship
            ETL pipelines downstream teams trust.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-4 xl:mb-8"
          >
            <div className="flex flex-1 gap-x-3 sm:gap-x-6 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={3} duration={4} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px] mx-auto xl:mx-0">
                  years exp
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={40} duration={6} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px] mx-auto xl:mx-0">
                  crawlers
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={10} duration={6} />M+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px] mx-auto xl:mx-0">
                  records
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={5} duration={6} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px] mx-auto xl:mx-0">
                  anti-bot
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-3 xl:mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize text-xs sm:text-sm xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-1 xl:py-4 flex flex-col gap-y-1 sm:gap-y-2 xl:gap-y-3 items-center xl:items-start min-h-[140px] xl:min-h-[200px]">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 text-xs sm:text-sm xl:text-base"
                >
                  <div className="font-light">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-3 xl:gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-lg xl:text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
