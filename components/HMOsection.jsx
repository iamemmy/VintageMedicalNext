import { React } from 'react';
import Link from 'next/link';

export default function HMOsection() {

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 bg-transparent">
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

        <div className="max-w-4xl mx-auto text-center p-6">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">We Are HMO Accredited</h2>
            <p className="text-sm lg:text-base text-gray-700 mb-6 leading-6">
                Vintage Medical Centre is honored to be HMO accredited, reflecting our dedication to delivering top-tier healthcare. We've partnered with the most reputable HMO providers to ensure quality care for all our patients.
            </p>
            <Link
                href={'/hmo'}
                className="mt-4 inline-block rounded-md bg-brandcl01 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-brandcl02 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                View HMOs
            </Link>
        </div>
    </div>
  );
}
