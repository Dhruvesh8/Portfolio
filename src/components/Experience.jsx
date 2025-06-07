import { FiCalendar, FiBriefcase, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experience = {
    company: 'BrainyBeam Technologies Pvt Ltd',
    position: 'MERN Stack Developer – Internship',
    period: 'May–July 2025',
    type: 'Internship',
    description: 'Gained hands-on experience in full-stack development using the MERN stack, contributing to real-world projects and enhancing my technical skills in a professional environment.'
  };

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Experience
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Professional experience that has contributed to my growth as a developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100 dark:border-gray-700 animate-fade-in">
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-600 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <FiBriefcase className="w-3.5 h-3.5" />
              <span>{experience.type}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Main Content */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                  {experience.position}
                </h3>
                
                <h4 className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {experience.company}
                </h4>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {experience.description}
                </p>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FiCalendar className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-sm">{experience.period}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FiMapPin className="w-4 h-4 text-secondary-500" />
                  <span className="font-medium text-sm">Remote</span>
                </div>

                {/* Skills Tags */}
                <div className="pt-2">
                  <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;