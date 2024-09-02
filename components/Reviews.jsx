import React from "react";

export default function Reviews() {
    const reviews = [
        {
            name: "Keneth Ocheme",
            rating: 5,
            review: "Impressed by Vintage Medical Center's professionalism and attention to detail. Their outstanding care exceeded my expectations.",
        },
        {
            name: "Agu Ifeoma",
            rating: 4,
            review: "Vintage Medical Center provided exceptional care with a personal touch. Highly recommend their top-notch expertise and compassionate staff.",
        },
        {
            name: "Kunle Jenifer",
            rating: 5,
            review: "Grateful for Vintage Medical Center's expert care and compassionate staff. Highly recommended for their exceptional service.",
        },
    ];

    const StarIcon = ({ filled }) => (
        <svg
            className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M9.049 2.927a.73.73 0 011.402 0l1.618 4.73a.73.73 0 00.692.5h4.878a.73.73 0 01.431 1.32l-3.946 2.866a.73.73 0 00-.265.823l1.516 4.746a.73.73 0 01-1.12.814L10 14.878l-3.91 2.848a.73.73 0 01-1.12-.814l1.516-4.746a.73.73 0 00-.265-.823L2.275 9.477a.73.73 0 01.431-1.32h4.878a.73.73 0 00.692-.5l1.618-4.73z"
            />
        </svg>
    );

    return (
        <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 text-center mb-6">What Our Patients Say</h2>
                <p className="text-center text-sm lg:text-base text-gray-600 mb-12">
                    Our patients&apos; satisfaction is our top priority. Here&apos;s what they have to say about their experience with us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                            <div className="flex items-center mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <StarIcon key={i} filled={true} />
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                    <StarIcon key={i} filled={false} />
                                ))}
                            </div>
                            <p className="text-base lg:text-lg font-medium text-gray-900">{review.name}</p>
                            <p className="text-sm lg:text-base mt-4 text-gray-600">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
