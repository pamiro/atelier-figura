import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import SummerWeeks from './components/SummerWeeks';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <Overview />
                    <SummerWeeks />
                    <Gallery />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
