import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email',
      value: 'dhruveshpatel7572@gmail.com',
      href: 'mailto:dhruveshpatel7572@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: 'Phone',
      value: '9925241340',
      href: 'tel:+919925241340',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Gandhinagar, Gujarat',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'dhruveshpatel-ind',
      href: 'https://linkedin.com/in/dhruveshpatel-ind',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Message Sent!")
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // You can add actual form submission logic here
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Me
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {contact.label}
                    </h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 animate-fade-in border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="text-center mb-5">
                <div className="inline-flex p-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full mb-3">
                  <FiSend className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                  Send Message
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;