import React from 'react';

const Hero = () => {
    return (
        <section
            className="relative py-40 bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/img/hero.png)' }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                    Figura
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">
                    Atelier Figura: Inloop Atelier in Utrecht
                </p>
            </div>
        </section>
    );
};

export default Hero;
