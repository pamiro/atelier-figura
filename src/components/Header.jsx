import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="bg-[#2a2826] border-b border-[#DDBE91] sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Text Logo */}
                    <span
                        className="text-2xl md:text-3xl font-bold tracking-[0.05em] text-[#DDBE91] uppercase cursor-pointer select-none"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        {t('header.logoAlt', 'Figura')}
                    </span>

                    {/* Desktop Navigation + Language Switcher */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8 items-center">
                            <li>
                                <button
                                    onClick={() => scrollToSection('overzicht')}
                                    className="text-stone-300 hover:text-accent font-medium transition-colors duration-200"
                                >
                                    {t('header.nav.overview', 'Overzicht')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('zomerweken')}
                                    className="text-stone-300 hover:text-accent font-medium transition-colors duration-200"
                                >
                                    {t('header.nav.summerWeeks', 'Zomerweken')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-stone-300 hover:text-accent font-medium transition-colors duration-200"
                                >
                                    {t('header.nav.contact', 'Contact')}
                                </button>
                            </li>
                        </ul>

                        <div className="pl-4 border-l border-stone-700">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile Controls (Language Switcher + Menu Button) */}
                    <div className="flex md:hidden items-center space-x-3">
                        <LanguageSwitcher />
                        <button
                            className="text-stone-300 hover:text-accent p-1 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <ul className="md:hidden mt-4 pb-4 space-y-2 border-t border-stone-800 pt-3">
                        <li>
                            <button
                                onClick={() => scrollToSection('overzicht')}
                                className="block w-full text-left py-2 text-stone-300 hover:text-accent font-medium"
                            >
                                {t('header.nav.overview', 'Overzicht')}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('zomerweken')}
                                className="block w-full text-left py-2 text-stone-300 hover:text-accent font-medium"
                            >
                                {t('header.nav.summerWeeks', 'Zomerweken')}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left py-2 text-stone-300 hover:text-accent font-medium"
                            >
                                {t('header.nav.contact', 'Contact')}
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
