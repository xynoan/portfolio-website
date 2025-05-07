import Link from "next/link";
import NavButton from "../components/NavButton";
import GalaxyBackground from "../components/GalaxyBackground";
import { createMetadata } from "../metadata";

export const metadata = createMetadata('My Story', 'Learn about my journey, experiences, and what drives me as a developer.');

export default function MyStory() {
  const lastUpdated = new Date("2025-05-08").toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const timelineEvents = [
    {
      date: "March 2022",
      title: "My Coding Journey Begins",
      description: "Started studying in freeCodeCamp.",
      link: "https://github.com/xynoan/xynoan/blob/main/fCCchallenge.md"
    },
    {
      date: "April 2022",
      title: "CodeWars Journey",
      description: "I used CW for improving my logical thinking on any programming language.",
      link: "https://github.com/xynoan/xynoan/blob/main/CWchallenge.md"
    },
    {
      date: "August 2022",
      title: "College Journey",
      description: "I started college",
      link: "https://github.com/xynoan/xynoan/blob/main/collegeChallenge.md"
    },
    {
      date: "May 2023",
      title: "MOOC.fi Challenge",
      description: "I wanted to take advantage of my vacation and not slack off so...",
      link: "https://github.com/xynoan/xynoan/blob/main/moocFiChallenge.md"
    },
    {
      date: "Present",
      title: "Perennial Development",
      description: "Currently focusing on advanced concepts and building real-world projects"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Galaxy Background */}
      <GalaxyBackground />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">My Story</h1>
        {/* Last Updated */}
        <div className="mt-10 mb-6 text-sm text-gray-400">
          <p className="text-center">Last Updated: {lastUpdated}</p>
        </div>
        <div className="mb-6 max-w-4xl mx-auto">
          <p>Hey there 👋 I&#39;m 21 yrs old, currently in 3rd yr college. I&#39;ve taken interest in programming since
            March 2022, so that&#39;s 3 years now. Here&#39;s the timeline to better visualize my story 👇</p>
        </div>

        {/* Timeline */}
        <div className="my-12 relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-400 transform -translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-12 md:flex relative">
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="h-4 w-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 z-10"></div>
              </div>

              {/* Content positioning */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                <div
                  className={`relative px-6 py-4 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm border border-opacity-20 ${index % 2 === 0 ? 'md:border-r-2 md:border-r-purple-500' : 'md:border-l-2 md:border-l-purple-500'}`}>
                  <h3 className="text-xl font-bold text-purple-400">{event.date}</h3>
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-300">{event.description}</p>
                  {event.link && (
                    <a 
                      href={event.link} 
                      target="_blank" 
                      className="inline-block mt-2 text-purple-400 hover:text-purple-300 underline"
                    >
                      Check out blog here
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="flex justify-center">
          <Link href="/" className="minecraft-btn inline-block">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Navigation Button */}
      <NavButton />
    </div>
  );
} 