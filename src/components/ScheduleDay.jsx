import React from 'react';

const ScheduleDay = ({ title, time, description, contact }) => {
    // Handle both string (multiline) and array representations
    const descriptionLines = Array.isArray(description)
        ? description
        : typeof description === 'string'
        ? description.split('\n')
        : [];

    return (
        <div className="bg-[#33312f] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-sans font-bold text-primary mb-2">{title}</h3>
            {time && <p className="text-lg text-stone-400 mb-4">{time}</p>}
            <div className="text-stone-300 space-y-2">
                {descriptionLines.map((line, index) => (
                    line && line.trim() ? <p key={index}>{line}</p> : null
                ))}
            </div>
            {contact && (
                <p className="mt-4 text-sm text-stone-400">
                    {contact}
                </p>
            )}
        </div>
    );
};

export default ScheduleDay;
