import React from 'react';
import { Calendar } from 'lucide-react';
import BayiProfile from "../../../../assets/bayi-profile.webp";

const ProfileItem = ({ label, children, full = false }) => (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 ${full ? "md:col-span-2" : ""}`}>
        <p className="w-full sm:w-36 font-semibold">{label}</p>
        <div className="">{children}</div>
    </div>
);

const ValueWithUnit = ({ value, unit }) => (
    <div className="flex items-center justify-between bg-primary-40 px-4 py-2 rounded-full w-fit min-w-[120px]">
        <span className="font-semibold">{value}</span>
        <span className="text-gray-700">{unit}</span>
    </div>
);

const RadioOption = ({ label, checked }) => (
    <label className="flex items-center gap-2">
        <input type="radio" checked={checked} readOnly />
        <span>{label}</span>
    </label>
);

const Profile = () => {
    const babyData = {
        name: "Kenzo Arrayan",
        gender: "laki-laki",
        birthDate: new Date(2024, 9, 19),
        weight: 7.6,
        length: 65.8,
    };

    const calculateAge = (birthDate) => {
        const today = new Date();
        const diffTime = today - birthDate;
        const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const months = Math.floor(totalDays / 30);
        const days = totalDays % 30;
        return { months, days };
    };

    const formatDate = (date) => (
        `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
    );

    const age = calculateAge(babyData.birthDate);

    return (
        <section className="bg-white w-full rounded-xl shadow-lg overflow-hidden">
            <div className="py-6 px-6 sm:px-10 flex flex-col md:flex-row gap-10 md:gap-14">
                <div className="flex-shrink-0 self-center md:self-center font-medium text-blue-900">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-28 h-28 rounded-full overflow-hidden">
                            <img src={BayiProfile} alt="Baby Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
                    <ProfileItem label="Nama">
                        <span className="bg-primary-40 p-2.5 px-4 rounded-full inline-block w-60 xl:w-80">{babyData.name}</span>
                    </ProfileItem>

                    <ProfileItem label="Berat">
                        <ValueWithUnit value={babyData.weight} unit="Kg" />
                    </ProfileItem>

                    <ProfileItem label="Jenis Kelamin">
                        <div className="flex flex-wrap gap-4">
                            <RadioOption label="laki-laki" checked={babyData.gender === "laki-laki"} />
                            <RadioOption label="Perempuan" checked={babyData.gender === "perempuan"} />
                        </div>
                    </ProfileItem>

                    <ProfileItem label="Panjang">
                        <ValueWithUnit value={babyData.length} unit="Cm" />
                    </ProfileItem>

                    <ProfileItem label="Tanggal Lahir" full>
                        <div className="flex flex-col sm:flex-row items-start gap-2">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 font-semibold">
                                <div className="flex items-center text-primary-90 bg-primary-40 p-2.5 px-4 rounded-full gap-2 w-fit">
                                    <Calendar size={16} />
                                    <p>{formatDate(babyData.birthDate)}</p>
                                </div>
                                <p className="text-sky-900">{age.months} bulan {age.days} hari</p>
                            </div>
                        </div>
                    </ProfileItem>
                </div>
            </div>
        </section>
    );
};

export default Profile;