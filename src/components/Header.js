import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close the dropdown if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.relative')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-[#4A90E2] text-white px-8 py-4 relative z-20">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-3xl font-extrabold text-white hover:text-[#F5A623] transition-colors duration-300">
                    <span className="text-white">SlateMind</span><span className="text-[#F5A623]">AI</span>
                </Link>

                {/* Hamburger menu for mobile */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    ☰
                </button>

                {/* Links for larger screens */}
                <nav className="hidden md:flex gap-8">
                    <Link className="text-lg font-medium text-white hover:text-[#50E3C2]" to="/about">About</Link>
                    <div className="relative">
                        <button
                            className="text-lg font-medium text-white hover:text-[#50E3C2]"
                            onClick={toggleDropdown}
                        >
                            Join Community
                        </button>
                        {showDropdown && (
                            <div className="absolute mt-2 bg-white text-[#333333] rounded-lg shadow-lg z-30">
                                <a href="https://www.linkedin.com/company/slatemind-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F5A623]">
                                    LinkedIn
                                </a>
                                <a href="https://discord.gg/HX5fmKSd" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F5A623]">
                                    Discord
                                </a>
                                <a href="https://www.reddit.com/r/MindSlateAI/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F5A623]">
                                    Reddit
                                </a>
                            </div>
                        )}
                    </div>
                    <a className="text-lg font-medium text-white bg-[#50E3C2] hover:bg-[#F5A623] px-4 py-2 rounded-full" href="#join-waitlist">Join Waiting List</a>
                </nav>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-4 bg-[#4A90E2] p-4 rounded-lg shadow-lg">
                    <Link className="block text-lg font-medium text-white hover:text-[#50E3C2] mb-4" to="/about" onClick={toggleMobileMenu}>About</Link>
                    <a className="block text-lg font-medium text-white hover:text-[#50E3C2] mb-4" href="https://www.linkedin.com/in/rohan-mathew-alex" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="block text-lg font-medium text-white hover:text-[#50E3C2] mb-4" href="https://discord.gg/HX5fmKSd" target="_blank" rel="noopener noreferrer">Discord</a>
                    <a className="block text-lg font-medium text-white hover:text-[#50E3C2] mb-4" href="https://www.reddit.com/r/MindSlateAI/hot/" target="_blank" rel="noopener noreferrer">Reddit</a>
                    <a className="block text-lg font-medium text-white bg-[#50E3C2] hover:bg-[#F5A623] px-4 py-2 rounded-full" href="#join-waitlist" onClick={toggleMobileMenu}>Join Waiting List</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
