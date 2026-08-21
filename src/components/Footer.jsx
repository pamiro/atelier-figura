import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#1f1d1b] text-white pt-12 pb-8 px-4 border-t border-stone-800">
            <div className="container mx-auto max-w-5xl">
                {/* Historic / Atmospheric studio photo */}
                <div className="mb-8 max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl border border-stone-800/80">
                    <img
                        src="/img/history-stok.jpg"
                        alt={t('footer.imageAlt', 'Sfeerimpressie Atelier Figura')}
                        className="w-full h-auto object-cover filter grayscale contrast-105 hover:scale-[1.01] transition-transform duration-500"
                        loading="lazy"
                    />
                </div>

                {/* Footer Content */}
                <div className="text-center space-y-2">
                    <p className="text-xl font-bold tracking-wide text-primary">
                        {t('footer.title', 'Atelier Figura')}
                    </p>
                    <p className="text-stone-400 text-sm">
                        {t('footer.subtitle', 'Schilders en Tekenaars')}
                    </p>
                    <p className="text-xs text-stone-400 pt-1">
                        <span>{t('footer.stichting', 'Stichting Atelier Figura')}</span>
                        <span className="mx-2 text-stone-600">•</span>
                        <a
                            href="https://www.kvk.nl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-400 hover:text-accent underline transition-colors duration-200"
                            title="Kamer van Koophandel"
                        >
                            {t('footer.kvkLabel', 'KvK nr.')} {t('footer.kvkNumber', '42139825')}
                        </a>
                    </p>
                    <p className="text-xs text-stone-500 pt-3">
                        {t('footer.copyright', '© Copyright. Alle rechten voorbehouden.')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
