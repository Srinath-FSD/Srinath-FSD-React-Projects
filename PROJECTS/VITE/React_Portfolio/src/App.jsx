import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';

// Navigation Component
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Projects', 'Contact'];
  
  const scrollToSection = (section) => {
    setActiveSection(section.toLowerCase());
    setIsOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">SRINATH</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`hover:text-blue-600 transition ${
                  activeSection === item.toLowerCase() ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="text-center px-4">
        <div className="text-6xl mb-4">👋</div>
        <h2 className="text-gray-600 text-xl mb-2">Welcome to my digital space</h2>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Srinath</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2">Frontend Developer</p>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Crafting beautiful, functional web experiences with modern technologies and creative solutions
        </p>
      </div>
    </section>
  );
};

// Skill Badge Component
const SkillBadge = ({ skill }) => (
  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
    {skill}
  </span>
);

// Soft Skill Card Component
const SoftSkillCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// About Component
const About = () => {
  const technicalSkills = ['HTML', 'CSS', 'Bootstrap', 'MySQL', 'JavaScript'];
  
  const softSkills = [
    { title: 'Communication', description: 'Clear and effective verbal & written communication' },
    { title: 'Teamwork', description: 'Collaborative approach to achieving common goals' },
    { title: 'Time Management', description: 'Efficient prioritization and deadline management' },
    { title: 'Problem Solving', description: 'Creative solutions to complex challenges' },
    { title: 'Leadership', description: 'Guiding teams and driving project success' },
    { title: 'Adaptability', description: 'Quick learning and flexibility in changing environments' },
    { title: 'Attention to Detail', description: 'Meticulous approach to quality and precision' },
    { title: 'Client Relations', description: 'Building strong professional relationships' }
  ];
  
  const highlights = [
    { title: 'Clean Code', desc: 'Writing maintainable, scalable, and efficient code following best practices.' },
    { title: 'Responsive Design', desc: 'Creating seamless experiences across all devices and screen sizes.' },
    { title: 'Problem Solving', desc: 'Analytical thinking and creative solutions to complex challenges.' }
  ];
  
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Passionate Frontend Developer with expertise in creating modern, responsive web applications. 
          I combine creative design with clean code to deliver exceptional user experiences. 
          I'm always eager to learn new technologies and tackle challenging projects.
        </p>
        
        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map(skill => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map(skill => (
              <SoftSkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
        
        {/* More About Me */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">More About Me</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {highlights.map(item => (
              <div key={item.title} className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            With a strong foundation in frontend technologies, I bring a comprehensive approach to web development. 
            My passion lies in creating user-centric applications that not only look great but also provide 
            exceptional functionality and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, status, technologies }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map(tech => (
          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
        View Project →
      </button>
    </div>
  </div>
);

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'Modern Cow Care',
      description: 'Modern cow care combines tradition with technology. Healthy cows mean healthy milk and a strong future. Smart farming, happy animals, and better productivity.',
      status: 'Completed',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
    },
    {
      title: 'Modern Baby Care',
      description: 'Modern baby care meets the power of AI. From pregnancy to childhood, smarter guidance every step. Healthy growth, happy parenting, and a brighter future.',
      status: 'Completed',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
    },
    {
      title: 'Modern Farming',
      description: 'Full-featured farming is about using with the help of AI to farming based on climate and price prediction',
      status: 'Planning',
      technologies: ['Bootstrap', 'JavaScript', 'Node.js']
    }
  ];
  
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-12">
          A showcase of my recent work and technical expertise
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! (This is a demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };
  
  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/Srinath-FSD' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/918056655187' },
    { icon: Mail, label: 'Email', link: 'mailto:srinath@example.com' }
  ];
  
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12">Let's discuss your next project</p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Tap any icon to connect with me</p>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 hover:bg-blue-50 rounded-lg transition"
              >
                <Icon size={32} className="text-blue-600" />
                <span className="text-sm text-gray-700">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CodeCraft Works</h3>
            <p className="text-gray-400">by Srinath</p>
            <p className="text-gray-400 mt-2">
              Premium web development services. Creating amazing digital experiences with modern technologies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['home', 'about', 'projects', 'contact'].map(link => (
                <button 
                  key={link} 
                  onClick={() => scrollToSection(link)}
                  className="text-left text-gray-400 hover:text-white transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p>Phone: +91 8056655187</p>
              <p>GitHub: Srinath-FSD</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 CodeCraft Works. All rights reserved.</p>
          <p className="mt-2">Built with passion and code by Srinath.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <div className="font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}