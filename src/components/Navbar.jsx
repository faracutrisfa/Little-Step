import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Logo from './Logo'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Kalkulator Gizi', path: '/kalkulator-gizi' },
        { name: 'AI Food Scan', path: '/food-scan' },
        { name: 'Resep MPASI', path: '/resep-mpasi' },
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="text-neutral-50 text-sm lg:text-base py-5">
            <div className="container mx-auto flex items-center justify-between">
                <Logo />
                <ul className="hidden gap-5 lg:gap-10 font-extrabold md:flex">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                className={`transition-colors cursor-pointer hover:text-secondary-50 ${pathname === path ? 'text-secondary-50' : ''
                                    }`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden gap-4 font-extrabold md:flex">
                    <button className="text-neutral-90 transition duration-200 hover:scale-105">
                        Sign In
                    </button>
                    <button className="rounded-3xl bg-secondary-50 px-7 xl:px-10 py-2 text-white shadow-xl transition duration-200 hover:scale-105 hover:bg-secondary-70">
                        Register
                    </button>
                </div>

                <button className="md:hidden" onClick={toggleMenu}>
                    <Icon icon={isOpen ? 'mdi:close' : 'mdi:menu'} width="24" />
                </button>
            </div>

            <div
                className={`container overflow-hidden px-4 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col items-center gap-4 pt-2 text-center font-extrabold">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={`transition-colors cursor-pointer hover:text-secondary-50 ${pathname === path ? 'text-secondary-50' : ''
                                    }`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex items-center justify-center gap-3 font-extrabold">
                    <button className="rounded-3xl border border-secondary-50 px-10 py-2 text-left text-neutral-90 transition duration-200 hover:bg-secondary-10 hover:scale-105">
                        Sign In
                    </button>
                    <button className="rounded-3xl bg-secondary-50 px-10 py-2 text-white shadow-xl transition duration-200 hover:scale-105 hover:bg-secondary-70">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar