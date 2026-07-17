// swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// next image
import Image from 'next/image';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// modules
import { Pagination } from 'swiper/modules';

// data
const testimonialData = [
  {
    image: '/t-avt-1.webp',
    name: 'Sasha Bouloudnine',
    position: 'Founder, lobstr.io',
    message:
      'One of the most dependable engineers on our team. Rigorous about data being correct, not just present, and reliable under the pressure of production systems that must not fail. He takes ownership without being asked and repeatedly went beyond the scope of his role. I recommend him without reservation.',
  },
  {
    image: '/t-avt-2.jpg',
    name: 'Rahim Ahmed',
    position: 'Engineering Manager',
    message:
      'Owned the crawler fleet end to end. Data-quality issues that used to take days, he caught same-day. Low-maintenance, high-trust — exactly what you want on a production scraping team.',
  },
  {
    image: '/t-avt-3.jpg',
    name: 'Farhana Islam',
    position: 'Data Lead',
    message:
      'Turned a fragile scraping setup into a resumable, monitored pipeline with clean data downstream. Clear communicator and genuinely fast to ship.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='w-full !pb-12'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col md:flex-row gap-6 md:gap-x-8 items-center md:items-start px-4 sm:px-6'>
              {/* avatar, name, position */}
              <div className='w-full md:w-[240px] flex flex-col items-center text-center md:flex-shrink-0'>
                <Image
                  src={person.image}
                  width={96}
                  height={96}
                  alt={person.name}
                  className='rounded-full mb-3 w-20 h-20 sm:w-24 sm:h-24 object-cover'
                />
                <div className='text-base sm:text-lg font-medium'>{person.name}</div>
                <div className='text-[11px] sm:text-xs uppercase font-extralight tracking-widest text-white/60 mt-1'>
                  {person.position}
                </div>
              </div>
              {/* quote and message */}
              <div className='flex-1 flex flex-col text-center md:text-left md:border-l md:border-white/10 md:pl-6 xl:pl-10'>
                <FaQuoteLeft className='text-3xl xl:text-5xl text-white/15 mx-auto md:mx-0 mb-3' />
                <p className='text-sm sm:text-base xl:text-lg text-white/80 leading-relaxed'>
                  {person.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
