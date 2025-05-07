import Link from "next/link";
import GalaxyBackground from "../components/GalaxyBackground";
import NavButton from "../components/NavButton";

export default function ProjectNotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-6xl font-bold mb-6 text-purple-300">404</h1>
        <h2 className="text-3xl font-semibold mb-8">Project Not Found</h2>
        <p className="text-gray-300 mb-8 text-center max-w-md">
          It seems this cosmic entity has drifted into another dimension. The project you&#39;re looking for doesn&#39;t exist in our galaxy.
        </p>
        <div className="text-7xl mb-8">🌠</div>
        <Link 
          href="/projects" 
          className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all"
        >
          Return to Projects
        </Link>
      </div>
      
      {/* Navigation Button */}
      <NavButton />
    </div>
  );
} 