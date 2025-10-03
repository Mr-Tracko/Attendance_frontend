import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // Simulate navigate function since react-router-dom isn't available in this environment
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    quickAccess: false,
    testimonials: false,
    cta: false
  });

  // References for all the sections
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const quickAccessRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Initial load animation
  useEffect(() => {
    setIsLoaded(true);
    setVisibleSections(prev => ({ ...prev, hero: true }));
  }, []);

  // Intersection Observer setup for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2 // element is 20% visible before triggering
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    }, observerOptions);

    // Observe all section refs
    if (featuresRef.current) sectionObserver.observe(featuresRef.current);
    if (howItWorksRef.current) sectionObserver.observe(howItWorksRef.current);
    if (quickAccessRef.current) sectionObserver.observe(quickAccessRef.current);
    if (testimonialsRef.current) sectionObserver.observe(testimonialsRef.current);
    if (ctaRef.current) sectionObserver.observe(ctaRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="pt-20 pb-16 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-indigo-400 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Track Attendance with Ease
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-10 transition-all duration-700 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Simplify attendance tracking for teachers and students
            </p>
            <div className={`flex flex-col md:flex-row justify-center gap-4 mt-8 transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate("/login")}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300 hover:scale-105 transform"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={featuresRef}
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center text-indigo-300 transition-all duration-700 ease-out ${visibleSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              className={`bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-700 ease-out transform ${visibleSections.features ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'}`}
              onMouseEnter={() => setActiveFeature(0)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-500 ${activeFeature === 0 ? 'scale-110' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-indigo-300">Easy Attendance Marking</h3>
              <p className="text-gray-300 text-center">Teachers can quickly mark attendance for entire classes with just a few clicks</p>
            </div>

            {/* Feature 2 */}
            <div 
              className={`bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-100 transform ${visibleSections.features ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
              onMouseEnter={() => setActiveFeature(1)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-500 ${activeFeature === 1 ? 'scale-110' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-indigo-300">Student Self-Tracking</h3>
              <p className="text-gray-300 text-center">Students can monitor their own attendance records and receive alerts about attendance issues</p>
            </div>

            {/* Feature 3 */}
            <div 
              className={`bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-200 transform ${visibleSections.features ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'}`}
              onMouseEnter={() => setActiveFeature(2)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-500 ${activeFeature === 2 ? 'scale-110' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-indigo-300">Visual Analytics</h3>
              <p className="text-gray-300 text-center">Comprehensive dashboards provide insights into attendance patterns and trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        id="howItWorks" 
        ref={howItWorksRef}
        className="py-16 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center text-indigo-300 transition-all duration-700 ease-out ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For Teachers */}
            <div className={`bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out transform ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}>
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">For Teachers</h3>
              <ul className="space-y-4">
                <li className={`flex items-start transition-all duration-500 ease-out delay-100 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">1</span>
                  <p className="text-gray-300">Log in to your teacher dashboard</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-200 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">2</span>
                  <p className="text-gray-300">Select the class and date for attendance</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-300 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">3</span>
                  <p className="text-gray-300">Mark students as present or absent with a single click</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-400 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">4</span>
                  <p className="text-gray-300">View reports and analytics for your classes</p>
                </li>
              </ul>
            </div>

            {/* For Students */}
            <div className={`bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out transform ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}>
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">For Students</h3>
              <ul className="space-y-4">
                <li className={`flex items-start transition-all duration-500 ease-out delay-100 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">1</span>
                  <p className="text-gray-300">Log in with your name and roll number</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-200 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">2</span>
                  <p className="text-gray-300">Access your personal attendance dashboard</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-300 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">3</span>
                  <p className="text-gray-300">Track your attendance percentage and history</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-400 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">4</span>
                  <p className="text-gray-300">Receive notifications about attendance status</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section 
        id="quickAccess" 
        ref={quickAccessRef}
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center text-indigo-300 transition-all duration-700 ease-out ${visibleSections.quickAccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Quick Access
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student Access */}
            <div className={`bg-gray-700 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out transform ${visibleSections.quickAccess ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-2'}`}>
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Student Access</h3>
              <div className="space-y-4">
                <div className="transition-all duration-300 hover:translate-y-1 hover:shadow-md">
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="transition-all duration-300 hover:translate-y-1 hover:shadow-md">
                  <label className="block text-gray-300 mb-2">Roll Number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your roll number"
                  />
                </div>
                <div className="transition-all duration-300 hover:translate-y-1 hover:shadow-md">
                  <label className="block text-gray-300 mb-2">Class</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform focus:scale-105">
                    <option>Select your class</option>
                    <option>Class A</option>
                    <option>Class B</option>
                    <option>Class C</option>
                  </select>
                </div>
                <button 
                  onClick={() => navigate("dashboard")}
                  className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Check Attendance
                </button>
              </div>
            </div>

            {/* Teacher Access */}
            <div className={`bg-gray-700 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out delay-100 transform ${visibleSections.quickAccess ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 -rotate-2'}`}>
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Teacher Access</h3>
              <div className="space-y-6">
                <p className="text-gray-300">Manage attendance, generate reports, and track student participation from your dashboard.</p>
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => navigate("login")}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Teacher Login
                  </button>
                  <button 
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={testimonialsRef}
        className="py-16 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center text-indigo-300 transition-all duration-700 ease-out ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-700 ease-out transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">The attendance tracking system has transformed how we monitor student presence. It's intuitive and saves us hours each week.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-3 transition-all duration-300 transform hover:scale-110">
                  <span className="font-bold text-white">PS</span>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-300">Prof. Smith</h4>
                  <p className="text-sm text-gray-400">Mathematics Department</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className={`bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-100 transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">Being able to check my attendance status anytime has helped me stay accountable and improve my class participation.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-3 transition-all duration-300 transform hover:scale-110">
                  <span className="font-bold text-white">AJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-300">Alex Johnson</h4>
                  <p className="text-sm text-gray-400">Computer Science Student</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className={`bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-200 transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">The analytics and reporting features have given us valuable insights into attendance patterns across different courses.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-3 transition-all duration-300 transform hover:scale-110">
                  <span className="font-bold text-white">DC</span>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-300">Dr. Chen</h4>
                  <p className="text-sm text-gray-400">Department Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        id="cta" 
        ref={ctaRef}
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 text-indigo-300 transition-all duration-700 ease-out ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ready to Simplify Attendance Management?
          </h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-700 ease-out delay-100 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Join thousands of teachers and students who have streamlined their attendance tracking process.
          </p>
          <div className={`flex flex-col md:flex-row justify-center gap-4 transition-all duration-700 ease-out delay-200 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => navigate("login")}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
            <button 
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;