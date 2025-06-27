import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { blogData } from "../data/blogData";

export const BlogDetail = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blogContent, setBlogContent] = useState("");
  const { blogId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const blog = blogData.find(b => b.id === blogId);

  useEffect(() => {
    if (blog) {
      // Load the markdown content based on current language
      const contentFile = blog.contentFile[i18n.language] || blog.contentFile.en;
      fetch(`/docs/Blogs-docs/${contentFile}`)
        .then(response => response.text())
        .then(content => {
          // Simple markdown to HTML conversion
          const html = convertMarkdownToHtml(content);
          setBlogContent(html);
        })
        .catch(error => {
          console.error("Error loading blog content:", error);
        });
    }
  }, [blog, i18n.language]);

  const convertMarkdownToHtml = (markdown) => {
    let html = markdown;

    // Convert headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold text-white mb-4 mt-8">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-semibold text-white mb-6 mt-10">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mb-8">$1</h1>');

    // Convert bold and italic
    html = html.replace(/\*\*\*(.*)\*\*\*/gim, '<strong class="font-bold text-white"><em>$1</em></strong>');
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong class="font-bold text-white">$1</strong>');
    html = html.replace(/\*(.*)\*/gim, '<em class="italic">$1</em>');

    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-variable-collection-primary hover:text-blue-400 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');

    // Convert horizontal rules
    html = html.replace(/^---$/gim, '<hr class="border-white/20 my-8">');

    // Convert paragraphs
    html = html.split('\n\n').map(paragraph => {
      if (paragraph.trim() && 
          !paragraph.startsWith('<h') && 
          !paragraph.startsWith('<hr')) {
        return `<p class="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">${paragraph}</p>`;
      }
      return paragraph;
    }).join('\n');

    return html;
  };

  if (!blog) {
    return (
      <div className="bg-variable-collection-dark min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-white mb-4">Blog not found</h1>
          <Link to="/blogs" className="text-variable-collection-primary hover:text-blue-400 underline">
            {t('blog.backToBlogs')}
          </Link>
        </div>
      </div>
    );
  }

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
        {/* Blog Detail Section */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Back Button */}
          <Link
            to="/blogs"
            className="inline-flex items-center text-variable-collection-primary hover:text-blue-400 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('blog.backToBlogs')}
          </Link>

          {/* Blog Header */}
          <header className="mb-12">
            <div className="bg-gradient-to-r from-variable-collection-primary/20 to-blue-600/20 backdrop-blur-md text-white text-sm lg:text-base mb-6 border border-white/10 inline-block px-6 py-2 rounded-full">
              {blog.category[i18n.language] || blog.category.en}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title[i18n.language] || blog.title.en}
            </h1>

            <div className="flex items-center space-x-6 text-base text-gray-400">
              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5"
                  alt="User"
                  src="/img/user-2-2.png"
                />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5"
                  alt="Calender"
                  src="/img/calender-2-2.png"
                />
                <span>{blog.date}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              className="w-full h-auto max-h-[500px] object-cover"
              alt={blog.title}
              src={blog.image}
            />
          </div>

          {/* Blog Content */}
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />

          {/* Navigation to other blogs */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-8">{t('blog.moreArticles')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData
                .filter(b => b.id !== blogId)
                .slice(0, 3)
                .map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blogs/${relatedBlog.id}`}
                    className="block"
                  >
                    <article className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group">
                      <img
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        alt={relatedBlog.title}
                        src={relatedBlog.image}
                      />
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {relatedBlog.title[i18n.language] || relatedBlog.title.en}
                        </h4>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {relatedBlog.excerpt[i18n.language] || relatedBlog.excerpt.en}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </article>
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