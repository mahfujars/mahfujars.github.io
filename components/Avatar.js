//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden lg:flex relative w-full h-full items-end justify-center">
      {/* soft radial glow behind subject */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(241,48,36,0.45)_0%,rgba(241,48,36,0.15)_40%,transparent_75%)] blur-3xl pointer-events-none"></div>
      {/* photo with fade-to-transparent mask so edges blend with site bg */}
      <Image
        src={'/avatars/my_img.png'}
        width={928}
        height={1152}
        alt="Mahfujar Rahman"
        priority={true}
        className="relative z-10 translate-z-0 w-auto h-full max-h-[85vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(241,48,36,0.45)] [mask-image:radial-gradient(ellipse_60%_75%_at_50%_45%,black_55%,transparent_95%)]"
      />
    </div>
  );
};

export default Avatar;
