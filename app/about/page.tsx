import Link from "next/link";
import NavButton from "../components/NavButton";
import GalaxyBackground from "../components/GalaxyBackground";

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">About</h1>
        <p className="mb-4">Hey there!</p>
        <Link href="/" className="minecraft-btn inline-block">
          Back to Home
        </Link>
      </div>
      
      {/* Navigation Button */}
      <NavButton />
    </div>
  );
} 