// swiper react
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// icons
import { RxArrowTopRight } from 'react-icons/rx';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaPython, FaAws, FaShieldAlt, FaFlask } from 'react-icons/fa';
import { TbDatabaseImport, TbApi } from 'react-icons/tb';

// modules
import { FreeMode, Pagination, Navigation, Keyboard } from 'swiper/modules';

// data — ordered by depth of expertise
const serviceData = [
  {
    icon: <FaPython />,
    title: 'Web Scraping',
    description:
      'Production crawlers in Python — woob, Scrapy, Requests, lxml. Pagination, resumable runs, and clean structured output at scale.',
  },
  {
    icon: <TbDatabaseImport />,
    title: 'Data Pipelines & ETL',
    description:
      'SQLAlchemy + PostgreSQL warehouses, dbt transforms, incremental loads, deduping, and schema design.',
  },
  {
    icon: <FaFlask />,
    title: 'Data Quality',
    description:
      'Price-drift detection, historical-gap analysis, anomaly checks, and dataset merge validation so downstream data stays trustworthy.',
  },
  {
    icon: <TbApi />,
    title: 'Orchestration & Backend',
    description:
      'Celery, RabbitMQ, Airflow, pm2 — scheduled, parallel, resumable crawl fleets and clean reusable Python services.',
  },
  {
    icon: <FaAws />,
    title: 'Cloud & Infra',
    description:
      'Google Cloud & AWS S3, collection servers, backups, and Linux (Ubuntu/WSL2) native workflows.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Anti-bot & Proxies',
    description:
      'Integrating bypass services (CAPTCHA solvers, ScrapFly) and proxy/IP rotation against Datadome, PerimeterX and Akamai.',
  },
];

const ServiceSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='relative'>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[FreeMode, Pagination, Navigation, Keyboard]}
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

      {/* nav arrows */}
      <button
        ref={prevRef}
        aria-label='Previous'
        className='absolute z-10 left-0 sm:-left-4 top-[38%] -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/20 text-white/80 hover:border-accent hover:text-accent transition-all [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-default'
      >
        <BsChevronLeft />
      </button>
      <button
        ref={nextRef}
        aria-label='Next'
        className='absolute z-10 right-0 sm:-right-4 top-[38%] -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/20 text-white/80 hover:border-accent hover:text-accent transition-all [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-default'
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default ServiceSlider;
