import { FiCalendar, FiAward } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      institution: 'Pandit Deendayal Energy University, Gandhinagar',
      degree: 'B.Tech - Computer Science and Engineering',
      period: '2022 - 2026',
      grade: '9.08 CGPA',
      current: true
    },
    {
      institution: 'Tapovan Vidhyamandir Sankul, Himatnagar',
      degree: 'GHSEB (12th)',
      period: '2021 - 2022',
      grade: '92.33%'
    },
    {
      institution: 'Nootan High School, Himatnagar',
      degree: 'GSEB (10th)',
      period: '2019 - 2020',
      grade: '84%'
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Education
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My academic journey and achievements that have shaped my technical foundation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-600 border-4 border-white dark:border-gray-900 rounded-full z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                    {edu.current && (
                      <div className="inline-flex items-center space-x-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2.5 py-1 rounded-full text-xs font-medium mb-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
                        <span>Current</span>
                      </div>
                    )}
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                      {edu.institution}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {edu.degree}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 font-semibold">
                        <FiAward className="w-3.5 h-3.5" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;