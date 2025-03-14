import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            projectName: 'South Dev Chat',
            description: 'A real-time chat application built with Socket.io and Express.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Socket.io', 'Express.js'],
            liveDemo: 'https://southdevchat.onrender.com',
            Github: 'https://github.com/Scott12565/south-dev-chat'
        },
        {
            projectName: 'Deephouse Space',
            description: 'A deep house music marketplace built with React.js, Tailwind CSS, and Firebase, offering smooth navigation and user authentication.',
            techStack: ['React.js', 'Tailwind CSS', 'Axios', 'Firebase', 'PayGate'],
            liveDemo: 'https://deephousespace.web.app/',
            Github: 'https://github.com/Scott12565/Melody-Market'
        },
        {
            projectName: 'Koppee Coffee Shop',
            description: 'A stylish and interactive coffee shop website made with React.js and JSON-Server, showcasing the menu and brand story.',
            techStack: ['React.js', 'CSS', 'JSON-Server', 'Axios'],
            liveDemo: 'https://koppee-shop.netlify.app/',
            Github: 'https://github.com/Scott12565/Koppee-coffee-shop'
        },
    ];

    return (
        <section className="mb-24 py-8 px-7 md:py-12 text-gray-100" id="projects">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 md:mb-8">My Projects</h1>
                <p className="text-lg md:text-xl mt-2 md:mt-4 mb-8 leading-relaxed">
                    A collection of projects I've built using modern web technologies.
                </p>

                {/* projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition duration-700"
                        >
                            <h3 className="text-xl font-bold mb-4">{project.projectName}</h3>
                            <p className="text-[16px] text-center mb-4">{project.description}</p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {project.techStack.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-blue-600 text-gray-100 text-sm px-3 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex justify-between items-end mt-4">
                                <Link 
                                    href={project.liveDemo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:scale-95 hover:underline transition duration-700"
                                >
                                    Live Demo
                                </Link>
                                <Link 
                                    href={project.Github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:scale-95 hover:underline transition duration-700"
                                >
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
