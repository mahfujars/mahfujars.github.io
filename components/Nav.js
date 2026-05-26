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
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
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
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link,index)=>{
          const isActive = link.path === pathname;
          return (
            <Link
              className={`${isActive ? 'text-accent' : 'text-white/80'} relative flex items-center justify-center w-10 h-10 xl:w-9 xl:h-9 rounded-full group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
              aria-label={link.name}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* active background pill + glow */}
              <span className={`absolute inset-0 rounded-full bg-accent/15 ring-1 ring-accent/50 shadow-[0_0_15px_rgba(241,48,36,0.5)] transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></span>
              {/* active dot below */}
              <span className={`absolute -bottom-1 xl:-bottom-0 xl:-right-2 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
              {/*tooltip*/}
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

              {/*icon*/}
              <div className='relative'>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
