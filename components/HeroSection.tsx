// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0 lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <Image
            src="/phone.png"
            alt="Phone"
            width={500}
            height={1000}
            className="w-full h-auto mx-auto lg:mx-0 max-w-[500px] lg:max-w-none"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 lg:ml-auto">
          <div className="flex flex-col lg:flex-row items-center mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={60}
              className="mb-4 lg:mb-0 lg:mr-4"
            />
            <div className="lg:ml-4">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">Vision Bridge</h1>
              <p className="text-xl sm:text-2xl">TECHNOLOGY FOR ALL</p>
            </div>
          </div>
          <div className="flex items-center mt-6 lg:mt-10 mb-6 lg:mb-10">
            <span className="text-lg lg:text-xl text-gray-400 mr-2">Built with</span>
            <Image
              src="/gemini.png"
              alt="Gemini"
              width={140}
              height={35}
            />
          </div>
          <p className="text-lg lg:text-xl text-gray-400 mb-8">
            Google Cloud AI Hackathon Project 2024
          </p>
          <Link
            href="https://visionbridge-776625182572.asia-northeast1.run.app/"
            passHref
          >
            <Button className="text-lg bg-blue-500 px-8 py-4 rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
