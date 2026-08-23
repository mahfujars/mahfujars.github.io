//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 pt-20 sm:pt-24 xl:pt-0 pb-24 xl:pb-0 relative flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-4 xl:gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col xl:text-left'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto xl:mx-0'
            >
              Backend &amp; data engineering in Python — distributed systems, pipelines, and crawlers for teams that need data they can trust at scale.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
