function Footer() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Mark Attendance', href: '/login' },
    { label: 'View Attendance', href: '/login' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const features = [
    'Real-time Tracking',
    'Analytics Dashboard',
    'Reports & Insights',
    'Easy Integration'
  ];

  const socialLinks = [
    {
      name: 'Gmail',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      link: 'mailto:shubhamgupta57019@gmail.com',
      color: 'hover:text-red-400'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      link: 'https://github.com/Mr-Tracko',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      link: 'https://www.linkedin.com/in/shubham-gupta-625709291/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-1.5 4-5 5" />
        </svg>
      ),
      link: 'https://x.com/2703Shubham',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <footer className="bg-zinc-900 relative z-20 border-t border-zinc-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Logo */}
          <div className="flex flex-col justify-start">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-2 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              Tracko
            </h2>
            <p className="text-gray-400 text-sm">
              Professional attendance tracking system for educational institutions.
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Middle-Right Section - Features */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Features</h3>
            <div className="flex flex-col space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                  <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors duration-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-200 ${social.color} hover:scale-110 transform`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              © 2025 Tracko. All rights reserved.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            Built with <span className="text-cyan-400">❤</span> for better attendance tracking
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 text-xs hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom border gradient */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent"></div>
    </footer>
  );
}

export default Footer;