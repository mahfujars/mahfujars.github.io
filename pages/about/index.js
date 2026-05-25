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
      {
        title: "ACM-ICPC Asia Dhaka Regional Contestant",
        stage: "2019",
      },
      {
        title: "Top Earner — LEDP Web Design & Development, ICT Division",
        stage: "2020",
      },
      {
        title: "Assistant Country Director — International Youth Summit",
        stage: "—",
      },
      {
        title: "Campus Ambassador — ICT Olympiad Bangladesh",
        stage: "—",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Python Data Engineer — LOBSTR.IO (France, Remote)",
        stage: "Oct 2022 — Present",
      },
      {
        title: "Junior IT Executive — WSDA New Zealand, Dhaka",
        stage: "Aug 2022 — Oct 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.Sc. in CSE — University of Rajshahi (Rangpur Eng. College)",
        stage: "2017 — 2022",
      },
      {
        title: "H.S.C. in Science — Devi Chowdhurani Degree College, Rangpur",
        stage: "2015 — 2016",
      },
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
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
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
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col pl-0 xl:pl-[80px] justify-center">
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
            className="max-w-[500px] mx-auto xl:mx-0 mb-4 xl:mb-10 px-2 xl:px-0"
          >
            I&apos;m Mahfujar — a Python Data Engineer at{" "}
            <span className="text-white font-medium">lobstr.io</span>, building
            large-scale web crawlers and ETL pipelines. I bypass anti-bot
            systems like Datadome and PerimeterX, design fault-tolerant
            scrapers, and ship data that downstream teams can actually trust.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>
              {/* crawlers */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={6} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  crawlers shipped
                </div>
              </div>
              {/* records */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={6} />M+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  records extracted
                </div>
              </div>
              {/* anti-bot */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={6} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  anti-bot systems bypassed
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
          className="flex-1 flex flex-col w-full xl:max-w-[48%] h-[200px] xl:h-[320px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
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
