import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

export const Desktop = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
                  {t('nav.service')}
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  {t('nav.features')}
                </a>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  {t('nav.blogs')}
                </Link>
              </div>

              <div className="flex items-center space-x-6">
                <LanguageSwitcher />
                <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base xl:text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 hover:brightness-125 transition-all duration-300">
                  {t('nav.contactUs')}
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
                  {t('nav.service')}
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  {t('nav.features')}
                </a>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  {t('nav.blogs')}
                </Link>
                <div className="py-2">
                  <LanguageSwitcher />
                </div>
                <button className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 hover:brightness-125 transition-all duration-300">
                  {t('nav.contactUs')}
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
              {t('hero.title')}
              <br className="hidden sm:block" />
              <span className="text-white">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            {/* Features Tags */}
            <div className="mt-10 lg:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex items-center space-x-3">
                <img className="w-5 h-5" alt="Gdpr" src="/img/gdpr-1.png" />
                <span className="text-gray-300 text-base lg:text-lg">
                  {t('hero.tags.gdpr')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="w-6 h-5"
                  alt="Solution"
                  src="/img/solution-1.png"
                />
                <span className="text-gray-300 text-base lg:text-lg">
                  {t('hero.tags.onPremise')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <img className="w-4 h-5" alt="Data" src="/img/data-1.png" />
                <span className="text-gray-300 text-base lg:text-lg">
                  {t('hero.tags.dataSovereignty')}
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-10 lg:mt-12 max-w-2xl mx-auto">
              <div className="flex items-center bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 p-1.5">
                <input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  className="flex-1 bg-transparent px-5 py-4 text-white placeholder-gray-400 outline-none text-base focus:border-variable-collection-primary"
                />
                <button className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] flex items-center justify-center flex-shrink-0 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-110 hover:brightness-125 transition-all duration-300">
                  <img className="w-7 h-7" alt="Send" src="/img/send-3.png" />
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 lg:mt-10 px-10 py-4 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base lg:text-lg font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 hover:brightness-125 transition-all duration-300">
              {t('hero.cta')}
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
              {t('expertise.title')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              {t('expertise.subtitle')}
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
                {t('expertise.services.aiStrategy.title')}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('expertise.services.aiStrategy.description')}
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
                {t('expertise.services.employeeTraining.title')}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('expertise.services.employeeTraining.description')}
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
                {t('expertise.services.customAgents.title')}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('expertise.services.customAgents.description')}
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
                {t('expertise.services.workflowAutomation.title')}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('expertise.services.workflowAutomation.description')}
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
                {t('expertise.services.processOptimization.title')}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('expertise.services.processOptimization.description')}
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
                {t('expertise.services.gdprCompliant.title')}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('expertise.services.gdprCompliant.description')}
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
                    {t('features.automationWorkflows.badge')}
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8">
                    {t('features.automationWorkflows.title')}
                  </h3>

                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    {t('features.automationWorkflows.description')}
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
                  {t('features.dataInsights.title')}
                </h3>

                <p className="text-base lg:text-lg text-gray-300">
                  <span className="font-semibold text-white">
                    {t('features.dataInsights.subtitle')}
                  </span>
                  <br />
                  {t('features.dataInsights.description')}
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
                  {t('features.aiStrategy.title')}
                </h3>

                <p className="text-base lg:text-lg text-gray-300">
                  <span className="font-semibold text-white">
                    {t('features.aiStrategy.subtitle')}
                  </span>
                  <br />
                  {t('features.aiStrategy.description')}
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
                {t('about.sectionTitle')}
              </h2>
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-variable-collection-primary to-blue-400 bg-clip-text text-transparent mb-10">
                {t('about.companyName')}
              </h3>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                {t('about.tagline')}
              </p>

              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                {t('about.description')}
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
              {t('blog.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              {t('blog.sectionSubtitle')}
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Blog Card 1 */}
            <Link to="/blogs/ai-agents-transforming-world" className="block">
              <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group h-full">
                <img
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Imagine prompt"
                  src="/img/imagine-prompt-create-a-featured-image-for-a-blog-post-1.png"
                />
                <div className="p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    {i18n.language === 'de' 
                      ? "Die stille Revolution: Wie digitale Arbeiter unsere Welt transformieren"
                      : "The Silent Revolution: How Digital Workers Are Transforming Our World"}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                    {i18n.language === 'de'
                      ? "Eine Analyse von KI-Agenten, die bereits heute Millionen von Arbeitsplätzen transformieren – und warum wir erst am Anfang eines beispiellosen Umbruchs stehen"
                      : "An analysis of AI agents that are already transforming millions of jobs today – and why we're only at the beginning of an unprecedented upheaval"}
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
                      <span>June 15, 2025</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Card 2 */}
            <Link to="/blogs/knowledge-half-life" className="block">
              <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group h-full">
                <img
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Artificial"
                  src="/img/artificial-intelligence-03-scaled-1.png"
                />
                <div className="p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    {i18n.language === 'de' 
                      ? "Wenn Wissen seine Halbwertszeit verliert: Wie Sie im KI-Zeitalter relevant bleiben"
                      : "When Knowledge Loses Its Shelf Life: How to Stay Relevant in the AI Era"}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                    {i18n.language === 'de'
                      ? "Warum die Halbwertszeit von Fähigkeiten schrumpft – und wie Sie diese Herausforderung zu Ihrem Vorteil nutzen können"
                      : "Why the half-life of skills is shrinking – and how you can turn this challenge to your advantage"}
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
                      <span>June 10, 2025</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Card 3 */}
            <Link to="/blogs/robots-workplace" className="block">
              <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group h-full">
                <img
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Depositphotos"
                  src="/img/depositphotos-649928030-stock-photo-chatbot-assistant-automated.png"
                />
                <div className="p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    {i18n.language === 'de' 
                      ? "Wenn Roboter zu Kollegen werden: Die Zukunft der Mensch-Maschine-Zusammenarbeit"
                      : "When Robots Become Colleagues: The Future of Human-Machine Collaboration"}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                    {i18n.language === 'de'
                      ? "Wie KI und Robotik unsere Arbeitsplätze umgestalten – und warum die Zukunft denen gehört, die mit Maschinen arbeiten, nicht gegen sie"
                      : "How AI and robotics are reshaping our workplaces – and why the future belongs to those who work with machines, not against them"}
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
                      <span>June 5, 2025</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* View All Blogs Button */}
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base lg:text-lg font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 hover:brightness-125 transition-all duration-300"
            >
              {t('blog.viewAllBlogs')}
            </Link>
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
                  {t('faq.title')}
                </h2>
                <p className="text-base lg:text-lg text-gray-400">
                  {t('faq.subtitle')}
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {['q1', 'q2', 'q3', 'q4', 'q5', 'q6'].map((qKey, index) => (
                  <details
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer">
                      <span className="text-base lg:text-lg font-medium text-gray-300 pr-4">
                        {t(`faq.questions.${qKey}.question`)}
                      </span>
                      <img
                        className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                        alt="Drop down icon"
                        src="/img/drop-down-icon-2-5.png"
                      />
                    </summary>
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <p className="text-base lg:text-lg text-gray-400 whitespace-pre-line leading-relaxed">
                        {t(`faq.questions.${qKey}.answer`)}
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
                {t('cta.title')}
              </h2>
              <p className="text-base lg:text-lg xl:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#07214C] text-white text-base lg:text-lg font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 hover:brightness-125 transition-all duration-300">
                {t('cta.button')}
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
                {t('footer.companyDescription')}
              </p>
              <p className="text-sm text-gray-500">
                {t('footer.copyright')}
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">{t('footer.company')}</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-base text-gray-400 hover:text-variable-collection-primary transition-colors"
                >
                  {t('footer.imprint')}
                </a>
                <a
                  href="#"
                  className="block text-base text-gray-400 hover:text-variable-collection-primary transition-colors"
                >
                  {t('footer.features')}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                {t('footer.contactTitle')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <img
                    className="w-5 h-5 mt-1"
                    alt="Location"
                    src="/img/location-1.png"
                  />
                  <p className="text-base text-gray-400">
                    {t('footer.address.street')}
                    <br />
                    {t('footer.address.postalCode')}
                    <br />
                    {t('footer.address.country')}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img className="w-5 h-5" alt="Email" src="/img/email-1.png" />
                  <a
                    href="mailto:info@flowconai.com"
                    className="text-base text-gray-400 hover:text-variable-collection-primary transition-colors underline"
                  >
                    {t('footer.email')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
