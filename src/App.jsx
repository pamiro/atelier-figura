import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import SummerWeeks from './components/SummerWeeks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Overview />
                <SummerWeeks />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
