import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import ScheduleDay from './ScheduleDay';

const Overview = () => {
    const { t } = useTranslation();

    const inloopParagraphs = t('overview.inloopParagraphs', []);
    const scheduleData = t('overview.schedule', []);

    return (
        <section id="overzicht" className="py-16 px-4 bg-[#33312f]">
            <div className="container mx-auto">
                {/* Inloop Atelier Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-8">
                        {t('overview.inloopTitle', 'Inloop Atelier')}
                    </h2>
                    <div className="prose max-w-none text-stone-300 space-y-4">
                        {Array.isArray(inloopParagraphs) && inloopParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Schedule Overview */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-8">
                        {t('overview.scheduleTitle', 'Overzicht')}
                    </h2>
                    <p className="text-stone-300 mb-8">
                        {t('overview.mondayNotice', 'Op maandagochtend is er een besloten groep ("Kleurecht").')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.isArray(scheduleData) && scheduleData.map((day, index) => (
                            <ScheduleDay
                                key={index}
                                title={day.title}
                                time={day.time}
                                description={day.description}
                                contact={day.contact}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
