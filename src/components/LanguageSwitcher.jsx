import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const LanguageSwitcher = ({ className = '' }) => {
    const { language, setLanguage, t } = useTranslation();

    return (
        <div
            className={`inline-flex items-center rounded-full bg-[#1f1d1b] p-1 border border-stone-700/60 shadow-inner ${className}`}
            role="group"
            aria-label="Language selection"
        >
            <button
                type="button"
                onClick={() => setLanguage('nl')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    language === 'nl'
                        ? 'bg-[#DDBE91] text-[#2a2826] shadow-sm'
                        : 'text-stone-400 hover:text-stone-200'
                }`}
                aria-pressed={language === 'nl'}
                aria-label={t('header.language.switchToNl', 'Wissel naar Nederlands')}
            >
                {t('header.language.nl', 'NL')}
            </button>
            <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    language === 'en'
                        ? 'bg-[#DDBE91] text-[#2a2826] shadow-sm'
                        : 'text-stone-400 hover:text-stone-200'
                }`}
                aria-pressed={language === 'en'}
                aria-label={t('header.language.switchToEn', 'Switch to English')}
            >
                {t('header.language.en', 'EN')}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
