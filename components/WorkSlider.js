// swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { BsArrowRight } from 'react-icons/bs';

// modules
import { Pagination } from 'swiper';

// data — real projects from resume
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Arogga Crawler',
          stack: 'Celery · PostgreSQL · lxml',
          path: '/thumb1.jpg',
          href: 'https://github.com/mahfujars/arogga',
        },
        {
          title: 'Sia.Ch Crawler',
          stack: 'SQLAlchemy · MySQL · AES',
          path: '/thumb2.jpg',
          href: 'https://github.com/mahfujars/sia',
        },
        {
          title: 'SweetChat',
          stack: 'Next.js · Firebase',
          path: '/thumb3.jpg',
          href: 'https://github.com/mahfujars/sweetchat-nextjs',
        },
        {
          title: 'Portfolio',
          stack: 'Next.js · Tailwind · Framer',
          path: '/thumb4.jpg',
          href: 'https://github.com/mahfujars/mahfujars.github.io',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[340px] sm:h-[420px] xl:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 cursor-pointer h-full'>
              {slide.images.map((image, idx) => {
                return (
                  <Link
                    key={idx}
                    href={image.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group w-full h-full'>
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute -bottom-full left-6 group-hover:bottom-6 transition-all duration-500 z-50'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>VIEW</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                      <div className='absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 z-40 backdrop-blur-sm'>
                        {image.title}
                      </div>
                      <div className='absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/40 text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-40 backdrop-blur-sm tracking-wider'>
                        {image.stack}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
