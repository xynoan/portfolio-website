"use client";

import Image from "next/image";
import NavButton from "./components/NavButton";
import GalaxyBackground from "./components/GalaxyBackground";
import CursorGalaxyEffect from "./components/CursorGalaxyEffect";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <GalaxyBackground />
      <CursorGalaxyEffect />

      <div className="relative z-20">
        <NavButton />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-white">
        <div className="minecraft-text text-center">
          <h1 className="mb-2 text-3xl font-bold uppercase tracking-wider text-white">
            <span className="text-[#9370db]">N</span>
            <span className="text-[#8a2be2]">a</span>
            <span className="text-[#9370db]">t</span>
            <span className="text-[#8a2be2]">h</span>
            <span className="text-[#9370db]">a</span>
            <span className="text-[#8a2be2]">n</span>
            <span className="text-[#9370db]">i</span>
            <span className="text-[#8a2be2]">e</span>
            <span className="text-[#9370db]">l</span>
            <span className="ml-4 text-white">Carlo M. Morva</span>
          </h1>
          <h2 className="mb-6 text-2xl font-bold text-[#9370db]">aka <span className="text-[#8a2be2]">xynoan</span></h2>

          <p className="mb-8 text-gray-300">
            A programmer with a passion for learning and failure. he/him 🇵🇭
          </p>
        </div>

        <div className="relative mt-8 flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full bg-[#8a2be2] bg-opacity-20 blur-md"></div>
          <div className="z-10 h-32 w-32 rounded-full border-2 border-[#9370db] bg-[#4b0082] bg-opacity-50 p-4">
            <div className="h-full w-full rounded-full bg-[#0a0a0a] bg-opacity-50">
              <Image src="/profile.png" alt="Avatar" width={80} height={80} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
