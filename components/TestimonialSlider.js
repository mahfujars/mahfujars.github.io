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
import { Pagination } from 'swiper';

// data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Product Lead, Acme Co.',
    message:
      'Mahfujar shipped a polished, performant interface ahead of schedule. Communication was crisp and design instincts were spot on.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Founder, Brightlab',
    message:
      'Rare combination of engineer and designer. He owned the build end-to-end and our conversion lift speaks for itself.',
  },
  {
    image: '/t-avt-3.png',
    name: 'John Doe',
    position: 'CTO, Northwind',
    message:
      'Reliable, thoughtful, and fast. The dashboard rewrite turned out cleaner and faster than what we had on the roadmap.',
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
