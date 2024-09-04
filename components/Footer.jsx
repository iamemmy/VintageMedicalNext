import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {

    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center sm:items-start">
                <Image
                    src="/vmc.png"
                    alt="vmc logo"
                    width={200}
                    height={200}
                    className="w-46 h-46 object-contain -mt-8"
                />
                <p className="text-sm leading-6 text-start">
                    Your trusted partner in healthcare, offering personalized care and a range of medical services to meet your needs.
                </p>
            </div>


                <div>
                    <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-xs lg:text-sm">
                        <li><Link href="/services" className="hover:text-indigo-400">Our Services</Link></li>
                        <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
                        <li><Link href="/appointment" className="hover:text-indigo-400">Book Appointment</Link></li>
                        {isHomePage && (
                            <li>
                                <Link href="#faqs-section" className="hover:text-indigo-400">FAQs</Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-xs lg:text-sm">
                        <li>Plot 3213, F Road Citec Mount Pleasant Estate</li>
                        <li>Phone: +234(0)8098587274</li>
                        <li>Email: info@vintagemedicalcentre.com</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Information</h3>
                    <ul className="space-y-2 text-xs lg:text-sm">
                        <li><Link href="/#" onClick={(e) => e.preventDefault()} className="hover:text-indigo-400">Privacy Policy</Link></li>
                        <li><Link href="/#" onClick={(e) => e.preventDefault()} className="hover:text-indigo-400">Terms & Conditions</Link></li>
                        <li><Link href="/hmo" className="hover:text-indigo-400">HMO Accreditation</Link></li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                <p className="mb-2 text-sm lg:text-base">&copy; 2024 Vintage Medical Centre. All rights reserved.</p>
                <p>
                    Designed by <Link href="https://www.instagram.com/coderevo" className="text-indigo-400 hover:text-indigo-600 text-sm lg:text-base">CodeRevo</Link>
                </p>
            </div>
        </footer>
    );
}
