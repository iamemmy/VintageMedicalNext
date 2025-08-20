import React from 'react';
import Link from 'next/link';

export default function TopHeader() {
  return (
    <div className="text-white bg-brandcl01 px-6 md:px-12">
      <div className="w-full py-2 px-2 flex justify-center lg:justify-end items-center">
        <div className="flex justify-center items-center text-sm font-medium pr-4">
          <div className="flex gap-2">
            <Link href="tel:+2349067770993" className="hover:text-gray-300">
              +234(0)9067770993
            </Link>
            <span className="inline">|</span>
            <Link href="tel:+2348098587274" className="hover:text-gray-300">
              +234(0)8098587274
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
