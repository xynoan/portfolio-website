import Link from "next/link";
import NavButton from "../components/NavButton";
import GalaxyBackground from "../components/GalaxyBackground";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Contact</h1>
        <p className="mb-4">This is the Contact page. Content will be added later.</p>
        <Link href="/" className="minecraft-btn inline-block">
          Back to Home
        </Link>
      </div>
      
      {/* Navigation Button */}
      <NavButton />
    </div>
  );
} 