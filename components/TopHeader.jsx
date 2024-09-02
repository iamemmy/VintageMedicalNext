import React from 'react';

export default function TopHeader() {
  return (
    <div className="hidden lg:block text-gray-900 bg-white">
      <div className="w-full py-2 px-2 flex justify-end items-center">
        <div className="text-sm font-medium pr-4">
          <span>📞</span> <a href="tel:+1234567890" className="hover:text-gray-300">+234(0)8098587274</a>
        </div>
      </div>
    </div>
  );
}
