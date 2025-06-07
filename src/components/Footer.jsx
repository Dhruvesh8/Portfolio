import { FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>

          {/* Name */}
          <h3 className="text-xl font-bold">Dhruvesh Patel</h3>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2025 Made with</span>
            <FiHeart className="w-4 h-4 text-red-500" />
            <span>by Dhruvesh Patel</span>
          </div>

          {/* Additional Info */}
          <p className="text-gray-500 text-sm text-center max-w-md">
            Full Stack Developer passionate about creating innovative solutions and building meaningful connections through technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;