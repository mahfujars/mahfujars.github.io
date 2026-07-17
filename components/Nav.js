// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', label: 'Home', path: '/', icon: <HiHome /> },
  { name: 'about', label: 'About', path: '/about', icon: <HiUser /> },
  { name: 'services', label: 'Services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', label: 'Work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    label: 'Reviews',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

//next Link
import Link from 'next/link';

//next router
import {useRouter} from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/*inner*/}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-2 sm:px-6 md:px-40 xl:px-0 h-[80px] xl:h-max py-2 xl:py-8 bg-white/10 backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full'>
        {navData.map((link,index)=>{
          const isActive = link.path === pathname;
          return (
            <Link
              className={`${isActive ? 'text-accent' : 'text-white/80'} relative flex flex-col items-center justify-center gap-1 xl:gap-0 group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
              aria-label={link.name}
              aria-current={isActive ? 'page' : undefined}
            >
              {/*icon + active pill*/}
              <span className='relative flex items-center justify-center w-9 h-9 rounded-full'>
                {/* active background pill + glow */}
                <span className={`absolute inset-0 rounded-full bg-accent/15 ring-1 ring-accent/50 shadow-[0_0_15px_rgba(241,48,36,0.5)] transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></span>
                {/* active dot (desktop rail only) */}
                <span className={`absolute hidden xl:block xl:-right-2 xl:top-1/2 xl:-translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                <span className='relative'>{link.icon}</span>
              </span>

              {/* mobile label */}
              <span className='text-[9px] sm:text-[10px] leading-none capitalize xl:hidden'>
                {link.label}
              </span>

              {/*tooltip (desktop rail)*/}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/*triangle*/}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
