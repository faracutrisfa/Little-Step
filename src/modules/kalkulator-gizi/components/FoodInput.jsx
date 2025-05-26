import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { createChild, createGrowthRecord } from "../../../services/KalkulatorGizi";

const calculateBabyAge = (birthDateStr) => {
    const birth = dayjs(birthDateStr);
    const now = dayjs();

    if (!birthDateStr || !birth.isValid()) return { months: 0, days: 0 };

    const months = now.diff(birth, "month");
    const days = now.diff(birth.add(months, "month"), "day");

    return { months, days };
};

const FoodInput = () => {
    const [child, setChild] = useState({
        name: '',
        birthDate: '',
        gender: '',
    });

    const [growth, setGrowth] = useState({
        heightCm: '',
        weightKg: '',
        headCircumferenceCm: ''
    });
    const [responseUser, setResponseUser] = useState(null);

    const [ageDisplay, setAgeDisplay] = useState({ months: 0, days: 0 });

    useEffect(() => {
        setAgeDisplay(calculateBabyAge(child.birthDate));
    }, [child.birthDate]);

    const handleChildChange = (field) => (e) => {
        setChild({ ...child, [field]: e.target.value });
    };

    const handleGrowthChange = (field) => (e) => {
        setGrowth({ ...growth, [field]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await createChild(child);
        setResponseUser(res);
        console.log("Child created:", res);
        await createGrowthRecord(growth, responseUser.id);
        // await 
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="bg-primary-40 rounded-xl p-3">
                <input
                    type="text"
                    placeholder="Nama Lengkap Bayi"
                    value={child.name}
                    onChange={handleChildChange("name")}
                    className="w-full bg-transparent font-extrabold text-primary-50 placeholder-primary-50 outline-none"
                />
            </div>

            <div className="flex gap-3">
                <div className="bg-primary-40 rounded-xl p-3 flex-1">
                    <input
                        type="number"
                        placeholder="Tinggi Badan (cm)"
                        value={growth.heightCm}
                        onChange={handleGrowthChange("heightCm")}
                        className="w-full bg-transparent font-extrabold text-primary-50 placeholder-primary-50 outline-none"
                    />
                </div>
                <div className="bg-primary-40 rounded-xl p-3 flex-1">
                    <input
                        type="number"
                        placeholder="Berat Badan (kg)"
                        value={growth.weightKg}
                        onChange={handleGrowthChange("weightKg")}
                        className="w-full bg-transparent font-extrabold text-primary-50 placeholder-primary-50 outline-none"
                    />
                </div>
            </div>

            <div className="flex gap-3">
                {["male", "female"].map((gender) => (
                    <label
                        key={gender}
                        className="bg-primary-40 rounded-xl p-3 flex-1 flex items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={child.gender === gender}
                            onChange={() => setChild({ ...child, gender })}
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
                            value={child.birthDate}
                            onChange={handleChildChange("birthDate")}
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
                    {/* <textarea
                        placeholder="Tuliskan bahan makanan apa saja yang Bunda miliki"
                        value={child.ingredients}
                        onChange={handleChildChange("ingredients")}
                        className="w-full h-24 bg-transparent text-primary-50 placeholder-primary-50 outline-none resize-none"
                    /> */}
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
};

export default FoodInput;