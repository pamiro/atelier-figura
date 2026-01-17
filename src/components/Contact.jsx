import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '46fc6c06-4ab0-4f24-8aa2-770a2ceb90e2', // Replace with actual key from web3forms.com
                    to_email: 'pavel@atelier-figura.nl',
                    from_name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'Nieuw bericht van Atelier Figura website',
                    message: formData.message
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                    Contact
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Address & Map */}
                    <div>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Atelier Figura
                            </h3>
                            <p className="text-lg text-gray-700 mb-2">
                                Nobeldwarsstraat 9, Utrecht
                            </p>
                            <p className="text-gray-600">
                                <a href="mailto:pavel@atelier-figura.nl" className="text-accent hover:underline">
                                    pavel@atelier-figura.nl
                                </a>
                            </p>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.9394837729284!2d5.1074!3d52.0907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4339c8b7e7%3A0x0!2sNobeldwarsstraat%209%2C%203512%20EM%20Utrecht!5e0!3m2!1sen!2snl!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Atelier Figura Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">
                                Stuur ons een bericht
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Naam *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                                        placeholder="Uw naam"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                                        placeholder="uw@email.nl"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Onderwerp
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                                        placeholder="Aanmelding / Vraag / etc."
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Bericht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition resize-none"
                                        placeholder="Uw bericht..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-white py-3 px-6 rounded-md font-semibold hover:bg-red-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
                                </button>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                                        Bedankt! Uw bericht is verzonden.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                        Er is iets misgegaan. Probeer het later opnieuw of stuur een email naar pavel@atelier-figura.nl
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
