// components
import TestimonialSlider from '../../components/TestimonialSlider';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 pt-20 sm:pt-24 xl:pt-0 pb-24 xl:pb-0 relative flex items-center'>
      <Circles />
      <div className='container mx-auto flex flex-col justify-center w-full'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-4 xl:mb-8 text-center'
        >
          What people <span className='text-accent'>say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full max-w-[900px] mx-auto'
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Testimonials;
