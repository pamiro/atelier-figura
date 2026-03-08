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
                <img
                    src="/img/FiguraInverted.svg"
                    alt="Figura Logo"
                    className="mx-auto w-[80%] max-w-2xl lg:max-w-4xl mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
                {/* <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">
                    Atelier Figura: Inloop Atelier in Utrecht
                </p> */}
            </div>
        </section>
    );
};

export default Hero;
