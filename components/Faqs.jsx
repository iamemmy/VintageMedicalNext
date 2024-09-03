import React, { useState } from 'react';

const faqData = [
    {
        question: 'Where is vintage medical center located?',
        answer: 'Vintage Medical is conveniently located at Plot 3213, F Road Citec Mount Pleasant Estate, Mbora District, Abuja.',
    },
    {
        question: 'How can I book an appointment?',
        answer: 'Booking an appointment is simple! You can easily schedule online through our website or give us a call.',
    },
    {
        question: 'What are the visiting hours at Vintage Medical centre?',
        answer: 'Vintage Medical centre offers flexible visiting hours to accommodate our patients needs. We are open 24 hours for visiting, and adjustments may be made based on the patients condition.',
    },
    {
        question: 'Is Vintage Medical centre HMO accredited?',
        answer: 'Yes, Vintage Medical centre is accredited by various HMOs, including United Health Care International, DOT HMO, Venus Medicare, Integrated Health Care, GNI Health Care, and more.',
    },
    {
        question: 'Can I request a specific doctor for my appointment?',
        answer: 'Yes, at Vintage Medical centre, you can request a specific doctor for your appointment. Simply book an appointment, and we will accommodate your preference whenever possible.',
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='faqs-section' className="py-16 sm:py-24 bg-gray-50">

            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 text-center">FAQs</h2>
                <p className='text-center text-sm lg:text-base text-gray-600 mb-6 lg:mb-12'>Frequently Asked Questions</p>
                <div className="space-y-4 p-6 lg:p-0">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            <button
                                className="flex justify-between items-center w-full text-left text-gray-900"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-sm lg:text-base font-medium">{item.question}</span>
                                <svg
                                    className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`mt-4 text-xs lg:text-sm text-gray-600 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
}
