import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleStorageChange = () => {
            const storedUser = localStorage.getItem('user')
            setUser(storedUser ? JSON.parse(storedUser) : null)
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        setDropdownOpen(false)
        navigate('/')
    }

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

                <div className="hidden md:flex gap-6 font-extrabold items-center relative">
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
                                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md py-2 z-50">
                                    <button
                                        onClick={() => {
                                            setDropdownOpen(false)
                                            navigate('/dashboard')
                                        }}
                                        className="w-full text-left px-4 py-2 text-sm text-neutral-90 hover:bg-gray-100"
                                    >
                                        Dashboard
                                    </button>

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
                            <Link to="/login" className="text-neutral-90 transition hover:scale-105">Sign In</Link>
                            <Link to="/register">
                                <Button variant="primary">Register</Button>
                            </Link>
                        </>
                    )}
                </div>

                <div className="flex items-center md:hidden gap-5">
                    {user && (
                        <span className="text-sm text-zinc-800 font-bold">Hi, {user.name}</span>
                    )}
                    <button onClick={toggleMenu}>
                        <Icon icon={isOpen ? 'mdi:close' : 'mdi:menu'} width="24" />
                    </button>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out bg-white overflow-hidden ${isOpen ? 'max-h-screen pb-4' : 'max-h-0 py-0'}`}>
                <ul className="flex flex-col items-center gap-4 font-extrabold">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                    setIsOpen(false)
                                }}
                                className={`block py-2 transition-colors hover:text-secondary-50 ${pathname === path ? 'text-secondary-50' : ''}`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex items-center justify-center gap-3 font-extrabold">
                    {user ? (
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => {
                                    handleLogout()
                                    setIsOpen(false)
                                }}
                                className="text-red-600 border-2 border-red-600 rounded-xl px-6 py-1 text-sm hover:underline"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <Button variant="secondary">Sign In</Button>
                            </Link>
                            <Link to="/register" onClick={() => setIsOpen(false)}>
                                <Button variant="primary">Register</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar