// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="absolute left-32 top-1/2 transform -translate-y-1/2 w-1/4 h-auto">
          <Image
            src="/phone.png" // You need to upload the image to public folder
            alt="Phone"
            layout="responsive"
            width={300}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-start text-left ml-1/3">
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png" // You need to upload the image to public folder
              alt="Logo"
              width={200}
              height={100}
              className="mr-4"
            />
            <div className="ml-10">
              <h1 className="font-bold text-7xl">Vision Bridge</h1>
              <p className="text-2xl">TECHNOLOGY FOR ALL</p>
            </div>
          </div>
          <div className="flex items-end mt-10 mb-10">
            <span className="text-xl text-gray-400 mr-2">Built with</span>
            <Image
              src="/gemini.png" // You need to upload the image to public folder
              alt="Gemini"
              width={200}
              height={50}
            />
          </div>
          <p className="mt-5 text-xl text-gray-400 mb-4">
            Google Cloud AI Hackathon Project 2024
          </p>
          <div className="self-end w-full flex justify-end"> {/* Added self-end and justify-end */}
            <Link
              href="https://visionbridge-776625182572.asia-northeast1.run.app/"
              passHref
            >
              <Button className="text-lg mt-10 bg-blue-500 px-12 py-6 rounded-full"> {/* Increased padding and font size */}
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
