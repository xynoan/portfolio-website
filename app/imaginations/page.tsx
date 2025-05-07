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
      description: "You're thinking of what to eat for breakfast, lunch, or dinner? xyFood Generator will generate the food for you in any country!",
      technologies: ["React.js", "Bootstrap"],
      imageUrl: "/imaginations/xyFood_Generator.png",
    },
    {
      id: 2,
      title: "xyReviewer",
      description: "You're having a hard time consuming so many information at once? This discord bot will collect all skimmed information of any subject.",
      technologies: ["JavaScript", "Express.js", "Node.js", "Discord.js"],
      imageUrl: "/imaginations/xyReviewer.png",
    },
    {
      id: 3,
      title: "Library System",
      description: "Browse books that can be read for free! The system will give a link where the book can be read.",
      technologies: ["Java"],
      imageUrl: "/imaginations/library_system.png",
    },
    {
      id: 4,
      title: "Café Ordering System",
      description: "It is used for maintaining the details, products, billing, and maintains an inventory for a Café. The project has 3 accounts: Cashier, Employee, and Manager.",
      technologies: ["Java", "MySQL", "JFrame"],
      imageUrl: "/imaginations/Cafe_Ordering_System.png",
    },
    {
      id: 5,
      title: "xyAgenda",
      description: "Manage your time and tasks efficiently.",
      technologies: ["React Native", "Expo"],
      imageUrl: "/imaginations/xyAgenda.jpg",
    },
    {
      id: 6,
      title: "xySavings",
      description: "Helps you manage your money and savings efficiently.",
      technologies: ["React Native", "Expo"],
      imageUrl: "/imaginations/xySavings.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
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
                <Image src={project.imageUrl} alt={project.title} width="500" height="500"/>
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
              <Link href={`/imaginations/${project.id}`}>
                <button className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all cursor-pointer">
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