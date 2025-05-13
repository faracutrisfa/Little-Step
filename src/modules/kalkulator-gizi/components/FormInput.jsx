import React, { useEffect, useState } from "react";

const calculateAge = (birthDateStr) => {
    try {
        const birthDate = new Date(birthDateStr);
        const currentDate = new Date();

        if (isNaN(birthDate.getTime())) return { months: 0, days: 0 };

        const diffMs = currentDate - birthDate;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const months = Math.floor(diffDays / 30);
        const days = diffDays % 30;

        return { months, days };
    } catch {
        return { months: 0, days: 0 };
    }
};

export default function FormInput({ handleSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        height: '',
        weight: '',
        gender: '',
        birthdate: '',
        ingredients: ''
    });

    const [ageDisplay, setAgeDisplay] = useState({ months: 0, days: 0 });

    useEffect(() => {
        setAgeDisplay(calculateAge(formData.birthdate));
    }, [formData]);

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData); 
        setFormData({
            name: '',
            height: '',
            weight: '',
            gender: '',
            birthdate: '',
            ingredients: ''
        });
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="bg-primary-40 rounded-xl p-3">
                <input
                    type="text"
                    placeholder="Nama Lengkap Bayi"
                    value={formData.name}
                    onChange={handleChange("name")}
                    className="w-full bg-transparent font-extrabold text-primary-50 placeholder-primary-50 outline-none"
                />
            </div>

            <div className="flex gap-3">
                <div className="bg-primary-40 rounded-xl p-3 flex-1">
                    <input
                        type="number"
                        placeholder="Tinggi Badan (m)"
                        value={formData.height}
                        onChange={handleChange("height")}
                        className="w-full bg-transparent font-extrabold text-primary-50 placeholder-primary-50 outline-none"
                    />
                </div>
                <div className="bg-primary-40 rounded-xl p-3 flex-1">
                    <input
                        type="number"
                        placeholder="Berat Badan (kg)"
                        value={formData.weight}
                        onChange={handleChange("weight")}
                        className="w-full bg-transparent font-extrabold text-primary-50 placeholder-primary-50 outline-none"
                    />
                </div>
            </div>

            <div className="flex gap-3">
                {["male", "female"].map((gender) => (
                    <label
                        key={gender}
                        className="bg-primary-40 rounded-xl p-3 flex-1 flex items-center"
                    >
                        <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={() => setFormData({ ...formData, gender })}
                            className="mr-2"
                        />
                        <span className="text-primary-50 font-extrabold">
                            {gender === "male" ? "Laki-laki" : "Perempuan"}
                        </span>
                    </label>
                ))}
            </div>

            <div>
                <label className="block text-gray-800 font-bold mb-2">Tanggal Lahir</label>
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="bg-primary-40 rounded-xl p-3 flex items-center">
                        <input
                            type="date"
                            value={formData.birthdate}
                            onChange={handleChange("birthdate")}
                            className="bg-transparent text-primary-50 font-extrabold outline-none w-32"
                        />
                    </div>
                    <div className="text-primary-50 font-extrabold">
                        {ageDisplay.months} bulan <span className="inline-block w-2" /> {ageDisplay.days} hari
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-gray-800 font-medium mb-2">
                    Masukkan Bahan Makanan
                </label>
                <div className="bg-primary-40 rounded-xl p-3">
                    <textarea
                        placeholder="Tuliskan bahan makanan apa saja yang Bunda miliki"
                        value={formData.ingredients}
                        onChange={handleChange("ingredients")}
                        className="w-full h-24 bg-transparent text-primary-50 placeholder-primary-50 outline-none resize-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-primary-70 hover:bg-primary-90 text-white font-medium py-3 px-4 rounded-2xl transition-colors"
            >
                Submit
            </button>
        </form>
    );
}