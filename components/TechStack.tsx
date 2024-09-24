import Image from "next/image";

const TechStack = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <Image src="/vertax-ai.png" alt="Vertax AI" width={100} height={100} />
            <h3 className="text-xl font-semibold mt-4">Vertax AI</h3>
            <p className="text-center mt-2">
              Vertax AI is used for processing the video footage and generating the instructions.
            </p>
          </div>
          <div className="hidden md:block h-24 border-l-2 border-gray-700 mx-4"></div> {/* Vertical line */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <Image src="/cloud-run.png" alt="Cloud Run" width={100} height={100} />
            <h3 className="text-xl font-semibold mt-4">Cloud Run</h3>
            <p className="text-center mt-2">
              Cloud Run is utilized to deploy and manage containerized applications seamlessly.
            </p>
          </div>
          <div className="hidden md:block h-24 border-l-2 border-gray-700 mx-4"></div> {/* Vertical line */}
          <div className="flex flex-col items-center">
            <Image src="/cloud-functions.png" alt="Cloud Functions" width={100} height={100} />
            <h3 className="text-xl font-semibold mt-4">Cloud Functions</h3>
            <p className="text-center mt-2">
              Cloud Functions handle serverless execution of backend logic, ensuring scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
