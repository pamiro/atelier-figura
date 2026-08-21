import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import nl from './translations/nl.json';
import en from './translations/en.json';

const translations = {
    nl,
    en
};

const LanguageContext = createContext();

const STORAGE_KEY = 'atelier_figura_lang';

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && (saved === 'nl' || saved === 'en')) {
                return saved;
            }
        } catch (e) {
            console.warn('Could not read language from localStorage:', e);
        }
        return 'nl';
    });

    const setLanguage = useCallback((newLang) => {
        if (newLang !== 'nl' && newLang !== 'en') return;
        setLanguageState(newLang);
        try {
            localStorage.setItem(STORAGE_KEY, newLang);
        } catch (e) {
            console.warn('Could not save language to localStorage:', e);
        }
    }, []);

    // Update document HTML attributes and metadata on language change
    useEffect(() => {
        document.documentElement.lang = language;

        const currentTrans = translations[language] || translations.nl;
        if (currentTrans.meta) {
            if (currentTrans.meta.title) {
                document.title = currentTrans.meta.title;
            }
            if (currentTrans.meta.description) {
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                    metaDesc.setAttribute('content', currentTrans.meta.description);
                }
                const ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) {
                    ogDesc.setAttribute('content', currentTrans.meta.description);
                }
            }
        }
    }, [language]);

    /**
     * Translation helper:
     * e.g., t('header.nav.overview') or t('overview.inloopParagraphs')
     */
    const t = useCallback((path, fallback = '') => {
        if (!path) return fallback;

        const keys = path.split('.');
        const currentData = translations[language] || translations.nl;
        const fallbackData = translations.nl;

        let result = currentData;
        for (const key of keys) {
            if (result && Object.prototype.hasOwnProperty.call(result, key)) {
                result = result[key];
            } else {
                result = undefined;
                break;
            }
        }

        if (result !== undefined) {
            return result;
        }

        // Fallback to Dutch
        let fallbackResult = fallbackData;
        for (const key of keys) {
            if (fallbackResult && Object.prototype.hasOwnProperty.call(fallbackResult, key)) {
                fallbackResult = fallbackResult[key];
            } else {
                fallbackResult = undefined;
                break;
            }
        }

        return fallbackResult !== undefined ? fallbackResult : fallback;
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t,
                translations: translations[language] || translations.nl
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useTranslation = () => {
    return useLanguage();
};
