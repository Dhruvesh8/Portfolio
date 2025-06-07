import { FiAward, FiClock, FiExternalLink } from 'react-icons/fi';

const Certificates = () => {
  const certificates = [
    {
      title: 'Qualified GATE-2025 in Computer Science',
      issuer: 'IIT',
      type: 'Competitive Exam',
      year: '2025',
      description: 'Successfully qualified the Graduate Aptitude Test in Engineering for Computer Science.',
      color: 'from-yellow-500 to-orange-500',
      certificateUrl: '/Gate.pdf'
    },
    {
      title: 'Understanding Incubation and Entrepreneurship',
      issuer: 'NPTEL',
      type: 'Course Completion',
      year: '2025',
      description: 'Comprehensive understanding of startup ecosystem and entrepreneurial principles.',
      color: 'from-blue-500 to-indigo-500',
      certificateUrl: '/Understanding_Incubation_and_Entrepreneurship.pdf'
    },
    {
      title: 'Forest and Their Management',
      issuer: 'NPTEL',
      type: 'Course Completion',
      year: '2025',
      description: 'Knowledge about forest conservation and sustainable management practices.',
      color: 'from-green-500 to-teal-500',
      certificateUrl: '/Forests_and_their_Management.pdf'
    }
  ];

  return (
    <section id="certificates" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Certificates
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Recognition and achievements that demonstrate my commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <FiAward className="w-6 h-6" />
              </div>

              {/* Certificate Content */}
              <div className="space-y-2.5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
                
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {cert.issuer}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-500">
                      <FiClock className="w-3.5 h-3.5" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  
                  <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {cert.type}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* View Certificate Button */}
                <a
                  href={cert.certificateUrl}
                  className="inline-flex items-center space-x-1.5 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 mt-3"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </a>
              </div>

              {/* Hover Effect */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;