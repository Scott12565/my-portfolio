import Link from "next/link";

const Hero = () => {
    return (
      <section id="home" className=" h-screen flex flex-col justify-center items-center text-gray-100 text-center my-0 px-3.5 md:px-7">
        <h1 className="hero-title text-2xl md:text-4xl lg:text-6xl mb-3 md:mb-6 font-bold px-3">
            Hi, I'm Nkosinathi Silinda
          </h1>
          <p className="text-lg md:text-xl mb-4 md:mb-8">
          A passionate web developer skilled in HTML5, CSS, Javascript, Bootstarp, Tailwind CSS, <br /> 
          React, Next.js, Firebase, Express.js, Socket.io and MongoDB for building fast, interative and scalable web applications.
          </p>

        {/* view projects button */}
        <div className="mt-6 hero-button">
            <Link href={'#projects'} 
            className="px-6 py-3 text-center text-lg bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 font-semibold transition duration-200">
                View My Work
            </Link>
        </div>
      </section>
    );
  };

  export default Hero