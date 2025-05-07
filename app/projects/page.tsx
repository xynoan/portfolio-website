import Link from "next/link";
import NavButton from "../components/NavButton";
import GalaxyBackground from "../components/GalaxyBackground";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cosmic Explorer",
      description: "A web application for exploring the cosmos and visualizing astronomical data.",
      technologies: ["React", "Three.js", "NASA API"],
      imageUrl: "/images/project-cosmic.jpg",
    },
    {
      id: 2,
      title: "Stellar Dashboard",
      description: "Interactive dashboard for tracking celestial events and star movements.",
      technologies: ["Next.js", "D3.js", "TailwindCSS"],
      imageUrl: "/images/project-stellar.jpg",
    },
    {
      id: 3,
      title: "Nebula Connect",
      description: "Social platform for astronomy enthusiasts to share their space observations.",
      technologies: ["Vue", "Firebase", "Cloudinary"],
      imageUrl: "/images/project-nebula.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center overflow-hidden">
                <div className="text-5xl opacity-30">✨</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs rounded-full bg-indigo-900/50 text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.id}`}>
                <button className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="minecraft-btn inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      
      {/* Navigation Button */}
      <NavButton />
    </div>
  );
} 