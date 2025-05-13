import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import NutrientEstimation from "../components/NutrientEstimation";
import BabyNutritionResult from "./BabyNutritionResult";
import { calculateNutrition } from "../services/calculator";

const calculateAgeDescription = (birthDateStr) => {
    try {
        const birthDate = new Date(birthDateStr);
        const currentDate = new Date();

        if (isNaN(birthDate.getTime())) return "0 bulan 0 hari";

        const diffMs = currentDate - birthDate;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const months = Math.floor(diffDays / 30);
        const days = diffDays % 30;

        return `${months} bulan ${days} hari`;
    } catch {
        return "0 bulan 0 hari";
    }
};

const NutritionCalculator = () => {
    const [formData, setFormData] = useState({
        name: "",
        height: "",
        weight: "",
        gender: "",
        birthdate: "",
        ingredients: "",
    });

    const [result, setResult] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("nutritionFormData");
        if (stored) setFormData(JSON.parse(stored));
    }, []);

    const handleSubmit = (data) => {
        localStorage.setItem("nutritionFormData", JSON.stringify(data));
        const res = calculateNutrition(data);
        console.log("Hasil perhitungan:", res);
        setFormData(data);
        setResult(res);
    };

    const ageDesc = calculateAgeDescription(formData.birthdate);

    return (
        <div>
            <div className="container grid grid-cols-1 lg:grid-cols-2 py-14 gap-10 lg:gap-0">
                <div>
                    <h1 className="text-4xl font-extrabold text-zinc-800">Kalkulator Gizi</h1>
                    <p className="text-gray-600 font-semibold">
                        Kami menggunakan rumus standar BMI untuk membantu Bunda memahami kebutuhan gizi si kecil secara lebih akurat.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8">
                        <div>
                            <h2 className="text-lg font-extrabold text-zinc-800 mb-1">Chat dengan Kami</h2>
                            <p className="font-semibold">Punya pertanyaan atau butuh panduan lebih lanjut?</p>
                            <a href="mailto:littlestep@gmail.com" className="text-primary-70 font-semibold hover:underline">
                                littlestep@gmail.com
                            </a>
                        </div>

                        <div>
                            <h2 className="text-lg font-extrabold text-zinc-800 mb-1">Jam</h2>
                            <p className="font-semibold">
                                Silakan hubungi pada jam berikut <br />
                                <span className="text-primary-70 font-semibold">(Senin–Jumat, 08.00–17.00 WIB)</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-5">
                        {["Health", "Nutrition", "Baby"].map((tag) => (
                            <span key={tag} className="p-2.5 bg-blue-300/70 text-white font-extrabold rounded-xl">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <FormInput
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                />
            </div>

            {result && (
                <div className="container mt-12 space-y-12">
                    <BabyNutritionResult
                        babyName={formData.name}
                        weight={formData.weight}
                        height={formData.height}
                        ageDescription={ageDesc}
                        statusText={result.statusText}  
                    />
                    <NutrientEstimation result={result} />
                </div>
            )}
        </div>
    );
};

export default NutritionCalculator;
