import { FiGithub, FiExternalLink, FiUsers, FiMessageCircle, FiZap } from 'react-icons/fi';

const Projects = () => {
  const project = {
    title: 'Chatty – Realtime Chat Website',
    year: '2025',
    description:
      'A modern real-time chat application enabling seamless communication between multiple users with live features and responsive design.',
    features: [
      'Developed a real-time chat website using Socket.IO, enabling instant messaging between multiple users',
      'Implemented live typing indicators and active user tracking',
      'Used React.js for frontend, Node.js + Express.js for backend API and WebSocket',
      'Styled responsive UI using HTML, CSS, and JavaScript'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Dhruvesh8/Realtime-Chat-Web'
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Projects</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Showcasing my practical experience in building real-world applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 animate-fade-in">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1.5">{project.title}</h3>
                  <span className="bg-white/20 px-2.5 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <FiMessageCircle className="w-6 h-6" />
                  <FiUsers className="w-6 h-6" />
                  <FiZap className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg text-sm font-medium border border-primary-200 dark:border-primary-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
