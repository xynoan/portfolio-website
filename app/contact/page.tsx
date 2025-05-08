import Link from "next/link";
import NavButton from "../components/NavButton";
import GalaxyBackground from "../components/GalaxyBackground";
import { createMetadata } from "../metadata";

export const metadata = createMetadata('Contact', 'Get in touch with me for collaborations, questions, or just to say hello.');

export default function Contact() {

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
            <GalaxyBackground/>

            <div className="container relative z-10 mx-auto px-4 py-16">
                <h1 className="mb-8 text-4xl font-bold">Contact</h1>
                <p className="mb-4">For business inquiries: ncmorva@gmail.com</p>
                <Link href="/" className="minecraft-btn inline-block">
                    Back to Home
                </Link>
            </div>

            <NavButton/>
        </div>
    );
} 