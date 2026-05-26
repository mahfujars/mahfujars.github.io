// next Link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-30 w-full flex items-center px-4 sm:px-8 xl:px-0 xl:h-[90px] py-3 xl:py-0 bg-primary/30 xl:bg-transparent backdrop-blur-sm xl:backdrop-blur-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-x-4 gap-y-2">
          {/* logo */}
          <Link href={'/'} aria-label="Home">
            <div className="text-white text-xl sm:text-2xl xl:text-4xl tracking-wide font-sora leading-none whitespace-nowrap">
              <h1 className="font-extrabold">
                𝓜ah
                <span className="text-accent text-2xl sm:text-3xl xl:text-5xl stylish">ꎇ</span>
                <span className="font-extralight">ujar</span>
                <span className="text-accent text-2xl sm:text-3xl xl:text-5xl">.</span>
              </h1>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
