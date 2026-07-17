// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="h-full w-full relative">
      {/* particles */}
      <ParticlesContainer />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none"></div>

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-20 sm:pt-24 xl:pt-0 pb-24 xl:pb-0">
        <div className="container mx-auto h-full flex flex-col justify-center text-center xl:text-left">
          {/* mobile avatar */}
          <motion.div
            variants={fadeIn('down', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden flex justify-center mb-6 sm:mb-8"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(241,48,36,0.6)_0%,rgba(241,48,36,0.15)_50%,transparent_80%)] blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/40 shadow-[0_0_25px_rgba(241,48,36,0.4)]">
                <Image
                  src="/avatars/my_img.webp"
                  alt="Mahfujar Rahman"
                  width={200}
                  height={200}
                  priority
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* title */}
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 max-w-[90%] sm:max-w-[600px] xl:max-w-none mx-auto xl:mx-0"
          >
            Turning Messy Data <br className="hidden sm:block" /> into{' '}
            <span className="text-accent">Reliable Pipelines</span>
          </motion.h2>

          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[90%] sm:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-6 sm:mb-8 xl:mb-12"
          >
            Python Data Engineer specialising in large-scale web crawlers,
            anti-bot bypass, and ETL pipelines built with{' '}
            <span className="text-white font-medium">
              Python, SQLAlchemy, PostgreSQL, and AWS.
            </span>
          </motion.p>

          {/* btn */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start items-center gap-3 sm:gap-4 flex-wrap"
          >
            <ProjectsBtn />
            <a
              href="/Mahfujar_Rahman_Python_Data_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download résumé"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/25 font-mono text-sm text-white/90 hover:border-accent hover:text-accent transition-all"
            >
              <span className="text-accent">$</span>
              <span className="opacity-80">cat</span>
              <span>résumé.pdf</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* avatar */}
      <div className="hidden xl:block w-0 xl:w-[1200px] h-full absolute right-0 bottom-0 top-0 pointer-events-none">
        <div className="absolute inset-0 bg-explosion bg-cover bg-right bg-no-repeat mix-blend-color-dodge opacity-30 translate-z-0"></div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute bottom-0 right-[10%] w-[640px] h-full flex items-end justify-center"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
