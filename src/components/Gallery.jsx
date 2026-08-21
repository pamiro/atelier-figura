import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Gallery = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        {
            key: 'crouchedBlue',
            src: '/img/gallery/g1_crouched_blue.jpg',
            defaultCaption: 'Modelstudie • Houtskool & krijt'
        },
        {
            key: 'recliningNude',
            src: '/img/gallery/g2_painting_reclining_nude.jpg',
            defaultCaption: 'Liggend naakt • Olieverf'
        },
        {
            key: 'portraitMan',
            src: '/img/gallery/g2_portrait_man_cap.jpg',
            defaultCaption: 'Portretstudie • Olieverf'
        },
        {
            key: 'standingSketch',
            src: '/img/gallery/g1_standing_sketch.jpg',
            defaultCaption: 'Staande figuren • Snelle schets'
        },
        {
            key: 'claySculptures',
            src: '/img/gallery/g2_clay_sculptures.jpg',
            defaultCaption: 'Boetseerzondag • Kleimodellen'
        },
        {
            key: 'seatedRedChalk',
            src: '/img/gallery/g1_seated_red_chalk.jpg',
            defaultCaption: 'Modelstudie rug • Rood krijt'
        },
        {
            key: 'portraitWoman',
            src: '/img/gallery/g2_portrait_woman_jacket.jpg',
            defaultCaption: 'Portret • Olieverf op doek'
        },
        {
            key: 'lineContour',
            src: '/img/gallery/g1_line_contour.jpg',
            defaultCaption: 'Lijnstudie • Oost-Indische inkt'
        },
        {
            key: 'portraitSketch',
            src: '/img/gallery/g2_portrait_sketch_woman.jpg',
            defaultCaption: 'Portretschets • Grafiet'
        },
        {
            key: 'recliningLine',
            src: '/img/gallery/g1_reclining_line.jpg',
            defaultCaption: 'Korte stand • Inkt & aquarel'
        },
        {
            key: 'standingInkWash',
            src: '/img/gallery/g2_standing_ink_wash.jpg',
            defaultCaption: 'Figuur in beweging • Inktwassing'
        },
        {
            key: 'recliningYellow',
            src: '/img/gallery/g2_reclining_yellow.jpg',
            defaultCaption: 'Model in aquarel • Kleurstudie'
        }
    ];

    return (
        <section id="galerij" className="py-16 px-4 bg-[#2a2826]">
            <div className="container mx-auto">
                <div className="mb-10 text-left">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-4">
                        {t('gallery.title', 'Galerij')}
                    </h2>
                    <p className="text-stone-300 max-w-3xl">
                        {t('gallery.subtitle', 'Een impressie van het werk gemaakt tijdens de wekelijkse modelteken-, schilder- en boetseersessies bij Atelier Figura.')}
                    </p>
                </div>

                {/* Mosaic Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryItems.map((item, index) => {
                        const caption = t(`gallery.items.${item.key}`, item.defaultCaption);
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedImage({ ...item, caption })}
                                className="break-inside-avoid group relative overflow-hidden rounded-lg bg-[#33312f] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-stone-800 hover:border-accent/60"
                            >
                                <img
                                    src={item.src}
                                    alt={caption}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white text-sm font-medium drop-shadow-md">
                                        {caption}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-accent text-3xl font-bold p-2 transition-colors duration-200 focus:outline-none"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.caption}
                            className="max-h-[80vh] w-auto object-contain rounded shadow-2xl border border-stone-700"
                        />
                        <p className="mt-4 text-stone-300 text-center text-sm md:text-base font-medium">
                            {t(`gallery.items.${selectedImage.key}`, selectedImage.caption)}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
