import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Youtube, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import TypewriterComponent from './components/TypewriterComponent';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/30 to-gray-900/50 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
            Hi, I'm Jim-George Tamunotonyemie Divine
          </h1>
          <TypewriterComponent 
            words={['Data Scientist', 'Filmmaker']} 
            className="text-2xl md:text-3xl text-purple-200 mb-8"
          />
          <div className="space-x-4">
            <a
              href="https://drive.google.com/file/d/1W4p7ITDS5rwrXnqddveNfq9a_OycdNQ5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-full font-semibold 
                       hover:from-purple-700 hover:to-purple-900 transition-all duration-300 
                       transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              View Resume
            </a>
            <button
              onClick={scrollToContact}
              className="inline-block bg-transparent border-2 border-purple-400 px-6 py-3 rounded-full font-semibold
                       hover:bg-purple-400 hover:text-gray-900 transition-all duration-300
                       transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
            >
              Hire Me
            </button>
          </div>
        </div>
        <ChevronDown 
          className="absolute bottom-8 animate-bounce w-8 h-8 cursor-pointer text-purple-300 hover:text-purple-100 transition-colors" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-20 bg-gradient-to-br from-gray-900/50 via-purple-900/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">About Me</h2>
          <p className="text-lg leading-relaxed mb-8 text-purple-100">
            I am a First-Class Software Engineering graduate from Babcock University. 
            As a passionate filmmaker, actor, writer, and data scientist, I enjoy solving 
            real-world problems by combining creativity with technical skills. I specialize 
            in building predictive models, developing web applications, and creating engaging content.
          </p>
        </div>
      </section>

      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20 bg-gradient-to-br from-gray-900/50 via-purple-900/50 to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Shoe-Size Predictor Model"
              description="A Flask-based web application that predicts shoe sizes using machine learning algorithms."
              link="https://tonyejg.pythonanywhere.com/"
              tech={['Python', 'Flask', 'Machine Learning']}
            />
            <ProjectCard
              title="ML Logistic Regression Loan Prediction"
              description="A machine learning project implementing logistic regression for loan approval prediction."
              link="https://github.com/TonyeJim-George/ML-Logistic-Regression-Loan-prediction-Model-"
              tech={['Python', 'scikit-learn', 'Pandas']}
            />
            <ProjectCard
              title="Facebook Ad Campaign Analysis"
              description="A data-driven project that identified and optimized ad performance metrics."
              tech={['Python', 'Data Analysis', 'Visualization']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-700/30 
                           focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                           transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-700/30 
                           focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                           transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-700/30 
                           focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                           transition-all duration-300"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-lg font-semibold
                               hover:from-purple-700 hover:to-purple-900 transition-all duration-300
                               transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                Send Message
              </button>
            </form>
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <Mail className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-purple-100">jimgeorgedivine[at]gmail.com</span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/TonyeJim-George"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Github className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-all duration-300 transform group-hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tamunotonyemie-jim-george-a8a203210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Linkedin className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-all duration-300 transform group-hover:scale-110" />
                </a>
                <a
                  href="https://www.youtube.com/@tonye_jimgeorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Youtube className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-all duration-300 transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;