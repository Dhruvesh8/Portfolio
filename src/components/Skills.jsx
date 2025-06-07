import { 
  FiCode, 
  FiMonitor, 
  FiServer, 
  FiDatabase, 
  FiTool, 
  FiCpu 
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode className="w-5 h-5" />,
      skills: ['C++', 'Python', 'JavaScript'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frontend',
      icon: <FiMonitor className="w-5 h-5" />,
      skills: ['HTML', 'CSS', 'React.js'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Backend',
      icon: <FiServer className="w-5 h-5" />,
      skills: ['Node.js', 'Express.js'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Cloud/Databases',
      icon: <FiDatabase className="w-5 h-5" />,
      skills: ['AWS', 'MongoDB', 'MySQL'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Tools',
      icon: <FiTool className="w-5 h-5" />,
      skills: ['Docker', 'Databricks', 'Cisco'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Fundamentals',
      icon: <FiCpu className="w-5 h-5" />,
      skills: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Operating Systems'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A comprehensive set of technologies and skills I've mastered through continuous learning and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-5 hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${category.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              <div className="space-y-1.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;