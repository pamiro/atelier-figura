import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-3xl font-serif font-bold text-primary cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Figura
                    </h1>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <button
                                onClick={() => scrollToSection('overzicht')}
                                className="text-gray-700 hover:text-accent font-medium transition-colors duration-200"
                            >
                                Overzicht
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('zomerweken')}
                                className="text-gray-700 hover:text-accent font-medium transition-colors duration-200"
                            >
                                Zomerweken
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-700 hover:text-accent font-medium transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
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

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <ul className="md:hidden mt-4 space-y-2">
                        <li>
                            <button
                                onClick={() => scrollToSection('overzicht')}
                                className="block w-full text-left py-2 text-gray-700 hover:text-accent font-medium"
                            >
                                Overzicht
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('zomerweken')}
                                className="block w-full text-left py-2 text-gray-700 hover:text-accent font-medium"
                            >
                                Zomerweken
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left py-2 text-gray-700 hover:text-accent font-medium"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
