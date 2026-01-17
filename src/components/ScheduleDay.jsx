import React from 'react';

const ScheduleDay = ({ title, time, description, contact }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">{title}</h3>
            {time && <p className="text-lg text-gray-600 mb-4">{time}</p>}
            <div className="text-gray-700 space-y-2">
                {description.split('\n').map((line, index) => (
                    line.trim() && <p key={index}>{line}</p>
                ))}
            </div>
            {contact && (
                <p className="mt-4 text-sm text-gray-600">
                    {contact}
                </p>
            )}
        </div>
    );
};

export default ScheduleDay;
