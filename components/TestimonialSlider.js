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
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                      className='rounded-full'
                    />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote and message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
