import React from 'react';
import BayiProfile from "../../../assets/bayi-profile.webp";
import { Icon } from '@iconify/react';

const ResultBox = ({ result }) => {
    if (!result) return null;

    const { babyName, weight, height, ageDescription, statusText, weightStatus } = result;
    const minIdeal = 7.1;
    const maxIdeal = 7.94;
    const weightPercentage = ((weight - minIdeal) / (maxIdeal - minIdeal)) * 100;

    return (
        <section className="container py-14 space-y-8">
            <div>
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-6">
                    <Icon icon="lets-icons:check-fill" className='w-8 h-8' />
                    <span className='text-sm lg:text-lg'>Hasil Kalkulator Gizimu sudah Keluar !</span>
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
            <div className="rounded-xl overflow-hidden shadow-md">
                <div className="bg-primary-70 text-white text-center font-extrabold py-2">
                    Berat Badan Ideal : {minIdeal} - {maxIdeal} Kg
                </div>
                <div className="relative px-4 lg:px-36 py-6 bg-white">
                    <div className="flex justify-center font-bold gap-10 lg:gap-28 text-sm text-gray-600 mb-2">
                        <span>{minIdeal}</span>
                        <span>{maxIdeal}</span>
                        <span>{weight}</span>
                    </div>

                    <div className="h-2 flex w-full rounded-full overflow-hidden">
                        <div className="w-1/4 bg-primary-20" />
                        <div className="w-1/4 bg-green-600" />
                        <div className="w-1/4 bg-amber-400" />
                        <div className="w-1/4 bg-red-400" />
                    </div>

                    <div
                        className="absolute top-[48px] -translate-x-1/2"
                        style={{ left: `${weightPercentage}%` }}
                    >
                        <div className="w-4 h-4 rounded-full bg-green-600 border-2 border-white shadow-md mx-auto" />
                    </div>

                    <div className="flex justify-around text-sm font-bold mt-2">
                        <span className="text-blue-400">Kurang</span>
                        <span className="text-green-500">Sehat</span>
                        <span className="text-yellow-500">Berlebihan</span>
                        <span className="text-red-400">Obesitas</span>
                    </div>

                    <p className="text-center text-gray-500 text-xs mt-4">
                        Berat ideal diperoleh dari perbandingan panjang dengan berat badan
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ResultBox;