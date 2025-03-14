export default function Skills() {
    return (
        <section className="mb-24 py-8 px-7 md:py-12 text-gray-100" id="skills">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 md:mb-8">My Skills</h1>
  
          {/* Frontend Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 md:mb-6">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-s gap-6">
              {["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "TAILWIND CSS", "REACT", "NEXT.JS"].map((skill) => (
                <div
                  key={skill}
                  className="flex justify-center items-center bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-all"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Backend Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 md:mb-6">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-s gap-6">
              {["JSON-SERVER", "NODE.JS", "EXPRESS.JS", "FIREBASE", "SOCKET.IO"].map((skill) => (
                <div
                  key={skill}
                  className="flex justify-center items-center bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-all"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto">
              {["Git", "GitHub", "VS Code"].map((tool) => (
                <div
                  key={tool}
                  className="flex justify-center items-center bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-all"
                >
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  