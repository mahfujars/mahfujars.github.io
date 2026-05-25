//Links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiGitlabLine,
  RiLinkedinLine,
  RiWhatsappLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl lg:text-3xl">
      <Link href={'https://www.linkedin.com/in/mrnoyon/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://github.com/mahfujars'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={'https://gitlab.com/mahfujars'} className="hover:text-accent transition-all duration-300">
        <RiGitlabLine/>
      </Link>
      <Link href={'https://www.facebook.com/mr.9on/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link href={'https://www.instagram.com/mr.9on/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={'https://wa.me/qr/6Q5QAQS77ALIF1'} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
      <Link href={'https://x.com/mr_9on'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine/>
      </Link>
    </div>
  );
};

export default Socials;
