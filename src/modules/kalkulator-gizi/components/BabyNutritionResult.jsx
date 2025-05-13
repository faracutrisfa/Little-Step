import React from 'react';
import BayiProfile from "../../../assets/bayi-profile.webp";
import { Icon } from '@iconify/react';

const BabyNutritionResult = ({ babyName, weight, height, ageDescription, statusText }) => {
    return (
        <div>
            <div className="flex items-center gap-2 text-green-600 font-semibold mb-6">
                <Icon icon="lets-icons:check-fill" className='w-8 h-8' />
                <span className='text-sm lg:text-lg'>Hasil Kalkulator Gizimu sudah Keluar!</span>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div>
                    <h2 className="text-xl lg:text-3xl font-bold mb-4">Hasil Kalkulator Gizi</h2>
                    <div className="flex items-center gap-4">
                        <img
                            src={BayiProfile}
                            alt="Bayi"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-sm lg:text-lg font-bold text-zinc-700">
                            <p>Nama: {babyName}</p>
                            <p>{weight} Kg / {height * 100} Cm</p>
                            <p>{ageDescription}</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-xl font-bold mb-2">Hasil</h2>
                    <p className="text-zinc-700 font-semibold leading-relaxed">{statusText}</p>
                </div>
            </div>
        </div>
    );
};

export default BabyNutritionResult;