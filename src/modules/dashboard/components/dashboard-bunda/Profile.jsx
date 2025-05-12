import React, { useEffect, useState } from 'react';
import { SquarePen } from 'lucide-react';
import BundaProfile from "../../../../assets/bunda-profile.webp";

const defaultProfile = {
    name: 'Nama Bunda',
    email: 'emailbunda@domain.com',
    phone: '085212963710',
};

const Profile = () => {
    const [profile, setProfile] = useState(defaultProfile);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setProfile({
                name: user.name || defaultProfile.name,
                email: user.email || defaultProfile.email,
                phone: user.phone || defaultProfile.phone,
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(profile));
        alert('Profil berhasil disimpan!');
    };

    const InputField = ({ label, name, type = 'text', value }) => (
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <label htmlFor={name} className="font-semibold text-zinc-800 sm:min-w-[100px]">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className="w-full bg-blue-50 rounded-full py-3 px-4 text-gray-800"
            />
        </div>
    );

    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            <img
                                src={BundaProfile}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 space-y-5">
                        <div className="space-y-4">
                            <InputField label="Nama" name="name" value={profile.name} />
                            <InputField label="Email" name="email" type="email" value={profile.email} />
                            <InputField label="No Telepon" name="phone" value={profile.phone} />
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleSave}
                                className="bg-primary-70 hover:bg-primary-90 text-white font-medium py-2 px-8 rounded-full transition duration-200"
                            >
                                Simpan
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 md:static md:self-start">
                        <button>
                            <SquarePen size={20} className="text-primary-70" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 