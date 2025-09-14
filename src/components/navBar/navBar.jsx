import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    return(
        <>
        <nav className="bg-white/10 backdrop-blur-md border border-white/20" style={{ position: 'relative', zIndex: 1000 }}>
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between p-4">
                <a href="#" className="rtl:space-x-reverse">
                    <img src="/Osto_logo.png" className="h-10" alt="Flowbite Logo" />
                </a>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden md:flex md:flex-1 md:justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="text-black hover:text-black/80">Home</Link>
                        </li>
                        <li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                            <button className="flex items-center text-black hover:text-black/80">
                                Services 
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 font-normal bg-white border border-gray-200 rounded-lg shadow-lg w-44`} style={{ zIndex: 9999 }}>
                                <ul className="py-2 text-sm">
                                <li>
                                    <Link to="/endpoint-security" className="block px-4 py-2 text-black hover:bg-gray-100">Endpoint Security</Link>
                                </li>
                                <li>
                                    <Link to="/network-security" className="block px-4 py-2 text-black hover:bg-gray-100">Network Security</Link>
                                </li>
                                <li>
                                    <Link to="/compliance-vapt" className="block px-4 py-2 text-black hover:bg-gray-100">Compliance VAPT</Link>
                                </li>
                                <li>
                                    <Link to="/cloud-security" className="block px-4 py-2 text-black hover:bg-gray-100">Cloud Security</Link>
                                </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/about-us" className="text-black hover:text-black/80">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Link to="/try-osto" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer hover:opacity-90 transition-opacity duration-300 inline-block" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>Try Osto</Link>
                </div>  
            </div>
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <ul className="flex flex-col font-medium p-4 mt-4 border-t border-white/20 bg-white/10 backdrop-blur-sm">
                <li>
                    <Link to="/" className="block py-2 px-3 text-black hover:bg-white/20 rounded-sm">Home</Link>
                </li>
                <li>
                    <button 
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-white/20 rounded-sm"
                    >
                        Services
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    {isMobileDropdownOpen && (
                        <ul className="pl-4 mt-2 space-y-1">
                            <li>
                                <Link to="/endpoint-security" className="block py-2 px-3 text-black hover:bg-white/20 rounded-sm">Endpoint Security</Link>
                            </li>
                            <li>
                                <Link to="/network-security" className="block py-2 px-3 text-black hover:bg-white/20 rounded-sm">Network Security</Link>
                            </li>
                            <li>
                                <Link to="/compliance-vapt" className="block py-2 px-3 text-black hover:bg-white/20 rounded-sm">Compliance VAPT</Link>
                            </li>
                            <li>
                                <Link to="/cloud-security" className="block py-2 px-3 text-black hover:bg-white/20 rounded-sm">Cloud Security</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/about-us" className="block py-2 px-3 text-black hover:bg-white/20 rounded-sm">About Us</Link>
                </li>
                <li>
                    <Link to="/try-osto" className="block py-2 px-3 text-white font-medium rounded-lg text-center mt-2" style={{ background: 'linear-gradient(135deg, #282a77, #3b3d99)' }}>Try Osto</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}