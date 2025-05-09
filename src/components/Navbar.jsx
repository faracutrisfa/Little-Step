import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Kalkulator Gizi', path: '/kalkulator-gizi' },
        { name: 'Resep MPASI', path: '/resep-mpasi' },
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white text-neutral-50 text-sm lg:text-base shadow-md">
            <div className="mx-auto flex items-center justify-between px-4 lg:px-10 xl:px-14 py-4 md:py-5">
                <Logo />
                <ul className="hidden gap-10 xl:gap-14 font-extrabold md:flex">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={`transition-colors hover:text-secondary-50 ${pathname === path ? 'text-secondary-50' : ''}`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex gap-6 font-extrabold">
                    <div className="hidden md:flex gap-6 font-extrabold items-center">
                        <Link
                            to="/login"
                            className="text-neutral-90 transition duration-200 hover:scale-105"
                        >
                            Sign In
                        </Link>
                        <Link to="/register">
                            <Button variant="primary">Register</Button>
                        </Link>
                    </div>

                </div>

                <button className="md:hidden" onClick={toggleMenu}>
                    <Icon icon={isOpen ? 'mdi:close' : 'mdi:menu'} width="24" />
                </button>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out bg-white overflow-hidden ${isOpen ? 'max-h-screen pb-4' : 'max-h-0 py-0'}`}>
                <ul className="flex flex-col items-center gap-4 font-extrabold">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={`block py-2 transition-colors hover:text-secondary-50 ${pathname === path ? 'text-secondary-50' : ''}`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex items-center justify-center gap-3 font-extrabold">
                    <div className="mt-4 flex items-center justify-center gap-3 font-extrabold">
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <Button variant="secondary">Sign In</Button>
                        </Link>
                        <Link to="/register" onClick={() => setIsOpen(false)}>
                            <Button variant="primary">Register</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar