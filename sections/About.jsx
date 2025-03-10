import React from "react";

const About = () => {
  return (
    <section className="mb-24 py-8 px-7 md:py-12 text-gray-100" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 md:mb-6">Who Am I?</h2>
        <p className="text-lg leading-relaxed">
          You can call me <span className="font-semibold">Scott.</span>
          I started my journey into web development because I love building things that solve real problems
          and create smooth user experiences.
        </p>
        <p className="text-lg md:text-xl mt-2 md:mt-4 leading-relaxed">
          Beyond coding, I enjoy experimenting with modern tech and learning from developers
          who’ve been in the field longer than I have. I believe in writing clean, efficient code and always
          improving my skills to stay ahead in the industry.
        </p>
        <p className="text-lg mt-2 md:mt-4 leading-relaxed">
          My goal? To build meaningful projects, work with great teams, and continue growing as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
