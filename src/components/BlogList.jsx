import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { blogData } from "../data/blogData";

export const BlogList = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-variable-collection-dark min-h-screen w-full overflow-x-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-variable-collection-dark via-variable-collection-dark-light to-variable-collection-dark overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[1000px] h-[1000px] bg-gradient-to-br from-variable-collection-primary/50 via-teal-500/25 to-blue-600/50 rounded-full blur-[100px] brightness-[0.5] contrast-100 saturate-[1] mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 lg:h-9 w-auto"
                alt="Flowcon logo"
                src="/img/flowcon-logo-3.png"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/#service"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  {t('nav.service')}
                </Link>
                <Link
                  to="/#about"
                  className="text-gray-300 hover:text-white transition-colors text-base xl:text-lg font-normal"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to="/blogs"
                  className="text-white transition-colors text-base xl:text-lg font-normal"
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
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/#service"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  {t('nav.service')}
                </Link>
                <Link
                  to="/#about"
                  className="text-gray-300 hover:text-white transition-colors text-base py-2"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to="/blogs"
                  className="text-white transition-colors text-base py-2"
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
        {/* Blog List Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              {t('blog.sectionTitle')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              {t('blog.sectionSubtitle')}
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogData.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="block"
              >
                <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group h-full">
                  <img
                    className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={blog.title}
                    src={blog.image}
                  />
                  <div className="p-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                      {blog.title[i18n.language] || blog.title.en}
                    </h3>
                    <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                      {blog.excerpt[i18n.language] || blog.excerpt.en}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-4 h-4"
                          alt="User"
                          src="/img/user-2-2.png"
                        />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-4 h-4"
                          alt="Calender"
                          src="/img/calender-2-2.png"
                        />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <Link to="/">
              <img
                className="h-8 lg:h-9 w-auto mb-6"
                alt="Flowcon logo"
                src="/img/flowcon-logo-3.png"
              />
            </Link>
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
              <Link
                to="/"
                className="block text-base text-gray-400 hover:text-variable-collection-primary transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/blogs"
                className="block text-base text-gray-400 hover:text-variable-collection-primary transition-colors"
              >
                {t('nav.blogs')}
              </Link>
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
    </div>
  );
};