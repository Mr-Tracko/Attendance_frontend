import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Shuffle from './ui/Shuffle';
import GradientText from './ui/GradientText'
import ElectricBorder from './ui/ElectricBorder'


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
    // <div className="min-h-screen bg-black text-gray-100 mt-[40px]">
    <div className="bg-black text-gray-100 w-full">
      <div className="fixed inset-0 w-full h-full z-0 bottom-0 w-full h-[calc(100vh-4rem)] top-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }}></div>
      </div>
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        // className="relative pt-[100px] pb-16 px-4 md:px-8 lg:px-16 overflow-hidden"
        className="relative pt-24 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
        </div>
        {/* <div className="max-w-6xl mx-auto"> */}
        <div className="w-full max-w-6xl mx-auto relative z-20">
          <div className="text-center mb-16">

            <Shuffle
              text="Track Attendance"
              className={`text-4xl md:text-5xl lg:text-7xl font-bold mr-5 text-white transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />

            <Shuffle
              text="with Ease"
              className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />

            <p className={`text-xl md:text-3xl text-gray-400 mb-10 transition-all duration-700 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Simplify attendance tracking for teachers and students
            </p>
            <div className={`flex flex-col md:flex-row justify-center gap-4 mt-12 transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-medium transition duration-300 hover:scale-105 transform"
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
        className="pb-10 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-900"
      >

        {/* <div className="max-w-6xl mx-auto"> */}
        <div className="w-full max-w-7xl mx-auto relative z-20">
          <h2 className={`text-4xl font-bold mb-12 text-center text-white transition-all duration-700 ease-out ${visibleSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}

            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className={` p-6 rounded-lg shadow-md transition-all duration-700 ease-out transform ${visibleSections.features ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'}`}
                onMouseEnter={() => setActiveFeature(0)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-black transition-all duration-500 ${activeFeature === 0 ? 'scale-110' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">Easy Attendance Marking</h3>
                <p className="text-gray-400 text-center">Teachers can quickly mark attendance for entire classes with just a few clicks</p>
              </div>
            </ElectricBorder>


            {/* Feature 2 */}
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className={` border-gray-900 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-100 transform ${visibleSections.features ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
                onMouseEnter={() => setActiveFeature(1)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-black transition-all duration-500 ${activeFeature === 1 ? 'scale-110' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">Student Self-Tracking</h3>
                <p className="text-gray-400 text-center">Students can monitor their own attendance records and receive alerts about attendance issues</p>
              </div>
            </ElectricBorder>


            {/* Feature 3 */}
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className={` border-gray-900 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-200 transform ${visibleSections.features ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'}`}
                onMouseEnter={() => setActiveFeature(2)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-black transition-all duration-500 ${activeFeature === 2 ? 'scale-110' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">Visual Analytics</h3>
                <p className="text-gray-400 text-center">Comprehensive dashboards provide insights into attendance patterns and trends</p>
              </div>
            </ElectricBorder>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="howItWorks"
        ref={howItWorksRef}
        className="py-16 px-4 md:px-8 lg:px-16"
      >

        {/* <div className="max-w-6xl mx-auto"> */}
        <div className="w-full max-w-7xl mx-auto relative z-20">
          <h2 className={`text-3xl font-bold mb-12 text-center text-white transition-all duration-700 ease-out ${visibleSections.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For Teachers */}
            <div className={`bg-black border border-gray-900 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out transform ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">For Teachers</h3>
              <ul className="space-y-4">
                <li className={`flex items-start transition-all duration-500 ease-out delay-100 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">1</span>
                  <p className="text-gray-400">Log in to your teacher dashboard</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-200 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">2</span>
                  <p className="text-gray-400">Select the class and date for attendance</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-300 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">3</span>
                  <p className="text-gray-400">Mark students as present or absent with a single click</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-400 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">4</span>
                  <p className="text-gray-400">View reports and analytics for your classes</p>
                </li>
              </ul>
            </div>

            {/* For Students */}
            <div className={`bg-black border border-gray-900 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out transform ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">For Students</h3>
              <ul className="space-y-4">
                <li className={`flex items-start transition-all duration-500 ease-out delay-100 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">1</span>
                  <p className="text-gray-400">Log in with your name and roll number</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-200 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">2</span>
                  <p className="text-gray-400">Access your personal attendance dashboard</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-300 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">3</span>
                  <p className="text-gray-400">Track your attendance percentage and history</p>
                </li>
                <li className={`flex items-start transition-all duration-500 ease-out delay-400 ${visibleSections.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">4</span>
                  <p className="text-gray-400">Receive notifications about attendance status</p>
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
        className="py-16 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-900"
      >
        <div className="w-full max-w-7xl mx-auto relative z-20">
          <h2 className={`text-3xl font-bold mb-12 text-center text-white transition-all duration-700 ease-out ${visibleSections.quickAccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Quick Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student Access */}
            <div className={`bg-black border border-gray-900 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out transform ${visibleSections.quickAccess ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-2'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">Student Access</h3>
              <div className="space-y-4">
                <div className="transition-all duration-300 hover:translate-y-1 hover:shadow-md">
                  <label className="block text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="transition-all duration-300 hover:translate-y-1 hover:shadow-md">
                  <label className="block text-gray-400 mb-2">Roll Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your roll number"
                  />
                </div>
                <div className="transition-all duration-300 hover:translate-y-1 hover:shadow-md">
                  <label className="block text-gray-400 mb-2">Class</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 transform focus:scale-105">
                    <option>Select your class</option>
                    <option>Class A</option>
                    <option>Class B</option>
                    <option>Class C</option>
                  </select>
                </div>
                <button
                  onClick={() => navigate("dashboard")}
                  className="w-full px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Check Attendance
                </button>
              </div>
            </div>

            {/* Teacher Access */}
            <div className={`bg-black border border-gray-900 p-8 rounded-lg shadow-lg transition-all duration-700 ease-out delay-100 transform ${visibleSections.quickAccess ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 -rotate-2'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">Teacher Access</h3>
              <div className="space-y-6">
                <p className="text-gray-400">Manage attendance, generate reports, and track student participation from your dashboard.</p>
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => navigate("login")}
                    className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Teacher Login
                  </button>
                  <button
                    className="px-4 py-2 bg-black border border-gray-800 text-white hover:bg-gray-900 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
        <div className="w-full mx-auto relative z-20">
          <h2 className={`text-3xl font-bold mb-12 text-center text-white transition-all duration-700 ease-out ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-black border border-gray-900 p-6 rounded-lg shadow-md transition-all duration-700 ease-out transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-gray-400 mb-6">The attendance tracking system has transformed how we monitor student presence. It's intuitive and saves us hours each week.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mr-3 transition-all duration-300 transform hover:scale-110">
                  <span className="font-bold">PS</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Prof. Smith</h4>
                  <p className="text-sm text-gray-500">Mathematics Department</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={`bg-black border border-gray-900 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-100 transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-gray-400 mb-6">Being able to check my attendance status anytime has helped me stay accountable and improve my class participation.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mr-3 transition-all duration-300 transform hover:scale-110">
                  <span className="font-bold">AJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Alex Johnson</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={`bg-black border border-gray-900 p-6 rounded-lg shadow-md transition-all duration-700 ease-out delay-200 transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-gray-400 mb-6">The analytics and reporting features have given us valuable insights into attendance patterns across different courses.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mr-3 transition-all duration-300 transform hover:scale-110">
                  <span className="font-bold">DC</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Dr. Chen</h4>
                  <p className="text-sm text-gray-500">Department Head</p>
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
        className="py-16 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 text-white transition-all duration-700 ease-out ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ready to Simplify Attendance Management?
          </h2>
          <p className={`text-xl text-gray-400 mb-8 transition-all duration-700 ease-out delay-100 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Join thousands of teachers and students who have streamlined their attendance tracking process.
          </p>
          <div className={`flex flex-col md:flex-row justify-center gap-4 transition-all duration-700 ease-out delay-200 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => navigate("login")}
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 bg-black border border-gray-800 text-white hover:bg-gray-900 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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