// next image
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/*particles*/}
      <ParticlesContainer/>

      {/*text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          
          {/*title*/}
          <motion.h2
          variants={fadeIn('down', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="h2">
            {/*
            Transforming Ideas <br/> Into{' '} <span className="text-accent">Digital Reality</span>
            Building Bridges <br/> in the{' '} <span className="text-accent">Data Universe</span>
            */}
            Turning Messy Data <br/> into <span className="text-accent">Reliable Pipelines</span>
          </motion.h2>

          {/*subtitle*/}
          <motion.p
          variants={fadeIn('down', 0.3)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            {/* As a Data Engineer, I specialize in Building Bridges that unite data landscapes, transforming complexity into strategic clarity in the vast Data Universe.*/}
            Python Data Engineer specialising in large-scale web crawlers, anti-bot bypass, and ETL pipelines built with <span className="text-white font-bold">Python, SQLAlchemy, PostgreSQL, and AWS.</span>
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/*image*/}
      <div className="w-0 lg:w-[700px] xl:w-[1200px] h-0 lg:h-full absolute right-0 bottom-0 pointer-events-none">

        {/*bg explosion glow*/}
        <div className="hidden xl:block bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge opacity-30 translate-z-0"></div>

        {/*avatar*/}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration:1, ease:'easeInOut'}}
          className="w-full h-full max-w-[560px] xl:max-w-[640px] absolute bottom-0 right-0 lg:right-[4%] xl:right-[10%] flex items-end justify-center"
        >
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
