import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const SummerWeeks = () => {
    const { t } = useTranslation();

    const drawingItems = t('summerWeeks.drawingWeek.items', []);
    const paintingItems = t('summerWeeks.paintingWeek.items', []);

    return (
        <section id="zomerweken" className="py-16 px-4 bg-[#33312f]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-8">
                    {t('summerWeeks.title', 'ZOMERWEKEN')}
                </h2>

                <p className="text-stone-300 mb-8">
                    {t('summerWeeks.intro', 'Er worden bij Atelier Figura iedere zomer een tekenweek en een schilderweek georganiseerd.')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tekenweek / Drawing Week */}
                    <div className="bg-[#33312f] rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-sans font-bold text-primary mb-4">
                            {t('summerWeeks.drawingWeek.title', 'DE TEKENWEEK in 2026')}
                        </h3>
                        <p className="text-stone-300 mb-4">
                            {t('summerWeeks.drawingWeek.subtitle', 'De tekenweek vindt plaats van maandag 10 augustus tot/met vrijdag 14 augustus 2026.')}
                        </p>
                        <ul className="space-y-2 text-stone-300">
                            {Array.isArray(drawingItems) && drawingItems.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-stone-400">
                            {t('summerWeeks.drawingWeek.contact', 'Meer informatie en aanmelden bij Paul Kurstjens: paulkurst@gmail.com')}
                        </p>
                    </div>

                    {/* Schilderweek / Painting Week */}
                    <div className="bg-[#33312f] rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-sans font-bold text-primary mb-4">
                            {t('summerWeeks.paintingWeek.title', 'DE SCHILDERWEEK in 2026')}
                        </h3>
                        <p className="text-stone-300 mb-4">
                            {t('summerWeeks.paintingWeek.subtitle', 'De schilderweek vindt plaats van maandag 17 augustus tot/met vrijdag 21 augustus 2026. De week wordt begeleid door Marga Tupang.')}
                        </p>
                        <ul className="space-y-2 text-stone-300">
                            {Array.isArray(paintingItems) && paintingItems.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-stone-400">
                            {t('summerWeeks.paintingWeek.contact', 'Aanmelden via: alexonstein@gmail.com')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummerWeeks;
