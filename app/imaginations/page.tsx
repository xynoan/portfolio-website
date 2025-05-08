import Link from "next/link";
import Image from "next/image";
import NavButton from "../components/NavButton";
import GalaxyBackground from "../components/GalaxyBackground";
import { createMetadata } from "../metadata";

export const metadata = createMetadata('Imaginations', 'Explore my creative and imaginative projects.');

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "xyFood Generator",
      description: "Generate food in any country.",
      keyFeatures: ["Random cuisine generation", "Country-specific food", "Customizable food generation for your country"],
      technologies: ["React.js", "Bootstrap"],
      imageUrl: "/imaginations/xyFood_Generator.png",
      demoUrl: "https://codepen.io/Xynoan/full/XWEKbwQ",
    },
    {
      id: 2,
      title: "Library System",
      description: "Simulation of CRUD system with books",
      keyFeatures: ["Book management", "User accounts", "Search functionality"],
      technologies: ["Java"],
      imageUrl: "/imaginations/library_system.png",
      githubUrl: "https://github.com/xynoan/Library-System",
    },
    {
      id: 3,
      title: "Café Ordering System",
      description: "Used for maintaining the details, products, billing, and maintains an inventory for a Café. The project has 3 accounts: Cashier, Employee, and Manager.",
      keyFeatures: ["Role-based access", "Inventory management", "Billing system"],
      technologies: ["Java", "MySQL", "JFrame"],
      imageUrl: "/imaginations/Cafe_Ordering_System.png",
      githubUrl: "https://github.com/xynoan/Cafe_Ordering_System",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      <GalaxyBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Imaginations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  width={500} 
                  height={300}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-300 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
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
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all cursor-pointer">
                      <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </span>
                    </button>
                  </Link>
                )}
                
                {project.demoUrl && (
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all cursor-pointer">
                      <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="minecraft-btn inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      
      <NavButton />
    </div>
  );
} 