import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHero from "../../assets/hero-auth.jpg";
import Logo from "../../components/Logo";
import { Icon } from '@iconify/react';
import { register } from './services/auth';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: ''
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== confirmPassword) {
            setError('Password dan Konfirmasi Password tidak cocok.');
            return;
        }

        setLoading(true);

        try {
            const res = await login(formData);
            localStorage.setItem('token', res.token);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="h-screen flex font-nunito">
            <div className="flex flex-1">
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={AuthHero}
                        alt="Children playing"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 lg:rounded-3xl lg:z-20 lg:-translate-x-5">
                    <div className="w-full max-w-md">
                        <div className="flex justify-center mb-2">
                            <Logo />
                        </div>

                        <h1 className="text-center text-2xl lg:text-4xl font-extrabold mb-14 text-zinc-800">Create Your Account</h1>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="relative">
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="appearance-none rounded-lg block w-full pl-4 py-4 bg-primary-10 placeholder-primary-0 text-primary-0 font-bold text-sm focus:ring-1 focus:ring-primary-0 focus:border-primary-0"
                                    placeholder="Nama"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                    <Icon icon="ic:baseline-person" className="w-5 h-5 text-primary-0" />
                                </div>
                            </div>

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
                                    className="appearance-none rounded-lg block w-full pl-4 py-4 bg-primary-10 placeholder-primary-0 text-primary-0 text-sm focus:ring-1 focus:ring-primary-0 focus:border-primary-0"
                                    placeholder="Email"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                    <Icon icon="ic:baseline-email" className="w-5 h-5 text-primary-0" />
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none rounded-lg block w-full pl-4 py-4 bg-primary-10 placeholder-primary-0 text-primary-0 text-sm focus:ring-1 focus:ring-primary-0 focus:border-primary-0"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute z-20 inset-y-0 right-0 flex items-center pr-4 text-primary-0 focus:outline-none"
                                >
                                    <Icon icon={showPassword ? "mdi:eye" : "mdi:eye-off"} className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="relative">
                                <label htmlFor="confirmPassword" className="sr-only">Konfirmasi Password</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="appearance-none rounded-lg block w-full pl-4 py-4 bg-primary-10 placeholder-primary-0 text-primary-0 text-sm focus:ring-1 focus:ring-primary-0 focus:border-primary-0"
                                    placeholder="Konfirmasi Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute z-20 inset-y-0 right-0 flex items-center pr-4 text-primary-0 focus:outline-none"
                                >
                                    <Icon icon={showConfirmPassword ? "mdi:eye" : "mdi:eye-off"} className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex text-center justify-center">
                                <div className="w-72 text-center text-zinc-800 text-base">
                                    <span>By continuing, you agree to LittleStep </span>
                                    <span className="font-semibold">Term and Use and Privacy Policy</span>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-4 text-sm font-medium rounded-2xl text-white bg-slate-400 hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500 disabled:bg-gray-400"
                                    style={{ backgroundColor: '#f47c64' }}
                                >
                                    {loading ? 'Creating Account...' : 'Daftar'}
                                </button>
                            </div>

                            <div className="flex justify-center mt-6">
                                <span className="text-sm">
                                    Sudah punya akun? <Link to="/login" className="text-sky-900 font-extrabold hover:underline">Login</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;