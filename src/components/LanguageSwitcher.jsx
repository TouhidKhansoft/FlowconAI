import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'EN', flag: '/img/flag-uk.svg' },
    { code: 'de', name: 'DE', flag: '/img/flag-germany.svg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
      >
        <img 
          src={currentLanguage.flag} 
          alt={currentLanguage.name} 
          className="w-5 h-3"
        />
        <span className="text-gray-300 text-base font-medium">
          {currentLanguage.name}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-variable-collection-dark-light border border-white/10 rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors ${
                lang.code === i18n.language ? 'bg-white/5' : ''
              }`}
            >
              <img 
                src={lang.flag} 
                alt={lang.name} 
                className="w-5 h-3"
              />
              <span className={`text-base ${
                lang.code === i18n.language ? 'text-white' : 'text-gray-300'
              }`}>
                {lang.name === 'EN' ? 'English' : 'Deutsch'}
              </span>
              {lang.code === i18n.language && (
                <svg className="w-4 h-4 text-variable-collection-primary ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};