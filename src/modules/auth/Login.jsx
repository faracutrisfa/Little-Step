import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../auth/api';
import AuthHero from "../../assets/hero-auth.jpg";
import Logo from "../../components/Logo";
import { Icon } from '@iconify/react';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await authApi.login(formData);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Failed to login. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="h-screen flex font-nunito">
            <div className="flex flex-1">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 lg:rounded-3xl lg:z-20 lg:translate-x-5">
                    <div className="w-full max-w-md">
                        <div className="flex justify-center mb-2">
                            <Logo />
                        </div>

                        <h1 className="text-center text-2xl lg:text-4xl font-extrabold mb-14 text-zinc-800">Login to Your Account</h1>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="relative">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none rounded-lg relative block w-full pl-4 py-4 lg:py-6 bg-secondary-10 placeholder-primary-0 text-primary-0 focus:outline-none focus:ring-1 focus:ring-primary-0 focus:border-primary-0 text-sm"
                                    placeholder="Email"
                                />
                                <div className="absolute z-20 inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                    <Icon icon="ic:baseline-email" className="w-5 h-5 text-primary-0" />
                                </div>
                            </div>

                            <div className='relative'>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none rounded-lg relative block w-full pl-4 py-4 lg:py-6 bg-secondary-10 placeholder-primary-0 text-primary-0 focus:outline-none focus:ring-1 focus:ring-primary-0 focus:border-primary-0 text-sm"
                                    placeholder="Password"
                                />
                                <div className="absolute z-20 inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                    <Icon icon="mdi:eye-off" className="w-5 h-5 text-primary-0" />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div>
                                    <a href="#" className="text-sky-900 text-xs font-extrabold">
                                        Lupa Password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-2xl text-white bg-coral-500 hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500 disabled:bg-gray-400"
                                    style={{ backgroundColor: '#f47c64' }}
                                >
                                    {loading ? 'Loading...' : 'Login'}
                                </button>
                            </div>

                            <div className="flex items-center justify-center my-4">
                                <span className="text-neutral-600 text-xs font-extrabold">atau Login dengan</span>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl shadow-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4" />
                                        <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853" />
                                        <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07C.38 6.86 0 8.39 0 10c0 1.61.38 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05" />
                                        <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335" />
                                    </svg>
                                    Continue with Google
                                </button>
                            </div>

                            <div className="flex justify-center mt-6">
                                <span className="text-sm ">
                                    Belum punya akun? <Link to="/register" className="text-sky-900 font-extrabold hover:underline">Buat Akun</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden md:block md:w-1/2">
                    <img
                        src={AuthHero}
                        alt="Children playing"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Login;