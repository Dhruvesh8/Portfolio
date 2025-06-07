import { FiDownload } from 'react-icons/fi';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const About = () => {
  const typingTexts = ['Full stack development', 'to solve real life problems'];
  const displayText = useTypingAnimation(typingTexts, 100, 2000);

  const handleDownloadResume = () => {
    // Create a dummy resume download link
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dhruvesh_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Dhruvesh</span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 h-10 flex items-center">
                <span>I love </span>
                <span className="text-secondary-600 dark:text-secondary-400 ml-2 border-r-2 border-current pr-1">
                  {displayText}
                </span>
              </div>
            </div>
            
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              A passionate Computer Science student specializing in full-stack development. 
              I enjoy building innovative solutions that make a real difference in people's lives.
            </p>

            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/Dhruvesh.jpg"
                    alt="Dhruvesh Patel"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full opacity-60"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
