export default function Skills() {
    return (
      <section className="py-8 px-7 md:py-12 text-gray-100">
        <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 md:mb-6">My Skills</h1>

            {/* frontend skills */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-s gap-6">
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>HTML</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>CSS</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>BOOTSTRAP</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>TAILWIND CSS</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>REACT</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>NEXT.JS</span>
                    </div>
                </div>
            </div>

            {/* Backend */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-s gap-6">                
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>JSON-SERVER</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>NODE.JS</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>EXPRESS.JS</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>FIREBASE</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>SOCKET.IO</span>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>MONGODB</span>
                    </div>
                    
                    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg">
                        <span>NEXT.JS</span>
                    </div>

                    {/* other */}
                </div>
            </div>
        </div>
      </section>
    );
  }
  