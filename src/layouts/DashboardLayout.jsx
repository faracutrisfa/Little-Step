import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import BundaProfile from '../assets/bunda-profile.webp';
import BayiProfile from '../assets/bayi-profile.webp';
import { Menu, X, ChevronDown } from 'lucide-react';
import Bunda from '../modules/dashboard/Bunda';

const SidebarItem = ({ id, label, isActive, onClick, icon }) => (
    <li>
        <button
            className={`flex items-center p-2 w-full text-left rounded-lg transition-colors ${isActive
                ? 'bg-white text-sm font-bold text-primary-100'
                : 'hover:bg-blue-50 hover:text-primary-100 text-white text-sm font-bold'
                }`}
            onClick={() => onClick(id)}
        >
            <div className="w-9 h-9 rounded-full mr-2 flex items-center justify-center">
                <img src={icon} alt={`${label} icon`} className="object-cover rounded-full w-8 h-8" />
            </div>
            <span>{label}</span>
        </button>
    </li>
);

const DashboardLayout = ({ children, activeSidebar, setActiveSidebar }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('#profile-dropdown')) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);


    return (
        <div className="font-nunito min-h-screen flex flex-col">
            <header className="px-4 md:px-6 lg:px-10 py-4 bg-white shadow w-full">
                <div className="flex items-center justify-between gap-4">
                    <Logo />
                    <h1 className="text-sky-900 lg:px-16 text-base sm:text-xl lg:text-2xl font-bold flex-1 text-center sm:text-left truncate">
                        Dashboard {activeSidebar === 'bayi' ? 'Bayi' : 'Bunda'}
                    </h1>
                    <button
                        className="block lg:hidden text-sky-800"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="hidden lg:block relative" id="profile-dropdown">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 focus:outline-none"
                        >
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img
                                    src={BundaProfile}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-zinc-800 text-xs lg:text-base font-extrabold">
                                {user?.name || 'Pengguna'}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white font-extrabold rounded-lg shadow-lg border z-50">
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                                >
                                    Home
                                </a>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('user');
                                        window.location.href = '/login';
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-1 h-auto">
                <aside
                    className={`fixed h-screen lg:h-auto lg:static z-40 bg-primary-50 w-60 lg:w-60 shadow-md transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                        }`}
                >
                    <nav className="p-4">
                        <ul className="space-y-2">
                            <SidebarItem
                                id="bunda"
                                label="Dashboard Bunda"
                                isActive={activeSidebar === 'bunda'}
                                onClick={(id) => {
                                    setActiveSidebar(id);
                                    setSidebarOpen(false);
                                }}
                                icon={BundaProfile}
                            />
                            <SidebarItem
                                id="bayi"
                                label="Dashboard Bayi"
                                isActive={activeSidebar === 'bayi'}
                                onClick={(id) => {
                                    setActiveSidebar(id);
                                    setSidebarOpen(false);
                                }}
                                icon={BayiProfile}
                            />
                            <li>
                                <button className="inline-flex justify-center items-center gap-2 bg-[#3D93D7] text-white text-sm font-bold p-2 w-full rounded-lg hover:bg-primary-70 transition-colors">
                                    <div className="text-xl">+</div>
                                    <span className="lg:inline">Tambah Bayi</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                <main className="flex-1 p-7 overflow-auto bg-sky-100">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;