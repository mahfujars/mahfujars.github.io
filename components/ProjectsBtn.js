// next link
import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <Link
      href="/work"
      aria-label="View my projects"
      className="group relative inline-flex items-center rounded-lg overflow-hidden p-[1.5px]"
    >
      {/* animated conic gradient border */}
      <span className="absolute inset-0 bg-[conic-gradient(from_0deg,#F13024,#fb923c,#f59e0b,#F13024,#ec4899,#F13024)] animate-[spin_6s_linear_infinite]"></span>
      {/* inner content */}
      <span className="relative inline-flex items-center gap-2 px-5 py-3 rounded-[6px] bg-black/80 backdrop-blur font-mono text-sm text-white/90">
        <span className="text-accent">$</span>
        <span className="opacity-80">cd</span>
        <span className="text-accent">./projects</span>
        <span className="ml-2 inline-block w-2 h-4 bg-accent animate-pulse"></span>
      </span>
    </Link>
  );
};

export default ProjectsBtn;
