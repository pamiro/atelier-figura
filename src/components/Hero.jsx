import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative py-40 bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/img/hero.png)' }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10">
                <img
                    src="/img/FiguraInverted.svg"
                    alt={t('hero.logoAlt', 'Figura Logo')}
                    className="mx-auto w-[80%] max-w-2xl lg:max-w-4xl mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
            </div>
        </section>
    );
};

export default Hero;
