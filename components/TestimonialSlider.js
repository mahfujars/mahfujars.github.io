// swiper react
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// next image
import Image from 'next/image';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

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
    name: 'Ahmed W. Bari',
    position: 'Vice President, WSDA New Zealand',
    fit: 'object-top',
    message:
      'Mahfujar collected, validated, and managed the data our business development and decisions relied on. Accurate, dependable, and careful with detail — exactly what you want from the person preparing your numbers.',
  },
];

const TestimonialSlider = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={30}
        pagination={{ el: '.tst-pagination', clickable: true }}
        modules={[Pagination]}
        className='w-full'
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
                  className={`rounded-full mb-3 w-20 h-20 sm:w-24 sm:h-24 object-cover ${person.fit || ''}`}
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

      {/* arrows + dots, same cluster as services page */}
      <div className='flex justify-center mt-5'>
        <div className='inline-flex items-center gap-4'>
          <button
            onClick={() => swiper && swiper.slidePrev()}
            aria-label='Previous'
            className='flex items-center justify-center w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white/80 hover:border-accent hover:text-accent transition-all'
          >
            <BsChevronLeft />
          </button>
          <div className='tst-pagination inline-flex items-center gap-2'></div>
          <button
            onClick={() => swiper && swiper.slideNext()}
            aria-label='Next'
            className='flex items-center justify-center w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white/80 hover:border-accent hover:text-accent transition-all'
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
