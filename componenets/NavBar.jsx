'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenu = (e) => {
        // Close the menu if clicked outside
        if (!e.target.closest('.navbar') && !e.target.closest('.burger')) {
            setOpenMenu(false);
        }
    };

    const handleLinkClick = () => {
        if (openMenu) {
            setOpenMenu(false);  // Close the sidebar on mobile when a link is clicked
        }
    };

    useEffect(() => {
        // Add event listener to close the menu when clicking outside
        window.addEventListener('click', closeMenu);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('click', closeMenu);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full shadow-lg z-10 ${openMenu ? 'transition-colors duration-500 bg-[#2C3E50]' : 'transition-colors duration-500 bg-white'} navbar`}>
            <div className="flex justify-between items-center h-16 px-5">
                {/* Logo */}
                <div className="text-3xl md:text-xl lg:text-2xl  font-bold">
                    <Link href={'#home'}>
                        <span className="text-blue-500 hidden md:block">Nkosinathi's Portfolio</span>
                        <span className="text-blue-500 block md:hidden">NS</span>
                    </Link>
                </div>

                {/* Links */}
                <div className="space-x-8 text-lg font-semibold hidden md:flex">
                    <Link href={'#home'}onClick={handleLinkClick}>Home</Link>
                    <Link href={'#about'}onClick={handleLinkClick}>About</Link>
                    <Link href={'#skills'}onClick={handleLinkClick}>Skills</Link>
                    <Link href={'#projects'}onClick={handleLinkClick}>Projects</Link>
                </div>

                {/* Contacts Button */}
                <div className="hidden md:block px-4 py-2 text-center text-md md:text-lg font-semibold cursor-pointer mx-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition duration-500">
                    <Link href={'#contacts'}>Let's Connect</Link>
                </div>

                {/* Hamburger Menu (visible on mobile) */}
                <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
                    <span className="text-3xl">☰</span>
                </div>

                {/* Mobile Menu */}
                <div className={`bg-[#2C3E50] opacity-95 text-white w-3/4 h-full flex flex-col  transition-transform duration-500 text-lg fixed top-0 right-0 shadow-lg p-8 pt-4 space-y-8 md:hidden ${openMenu ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                    <Link href={'#about'} className="flex justify-between items-center">About
                        <span className="text-white text-xl cursor-pointer" onClick={toggleMenu}>X</span>
                    </Link>
                    <Link href={'#skills'}onClick={handleLinkClick}>Skills</Link>
                    <Link href={'#projects'}onClick={handleLinkClick}>Projects</Link>
                    <Link href={'#contacts'}onClick={handleLinkClick}>Contacts</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;