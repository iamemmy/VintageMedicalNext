import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="h-[80px] lg:h-[90px] bg-brandcl01 text-white pr-4 pl-0 lg:pl-4 py-4 lg:px-6 lg:py-2 shadow-md flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/vmc.png"
          alt="vmc logo"
          width={200}
          height={200}
          className="w-28 h-28 lg:w-32 lg:h-32 object-contain -ml-3 lg:ml-0"
        />
        <span className="text-base lg:text-xl font-semibold uppercase -ml-3 lg:ml-0">
          Vintage Medical Centre
        </span>
      </Link>
      <button
        className="lg:hidden text-white"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <aside
        className={`z-50 h-[90vh] lg:h-auto fixed lg:relative lg:top-0 top-[80px] left-0 w-full lg:w-auto bg-gray-200 lg:bg-transparent text-gray-800 lg:text-white flex flex-col justify-center items-center lg:flex-row p-6 space-y-4 lg:space-y-0 lg:py-6 lg:px-6 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <li className="hover:bg-gray-300 lg:hover:bg-brandcl02 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
            <Link href="/" className="block w-full h-full">Home</Link>
          </li>
          <li className="hover:bg-gray-300 lg:hover:bg-brandcl02 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
            <Link href="/about" className="block w-full h-full">About</Link>
          </li>
          <li className="hover:bg-gray-300 lg:hover:bg-brandcl02 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
            <Link href="/guide" className="block w-full h-full">Guide</Link>
          </li>
          <li className="hover:bg-gray-300 lg:hover:bg-brandcl02 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
            <Link href="/contact" className="block w-full h-full">Contact</Link>
          </li>
        </ul>

        <Link href={'/dashboard'} className="mt-auto access-btn lg:hidden bg-brandcl01 text-white text-sm hover:bg-brandcl02 border border-indigo-200 px-4 py-2 rounded-md transition duration-300">
            Book Appointment
        </Link>
      </aside>

        <Link href="/dashboard" className="hidden lg:block bg-brandcl0101 text-white text-sm hover:bg-brandcl02 border border-indigo-200 px-4 py-2 rounded-md transition duration-300">
            Book Appointment
        </Link>
    </header>
  );
}
