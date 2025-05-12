import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);

        const handleStorageChange = () => {
            const updatedUser = localStorage.getItem('user');
            setUser(updatedUser ? JSON.parse(updatedUser) : null);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        setDropdownOpen(false);
        navigate('/');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Kalkulator Gizi', path: '/kalkulator-gizi' },
        { name: 'Resep MPASI', path: '/resep-mpasi' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-nunito">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
                <Logo />

                <ul className="hidden md:flex gap-10 font-extrabold">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={handleNavClick}
                                className={`hover:text-secondary-50 transition ${pathname === path ? 'text-secondary-50' : 'text-neutral-400'}`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex gap-6 items-center font-extrabold relative">
                    {user ? (
                        <div ref={dropdownRef} className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 text-zinc-800 hover:text-secondary-50"
                            >
                                Hi, {user.name}
                                <Icon icon="mdi:chevron-down" width="20" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md py-2 z-50 flex flex-col">
                                    <Link
                                        to="/dashboard"
                                        className="px-4 py-2 text-sm text-zinc-800 hover:bg-gray-100"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-zinc-800 hover:underline">Sign In</Link>
                            <Link to="/register">
                                <Button variant="primary">Register</Button>
                            </Link>
                        </>
                    )}
                </div>

                <div className="md:hidden flex items-center gap-3">
                    {user && (
                        <span className="text-sm text-zinc-800 font-bold">Hi, {user.name}</span>
                    )}
                    <button onClick={toggleMenu}>
                        <Icon icon={isOpen ? 'mdi:close' : 'mdi:menu'} className="w-6 h-6 text-zinc-800" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white text-center px-4 pb-4 pt-2 shadow-md font-extrabold">
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map(({ name, path }) => (
                            <li key={name}>
                                <Link
                                    to={path}
                                    onClick={handleNavClick}
                                    className={`block ${pathname === path ? 'text-secondary-50' : 'text-neutral-400'}`}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                        <hr className="border-t my-2" />
                        {user ? (
                            <div className="flex items-center justify-center gap-3">
                                <Link
                                    to="/dashboard"
                                    onClick={handleNavClick}
                                    className="text-sm text-secondary-50 hover:scale-105 border-2 px-3 py-1 border-secondary-50 rounded-full"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-sm text-red-600 hover:underline"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" onClick={handleNavClick} className="text-zinc-800 hover:underline">
                                    Sign In
                                </Link>
                                <Link to="/register" onClick={handleNavClick}>
                                    <Button variant="primary">Register</Button>
                                </Link>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;