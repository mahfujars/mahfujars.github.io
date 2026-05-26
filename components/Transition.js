// framer motion
import { motion } from 'framer-motion';

const TOTAL = 2.2; // total exit duration

const slabVariants = {
  initial: { y: '-100%' },
  animate: { y: '-100%' },
  exit: {
    y: ['100%', '0%', '0%'],
    transition: {
      duration: TOTAL,
      times: [0, 0.32, 1],
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

const Ripple = ({ delay = 0 }) => (
  <motion.span
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 0, opacity: 0 }}
    exit={{
      scale: [0, 6],
      opacity: [0.7, 0],
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
      },
    }}
    className='absolute w-20 h-20 rounded-full border-2 border-accent pointer-events-none'
  />
);

const Transition = () => {
  return (
    <motion.div
      className='fixed inset-0 z-40 bg-primary flex items-center justify-center overflow-hidden pointer-events-none'
      variants={slabVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/* continuous ripples behind text — emit during hold window */}
      <div className='absolute inset-0 flex items-center justify-center z-0'>
        <Ripple delay={0.7} />
        <Ripple delay={0.9} />
        <Ripple delay={1.1} />
        <Ripple delay={1.3} />
        <Ripple delay={1.5} />
      </div>

      {/* text — visible during hold */}
      <motion.span
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 0, scale: 1.15 }}
        exit={{
          opacity: [0, 0, 1, 1, 0],
          scale: [1.15, 1.1, 1, 1, 0.98],
          transition: {
            duration: TOTAL,
            times: [0, 0.3, 0.45, 0.88, 1],
            ease: 'easeOut',
          },
        }}
        className='relative z-10 text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-accent select-none'
      >
        𝓜AH<span className='text-white/90'>F</span>UJAR<span className='text-accent'>.</span>
      </motion.span>
    </motion.div>
  );
};

export default Transition;
