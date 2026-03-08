import React from 'react';
import ScheduleDay from './ScheduleDay';

const Overview = () => {
    const scheduleData = [
        {
            title: 'Dinsdagmiddag: Het portret',
            time: '13:30 — 16:30',
            description: 'Model portret\nOp dinsdagmiddag wordt er geschilderd of getekend naar portret.',
            contact: 'Voor aanmelden of informatie: alexonstein@gmail.com'
        },
        {
            title: 'Dinsdagavond: Modeltekenen',
            time: '19:30 — 22:30',
            description: 'Naaktmodel, korte en lange standen\nSchilderen en tekenen. Zes korte standen (10 min) en dan een lange stand van ongeveer 5 kwartier.',
            contact: 'Inlichtingen: ghitavanbergen@gmail.com'
        },
        {
            title: 'Woensdagmiddag',
            time: '13:30 — 16:00',
            description: 'Besloten modeltekengroep (geen inloop).\nOp woensdagmiddag wordt het atelier gebruikt door een modeltekengroep (\'Transarte\').',
            contact: 'meer informatie: Claudia Hoejenbos 030-2322348 of steenroos@gmail.com'
        },
        {
            title: 'Woensdagavond: Het portret',
            time: '19:30 — 22:30',
            description: 'Op woensdagavond wordt er geschilderd of getekend naar portret.',
            contact: 'Voor informatie: Ans Hobbelink 0629317145 of ahobbelink@yahoo.co.uk | Ina 0683521660 of glimlach1@gmail.com'
        },
        {
            title: 'Donderdagavond',
            time: '20.30 - 22.30',
            description: 'Naaktmodel, korte standen.\nOp donderdagavond tekent en schildert de Stokverfgroep. Enkele korte standen van 3 en daarna meerdere van 10 minuten',
            contact: 'Aanmelden of informatie: Yink Goosen (06-40756550)'
        },
        {
            title: 'Vrijdag',
            time: '13:30 — 16:30',
            description: 'Naaktmodel, korte standen\nSchilderen en tekenen. Korte standen van 3 tot 10 minuten.',
            contact: 'Inlichtingen: Anabel of Geoff (geoffhar@yahoo.com)'
        },
        {
            title: 'Zondag',
            time: '10:00 — 17:00',
            description: 'De zogenoemde schilder-, teken- en boetseerzondagen:\n\nElke 1ste of 4de zondag van de maand boetseren. Bel: Yink Goosen (06-40756550)\n\nElke 2de zondag van de maand tekenzondag (korte standen). Bel of mail: Paul Kurstjens 030-2721257 – paulkurst@gmail.com\n\nElke 3de zondag van de maand schilderzondag (één lange stand). Voor informatie: alexonstein@gmail.com\n\nPrijs € 34,00 voor een hele dag, € 18,00 voor een halve dag. Svp van te voren aanmelden.\n\nOp de andere zondagen is het atelier beschikbaar voor andere activiteiten, mits passend binnen het kunstzinnige kader van ons atelier (schilderen, tekenen).',
            contact: ''
        }
    ];

    return (
        <section id="overzicht" className="py-16 px-4 bg-[#33312f]">
            <div className="container mx-auto">
                {/* Inloop Atelier Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-8">
                        Inloop Atelier
                    </h2>
                    <div className="prose max-w-none text-stone-300 space-y-4">
                        <p>
                            Tekenen, schilderen of boetseren naar een naakt of portret. Bij Atelier Figura Utrecht aan de Nobeldwarsstraat kun je iedere week tekenen en schilderen naar model. Hieronder zie je wanneer we wat doen. Het is niet nodig om je van tevoren aan te melden, maar bij een enkele activiteit op zondag stellen we dat wel op prijs. Ezels, tekenplanken en -tafels zijn beschikbaar. Het model regelen wij. Teken- en schilderspullen, papier of schildersdoek neem je zelf mee.
                        </p>
                        <p>
                            Wie model kan tekenen, kan alles tekenen, wordt wel beweerd - daar gaan we voor het gemak maar vanuit. Werken naar model is al eeuwenlang de basisvaardigheid in de kunsten. Tijd nemen om te kijken, écht te kijken. Dat kan in ons atelier. Bij Atelier Figura Utrecht staat het model centraal. We bieden een gevarieerd aanbod, van portrettekenen en -schilderen tot modeltekenen, -schilderen en boetseren, van korte standen tot een lange stand. Kom ook eens langs in ons fraaie atelier en maak kennis met bevlogen deelnemers van alle niveaus.
                        </p>
                        <p>
                            Meedoen kost 18 euro per keer (contant en ter plekke te voldoen). Je kunt ook een 5-rittenkaart kopen voor 75 euro die recht geeft op 5 keer tekenen of schilderen naar keuze. Let op: de rittenkaart is een half jaar geldig.
                        </p>
                    </div>
                </div>

                {/* Schedule Overview */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-8">
                        Overzicht
                    </h2>
                    <p className="text-stone-300 mb-8">
                        Op maandagochtend is er een besloten groep ("Kleurecht").
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {scheduleData.map((day, index) => (
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
