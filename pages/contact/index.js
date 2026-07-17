// icons
import { BsArrowRight } from 'react-icons/bs';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject') || 'New message from portfolio';
    const message = data.get('message');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:mahfujarx@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <div className='h-full bg-primary/30 pt-20 sm:pt-24 xl:pt-0 pb-24 xl:pb-0 flex items-center'>
      <div className='container mx-auto text-center xl:text-left flex items-center justify-center w-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-2'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-white/60 mb-4 xl:mb-6 text-xs sm:text-sm tracking-wide'
          >
            <a href='mailto:mahfujarx@gmail.com' className='hover:text-accent transition-all break-all'>
              mahfujarx@gmail.com
            </a>
            <span className='hidden sm:inline text-white/30'>·</span>
            <a href='tel:+8801747430802' className='hover:text-accent transition-all'>
              +880 1747 430 802
            </a>
            <span className='hidden sm:inline text-white/30'>·</span>
            <span>Rangpur, BD</span>
            <span className='hidden sm:inline text-white/30'>·</span>
            <a href='/Mahfujar_Rahman_Python_Data_Engineer.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all'>
              Résumé (PDF)
            </a>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col gap-3 sm:gap-4 w-full mx-auto'
          >
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-x-6 w-full'>
              <input name='name' type='text' placeholder='name' className='input' required />
              <input name='email' type='email' placeholder='email' className='input' required />
            </div>
            <input name='subject' type='text' placeholder='subject' className='input' />
            <textarea name='message' placeholder='message' className='textarea' required></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] mx-auto sm:mx-0 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
