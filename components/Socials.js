//Links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4 xl:gap-x-5 text-base sm:text-lg lg:text-2xl xl:text-3xl">
      <Link href={'https://www.linkedin.com/in/mahfujars/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://github.com/mahfujars'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={'https://www.facebook.com/mahfujars'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link href={'https://www.instagram.com/mahfujars'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={'https://wa.me/8801747430802'} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
      <Link href={'https://x.com/mahfujarx'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine/>
      </Link>
    </div>
  );
};

export default Socials;
