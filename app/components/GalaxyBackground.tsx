import Image from "next/image";

export default function GalaxyBackground() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          src="/galaxy-bg.svg"
          alt="Galaxy background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-40"></div>
      </div>

      <div className="fixed left-1/4 top-1/4 h-2 w-2 animate-pulse rounded-full bg-white"></div>
      <div className="fixed left-3/4 top-1/3 h-1 w-1 animate-pulse rounded-full bg-white"></div>
      <div className="fixed left-1/2 top-3/4 h-1.5 w-1.5 animate-pulse rounded-full bg-white"></div>
      <div className="fixed left-1/5 top-2/3 h-1 w-1 animate-pulse rounded-full bg-white"></div>
      <div className="fixed left-4/5 top-1/5 h-2 w-2 animate-pulse rounded-full bg-white"></div>
    </>
  );
} 