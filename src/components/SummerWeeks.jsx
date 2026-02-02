import React from 'react';

const SummerWeeks = () => {
    return (
        <section id="zomerweken" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                    ZOMERWEKEN
                </h2>

                <p className="text-gray-700 mb-8">
                    Er worden bij Atelier Figura iedere zomer een tekenweek en een schilderweek georganiseerd.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tekenweek */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                            DE TEKENWEEK in 2026
                        </h3>
                        <p className="text-gray-700 mb-4">
                            De tekenweek vindt plaats van maandag 10 augustus tot/met vrijdag 14 augustus 2026.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Tijdens de tekenweek wordt er gewerkt naar een model, in korte standen.</li>
                            <li>• Maximaal 10 à 12 deelnemers.</li>
                            <li>• Deelname bij voorkeur voor minimaal 3 dagen.</li>
                            <li>• Kosten: € 130 voor de hele week, € 35 voor een dag.</li>
                            <li>• Tijd: 10 – 14.30 uur (ligt nog niet helemaal vast).</li>
                            <li>• Regelmatig zal er een korte onderbreking zijn voor koffie of thee.</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600">

                            Meer informatie en aanmelden bij Paul Kurstjens: paulkurst@gmail.com
                        </p>
                    </div>

                    {/* Schilderweek */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                            DE SCHILDERWEEK in 2026
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Nadere informatie volgt.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Tijdens de schilderweek wordt er gewerkt aan een model; één stand.</li>
                            <li>• Maximaal 10 deelnemers.</li>
                            <li>• Deelname bij voorkeur voor minimaal 3 dagen.</li>
                            <li>• Kosten: € 130 voor de hele week, € 35 voor een dag.</li>
                            <li>• Tijd: 10 – 14.30 uur (dat voor nu, kan nog veranderen).</li>
                            <li>• Lunchpauze: 12 – 12.30 uur</li>
                            <li>• Er zijn korte onderbrekingen voor koffie of thee.</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600">
                            Aanmelden via: alexonstein@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummerWeeks;
