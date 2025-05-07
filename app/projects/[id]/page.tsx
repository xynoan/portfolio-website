import Link from "next/link";
import { notFound } from "next/navigation";
import GalaxyBackground from "../../components/GalaxyBackground";
import NavButton from "../../components/NavButton";
import type { Metadata } from 'next';

// This would typically come from a database
const projects = [
  {
    id: 1,
    title: "Cosmic Explorer",
    description: "A web application for exploring the cosmos and visualizing astronomical data.",
    technologies: ["React", "Three.js", "NASA API"],
    imageUrl: "/images/project-cosmic.jpg",
    fullDescription: "Cosmic Explorer is a comprehensive web application designed for astronomy enthusiasts and researchers alike. It leverages NASA's public APIs to provide real-time data about celestial bodies, space missions, and astronomical events. The interactive 3D visualizations powered by Three.js allow users to explore the cosmos from the comfort of their browser, offering an immersive experience that bridges the gap between scientific data and visual understanding.",
    features: [
      "Interactive 3D star map with real astronomical data",
      "Real-time tracking of ISS and other satellites",
      "Planetary exploration with detailed surface maps",
      "Daily astronomy picture with detailed explanations",
      "Bookmark favorite celestial objects for easy reference"
    ],
    github: "https://github.com/username/cosmic-explorer",
    liveDemo: "https://cosmic-explorer.example.com"
  },
  {
    id: 2,
    title: "Stellar Dashboard",
    description: "Interactive dashboard for tracking celestial events and star movements.",
    technologies: ["Next.js", "D3.js", "TailwindCSS"],
    imageUrl: "/images/project-stellar.jpg",
    fullDescription: "Stellar Dashboard provides astronomy enthusiasts with a beautiful, intuitive interface for tracking celestial events. Using cutting-edge web technologies and astronomical calculation libraries, it offers precise predictions of star movements, meteor showers, eclipses, and other astronomical phenomena. The responsive design ensures a seamless experience across all devices, whether you're planning an observation night from your desktop or checking event times on your phone.",
    features: [
      "Personalized event calendar for astronomical phenomena",
      "Light pollution map integration for finding ideal viewing locations",
      "Weather forecast integration for observation planning",
      "Interactive star charts with constellation highlighting",
      "Customizable alerts for upcoming celestial events"
    ],
    github: "https://github.com/username/stellar-dashboard",
    liveDemo: "https://stellar-dashboard.example.com"
  },
  {
    id: 3,
    title: "Nebula Connect",
    description: "Social platform for astronomy enthusiasts to share their space observations.",
    technologies: ["Vue", "Firebase", "Cloudinary"],
    imageUrl: "/images/project-nebula.jpg",
    fullDescription: "Nebula Connect is a social platform dedicated to bringing together the astronomy community. It provides a space where amateur astronomers, astrophotographers, and space enthusiasts can share their observations, images, and experiences. With features like location tagging, equipment details, and observation conditions, users can provide context to their shared content, helping others learn and improve their own astronomical pursuits. The platform also facilitates local astronomy meetups and collaborative observation projects.",
    features: [
      "User galleries for astrophotography showcase",
      "Equipment tracking and recommendation system",
      "Observation log with detailed condition recording",
      "Community challenges and collaborative projects",
      "Event organization tools for local astronomy clubs"
    ],
    github: "https://github.com/username/nebula-connect",
    liveDemo: "https://nebula-connect.example.com"
  },
];

type ProjectParams = {
  id: string;
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<ProjectParams> 
}): Promise<Metadata> {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<ProjectParams> 
}) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        <Link href="/projects" className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors">
          ← Back to Projects
        </Link>
        
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8">
          <div className="h-64 mb-6 rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center overflow-hidden">
            <div className="text-7xl opacity-30">✨</div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm rounded-full bg-indigo-900/50 text-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-gray-200 mb-8 text-lg">{project.fullDescription}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-300">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-purple-400">★</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <span>GitHub Repository</span>
            </a>
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center gap-2"
            >
              <span>View Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Navigation Button */}
      <NavButton />
    </div>
  );
} 