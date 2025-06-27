import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/Chatbot";

export const Desktop = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/chat?q=${encodeURIComponent(trimmedQuery)}`);
    } else {
      // If no query, just open chat page
      navigate('/chat');
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="bg-variable-collection-dark min-h-screen w-full overflow-x-hidden relative">
      {/* Background Gradient - Exact match to flowcenai-landing */}
      <div className="absolute inset-0 bg-gradient-to-br from-variable-collection-dark via-variable-collection-dark-light to-variable-collection-dark overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[1000px] h-[1000px] bg-gradient-to-br from-variable-collection-primary/50 via-teal-500/25 to-blue-600/50 rounded-full blur-[100px] brightness-[0.5] contrast-100 saturate-[1] mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-8 lg:h-9 w-auto"
                alt="Flowcon logo"
                src="/img/flowcon-logo-3.png"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <a
                  href="#service"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  Service
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  Features
                </a>
                <a
                  href="#blogs"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  Blogs
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5"
                    alt="Translate"
                    src="/img/translate-1.png"
                  />
                  <span className="text-gray-400 text-base xl:text-lg font-medium">
                    EN
                  </span>
                </div>

                <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base xl:text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 hover:brightness-125 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-variable-collection-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <a
                  href="#service"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  Service
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  Features
                </a>
                <a
                  href="#blogs"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  Blogs
                </a>
                <div className="flex items-center space-x-2 py-2">
                  <img
                    className="w-5 h-5"
                    alt="Translate"
                    src="/img/translate-1.png"
                  />
                  <span className="text-gray-400 text-base font-medium">
                    EN
                  </span>
                </div>
                <button className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 hover:brightness-125 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight">
              Consulting and custom development
              <br className="hidden sm:block" />
              for the <span className="text-white">AI Age</span>
            </h1>
            <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              FlowConAI is a German-based AI consulting firm offering
              GDPR-compliant solutions and on-premise deployment for full data
              control.
            </p>

            {/* Features Tags */}
            <div className="mt-10 lg:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex items-center space-x-3">
                <img className="w-5 h-5" alt="Gdpr" src="/img/gdpr-1.png" />
                <span className="text-gray-300 text-base lg:text-lg">
                  GDPR Compliant
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="w-6 h-5"
                  alt="Solution"
                  src="/img/solution-1.png"
                />
                <span className="text-gray-300 text-base lg:text-lg">
                  On-Premise Solutions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <img className="w-4 h-5" alt="Data" src="/img/data-1.png" />
                <span className="text-gray-300 text-base lg:text-lg">
                  Data Sovereignty
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-10 lg:mt-12 max-w-2xl mx-auto">
              <form onSubmit={handleSearchSubmit}>
                <div className="flex items-center bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 p-1.5">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyPress}
                    placeholder="Ask Flowcon how he can help your business........"
                    className="flex-1 bg-transparent px-5 py-4 text-white placeholder-gray-400 outline-none text-base focus:border-variable-collection-primary"
                    autoComplete="off"
                  />
                  <button 
                    type="submit"
                    className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] flex items-center justify-center flex-shrink-0 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-110 hover:brightness-125 transition-all duration-300"
                  >
                    <img className="w-7 h-7" alt="Send" src="/img/send-3.png" />
                  </button>
                </div>
              </form>
            </div>

            {/* CTA Button */}
            <button className="mt-8 lg:mt-10 px-10 py-4 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base lg:text-lg font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 hover:brightness-125 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </section>

        {/* Expertise Section */}
        <section
          id="service"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
        >
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge AI capabilities with the highest standards
              of data privacy and infrastructure flexibility.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* AI Strategy Consulting */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#07214C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  className="w-6 h-6"
                  alt="Ai strategy"
                  src="/img/ai-strategy-consulting-3.png"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                AI Strategy Consulting
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Analyze your business processes, bottlenecks and new
                opportunities to develop a custom AI Strategy for your business
              </p>
            </div>

            {/* Employee Trainings */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#07214C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  className="w-6 h-6"
                  alt="Ai strategy"
                  src="/img/ai-strategy-consulting-3-1.png"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Employee Trainings
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Get everyone in your organization ready for the AI age. Learn to
                integrate external intelligence at the most impactful places in
                your workflows
              </p>
            </div>

            {/* Custom AI Agents */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#07214C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  className="w-6 h-6"
                  alt="Ai strategy"
                  src="/img/ai-strategy-consulting-3-2.png"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Custom AI Agents and LLM applications
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Applications that integrate fully with your organizations tools.
                Integrate with anything and let AI Agents automate inter tool
                workflows.
              </p>
            </div>

            {/* Workflow Automation */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#07214C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  className="w-6 h-6"
                  alt="Ai strategy"
                  src="/img/ai-strategy-consulting-3-3.png"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Workflow Automation
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Streamline operations with intelligent automation that adapts to
                your business needs and improves efficiency.
              </p>
            </div>

            {/* Process Optimization */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#07214C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  className="w-6 h-6"
                  alt="Ai strategy"
                  src="/img/ai-strategy-consulting-3-4.png"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Process Optimization with AI
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Leveraging AI and machine learning to analyze workflows,
                optimize performance, and drive operational efficiency.
              </p>
            </div>

            {/* GDPR Compliant */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#07214C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  className="w-6 h-6"
                  alt="Ai strategy"
                  src="/img/ai-strategy-consulting-3-5.png"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                GDPR Compliant
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                All our AI solutions are designed with European data protection
                regulations, ensuring your business remains compliant.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        >
          {/* Automation & Workflows Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 mb-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute w-64 h-64 -top-32 right-0 bg-variable-collection-primary rounded-full blur-[150px]" />
              <div className="absolute w-96 h-96 bottom-0 left-1/2 -translate-x-1/2 bg-blue-600 rounded-full blur-[200px]" />
            </div>

            <div className="relative z-10 p-10 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center relative">
                <div className="w-full lg:w-[65%] z-20">
                  <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-variable-collection-primary/20 to-blue-600/20 backdrop-blur-md text-white text-sm lg:text-base mb-8 border border-white/10">
                    Work smarter, not harder
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8">
                    Automation & Intelligent Workflows
                  </h3>

                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    FlowConAI builds smart workflows using AI agents to automate
                    repetitive tasks, streamline processes, and reduce
                    operational overhead. Streamline your business operations
                    with smart, end-to-end automation. Our AI Automation &
                    Intelligent Workflows service helps you identify repetitive
                    processes and redesign them using AI-powered solutions,
                    saving time and reducing human error.
                  </p>
                </div>

                <div className="w-full lg:w-[50%] lg:absolute lg:right-[-10%] h-full flex items-center justify-center mt-8 lg:mt-0">
                  <img
                    className="w-3/4 h-auto opacity-30 lg:opacity-50 transition-opacity duration-300 hover:opacity-70"
                    alt="Ai image"
                    src="/img/ai-image-3.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Data-Driven Insights */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute w-48 h-48 bottom-0 left-1/2 -translate-x-1/2 bg-variable-collection-primary rounded-full blur-[150px]" />
              </div>

              <img
                className="absolute top-0 right-0 w-48 lg:w-64 h-auto opacity-20"
                alt="Vector"
                src="/img/vector-1.png"
              />

              <div className="relative z-10 p-10 lg:p-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-variable-collection-primary/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center mb-8 border-[1px] border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  <img
                    className="w-12 h-12"
                    alt="Data driven insights"
                    src="/img/data-driven-insights-3.png"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
                  Data-Driven Insights & AI Analytics
                </h3>

                <p className="text-base lg:text-lg text-gray-300">
                  <span className="font-semibold text-white">
                    Turn data into decisions.
                  </span>
                  <br />
                  We help you extract insights using advanced analytics and
                  machine learning models, giving your team the power to act
                  with precision.
                </p>
              </div>
            </div>

            {/* AI Strategy & Roadmap */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute w-48 h-48 bottom-0 right-0 bg-blue-600 rounded-full blur-[150px]" />
              </div>

              <img
                className="absolute top-0 left-0 w-48 lg:w-64 h-auto opacity-20"
                alt="Vector"
                src="/img/vector-1-1.png"
              />

              <div className="relative z-10 p-10 lg:p-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-variable-collection-primary/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center mb-8 border-[1px] border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  <img
                    className="w-12 h-12"
                    alt="Ai strategy roadmap"
                    src="/img/ai-strategy-roadmap-2.png"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
                  AI Strategy & Roadmap
                </h3>

                <p className="text-base lg:text-lg text-gray-300">
                  <span className="font-semibold text-white">
                    Transform your business with AI.
                  </span>
                  <br />
                  We help you define a clear AI vision, align it with business
                  goals, and create a tailored roadmap to adopt AI across
                  operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-300 mb-3">
                About Us
              </h2>
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-variable-collection-primary to-blue-400 bg-clip-text text-transparent mb-10">
                FlowConAI
              </h3>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Empowering businesses through automation and intelligent agents
                for an AI-driven future.
              </p>

              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                We are a small, decentralized, multinational team that is very
                passionate about IT and AI. Bringing a deep background in
                professional Software Development, Project Management and
                Customer Experience, with a combined experience of 80+ years and
                dozens of projects
              </p>
            </div>

            <div className="relative">
              <img
                className="w-full h-auto rounded-2xl"
                alt="About us image"
                src="/img/about-us-image-2.png"
              />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          id="blogs"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        >
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Latest Blogs & News
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Welcome to the blog of our AI Consulting Agents — your go-to
              source for the latest in artificial intelligence, automation, and
              digital transformation.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Blog Card 1 */}
            <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <img
                className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Imagine prompt"
                src="/img/imagine-prompt-create-a-featured-image-for-a-blog-post-1.png"
              />
              <div className="p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  AI Use Cases in Business
                </h3>
                <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                  Real-world examples of how AI streamlines workflows, improves
                  customer experience, and drives growth.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4"
                      alt="User"
                      src="/img/user-2-2.png"
                    />
                    <span>Andre Machon</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4"
                      alt="Calender"
                      src="/img/calender-2-2.png"
                    />
                    <span>21 May, 2025</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Card 2 */}
            <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <img
                className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Artificial"
                src="/img/artificial-intelligence-03-scaled-1.png"
              />
              <div className="p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Automation Trends
                </h3>
                <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                  Learn how intelligent automation and AI agents are replacing
                  repetitive tasks and unlocking human potential.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4"
                      alt="User"
                      src="/img/user-2-2.png"
                    />
                    <span>Hafiz Khan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4"
                      alt="Calender"
                      src="/img/calender-2-2.png"
                    />
                    <span>21 May, 2025</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Card 3 */}
            <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <img
                className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Depositphotos"
                src="/img/depositphotos-649928030-stock-photo-chatbot-assistant-automated.png"
              />
              <div className="p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Behind the Build
                </h3>
                <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                  A peek into the tools, models, and frameworks our team uses to
                  create cutting-edge solutions.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4"
                      alt="User"
                      src="/img/user-2-2.png"
                    />
                    <span>Hafiz Khan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4"
                      alt="Calender"
                      src="/img/calender-2-2.png"
                    />
                    <span>21 May, 2025</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto relative">
            {/* Background blur */}
            <div className="absolute inset-0 bg-variable-collection-primary/10 rounded-full blur-[200px]"></div>

            <div className="relative">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-base lg:text-lg text-gray-400">
                  Answers to common questions about FlowConAI and its features.
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {[
                  {
                    question:
                      "1. What is AI consulting, and how can it help my business?",
                    answer:
                      "AI consulting involves helping organizations identify, design, and implement AI-driven solutions to improve operations, increase efficiency, and unlock new opportunities. Whether you want to automate workflows, integrate AI agents, or enhance customer experience, we guide you at every step.",
                  },
                  {
                    question: "2. What types of AI solutions do you offer?",
                    answer:
                      "We offer a wide range of tools, consisting of internal tools, custom development, To production ready external services. A deep insight into current AI capabilities and tooling allows us to find or develop the right tool for any business requirement.",
                  },
                  {
                    question: "3. Is AI consulting only for large companies?",
                    answer:
                      "Any company or individual can currently benefit a lot from more knowledge or concrete tools and workflows that utilize modern AI solutions. There is a huge shift happening in the workplace. A lot of skills are becoming redundant while others are becoming very important. Most individuals can already multiply their productivity or step into roles that previously required years of training. This goes double for entire organisations",
                  },
                  {
                    question: "4. How do you approach new projects?",
                    answer:
                      "We can connect and integrate AI with any software now that has an API. This is possible via the Model Context Protocol (MCP). MCP is ushering in a new Age of AI connectivity and utility. For instance by integrating with your documents storage, project management tools and relevant data sources, agentic AI applications are able to save hours of work for each person on a daily basis.",
                  },
                  {
                    question:
                      "5. Do I need technical expertise to work with you?",
                    answer:
                      "This depends on the applications of course. Generally there are a lot of quick wins available that can be integrated within a few days or less. However employees still need to be trained on how to use these tools effectively and guided on when to use them.\n\nCustom solution that require us to develop something need to be estimated after reviewing the requirements thoroughly.",
                  },
                  {
                    question:
                      "6. Can you integrate AI with our existing systems?",
                    answer:
                      "Data Privacy and Security is one of our main concerns. We are aware that many Businesses do not want to share their sensitive documents with big AI companies like OpenAI and are not allowed to share any GDPR regulated data with companies that operate in the US and are not complying with these regulations.\n\nAs such we offer a full range of options from on premise deployments of open source models to GDPR and EU AI law compliant solutions like offered by Mistral, to direct use US / Chinese AI solutions, as requested by our clients and required by law.",
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer">
                      <span className="text-base lg:text-lg font-medium text-gray-300 pr-4">
                        {faq.question}
                      </span>
                      <img
                        className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                        alt="Drop down icon"
                        src="/img/drop-down-icon-2-5.png"
                      />
                    </summary>
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <p className="text-base lg:text-lg text-gray-400 whitespace-pre-line leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="relative bg-gradient-to-t from-[#111526FF] via-transparent to-[#3f4d8c00] backdrop-blur-xl rounded-3xl overflow-hidden p-12 lg:p-20 border-[3px] border-[#F9FAFB] shadow-[0_0_10px_rgba(249,250,251,0.2)] brightness-110 contrast-110 saturate-150 drop-shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:brightness-125 hover:saturate-[1.75] transition-all duration-500">
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-8 leading-tight">
                Ready to Transform Your Business for the AI Age?
              </h2>
              <p className="text-base lg:text-lg xl:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Get in touch with our team of AI consultants to discuss how we
                can help you implement privacy-focused, efficient AI solutions
                tailored to your specific needs.
              </p>
              <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base lg:text-lg font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 hover:brightness-125 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Info */}
            <div>
              <img
                className="h-8 lg:h-9 w-auto mb-6"
                alt="Flowcon logo"
                src="/img/flowcon-logo-3.png"
              />
              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                Transforming businesses for the AI age with automation, agents,
                and strategic integration.
              </p>
              <p className="text-sm text-gray-500">
                FlowConAI 2025. All rights reserved
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-base text-gray-400 hover:text-variable-collection-primary transition-colors"
                >
                  Imprint
                </a>
                <a
                  href="#"
                  className="block text-base text-gray-400 hover:text-variable-collection-primary transition-colors"
                >
                  Features
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact US
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <img
                    className="w-5 h-5 mt-1"
                    alt="Location"
                    src="/img/location-1.png"
                  />
                  <p className="text-base text-gray-400">
                    Aachener Str. 392,
                    <br />
                    50933 Cologne,
                    <br />
                    Germany
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img className="w-5 h-5" alt="Email" src="/img/email-1.png" />
                  <a
                    href="mailto:info@flowconai.com"
                    className="text-base text-gray-400 hover:text-variable-collection-primary transition-colors underline"
                  >
                    info@flowconai.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};
