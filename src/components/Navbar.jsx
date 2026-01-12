import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'Mark_attendance', label: 'Mark Attendance', path: '/login' },
    { id: 'attendance', label: 'View Attendance', path: '/login' },
    { id: 'reports', label: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    navigate(item.path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-zinc-900 shadow-2xl z-50 fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 ml-3">
              <button
                onClick={() => handleNavClick({ id: 'home', label: 'Home', path: '/' })}
                className="text-white text-2xl font-bold tracking-tight hover:text-indigo-400 transition-colors duration-200"
              >
                Tracko
              </button>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="relative px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 group"
                  >
                    {item.label}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out ${activeSection === item.id
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Login Button - Desktop */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => navigate('/login')}
                className="bg-zinc-800 px-5 py-2 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-900 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50"
              >
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`${activeSection === item.id
                  ? 'bg-zinc-700 text-white border-l-4 border-white'
                  : 'text-gray-300 hover:bg-zinc-700 hover:text-white border-l-4 border-transparent'
                } block pl-3 pr-4 py-3 text-base font-medium w-full text-left transition-all duration-200`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-3 px-3">
              <button 
                onClick={() => navigate('/login')}
                className="bg-zinc-800 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-800 transition-all duration-200"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div to push content down */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;