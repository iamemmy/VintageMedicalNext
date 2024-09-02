import React from "react";

export default function Appointment() {
    return (
        <div className="relative overflow-hidden bg-transparent">
            <svg
                viewBox="0 0 1208 1024"
                className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0 opacity-30"
            >
                <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#blue-gradient)" />
                <defs>
                    <radialGradient id="blue-gradient">
                        <stop stopColor="#3730dd" />
                        <stop offset={1} stopColor="#0066CC" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-0 lg:gap-8 py-16 px-6 sm:px-16">

                    <div className="w-full lg:w-2/3 text-center lg:text-left text-white">
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">Book Appointment</h2>
                        <p className="mt-6 text-sm lg:text-base leading-6 text-gray-800">
                            Take control of your health journey. Book an appointment with Vintage Medical Centre today and experience prompt, professional, and personalized care tailored to your specific needs. Your well-being is our priority. Kindly, fill the form to get started.
                        </p>
                    </div>

                    <div className="mt-12 lg:mt-0 w-full lg:w-1/3 bg-white p-8 rounded-3xl shadow-xl ring-1 ring-gray-900/10">
                        <form className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="professional" className="block text-sm font-medium leading-6 text-gray-900">
                                        Professional
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="professional"
                                            name="professional"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value="general_practitioner">General Practitioner</option>
                                            <option value="gynaecologist">Gynaecologist</option>
                                            <option value="cardiologist">Cardiologist</option>
                                            <option value="endocrinologist">Endocrinologist</option>
                                            <option value="neurologist">Neurologist</option>
                                            <option value="surgeon">Surgeon</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                    Your Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-[#1700ad] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
