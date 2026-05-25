// swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { RxArrowTopRight } from 'react-icons/rx';
import { FaPython, FaAws, FaShieldAlt, FaFlask } from 'react-icons/fa';
import { TbDatabaseImport, TbApi } from 'react-icons/tb';

// modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <FaPython />,
    title: 'Web Scraping',
    description:
      'Production-grade crawlers in Python — Requests, lxml, BeautifulSoup, Scrapy. Built for scale and resilience.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Anti-bot Bypass',
    description:
      'Datadome, PerimeterX, Cloudflare, CAPTCHAs, proxy rotation, JS-rendered sites — handled.',
  },
  {
    icon: <TbDatabaseImport />,
    title: 'ETL Pipelines',
    description:
      'Robust ETL with SQLAlchemy + PostgreSQL. Schema design, deduping, incremental loads, data quality checks.',
  },
  {
    icon: <FaAws />,
    title: 'Cloud & Storage',
    description:
      'AWS S3 storage, backups, and workflow integration. Linux/Ubuntu/WSL2 native environments.',
  },
  {
    icon: <TbApi />,
    title: 'Backend & APIs',
    description:
      'Python services, Celery task queues, REST integrations, and clean reusable crawler frameworks.',
  },
  {
    icon: <FaFlask />,
    title: 'R&D',
    description:
      'Reverse engineering complex sites and anti-bot stacks. Turning blockers into reproducible solutions.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icons */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
