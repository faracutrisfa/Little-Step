import React from 'react';

const BeratBadanIdeal = () => {
    const babyData = {
        weight: 7.6,
        length: 65.8,
    };

    const minIdeal = 7.1;
    const maxIdeal = 7.94;
    const overWeight = 8.89;

    const min = 6.5;
    const max = 9.5;
    const weightPercentage = ((babyData.weight - min) / (max - min)) * 100;

    const getStatus = (weight) => {
        if (weight < minIdeal) return 'Kurang';
        if (weight >= minIdeal && weight <= maxIdeal) return 'Sehat';
        if (weight > maxIdeal && weight <= overWeight) return 'Berlebihan';
        return 'Obesitas';
    };

    const status = getStatus(babyData.weight);

    return (
        <section className="rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary-70 text-white text-center font-extrabold py-2">
                Berat Badan Ideal : {minIdeal} - {maxIdeal} Kg
            </div>
            <div className="relative px-4 lg:px-36 py-6 bg-white">
                <div className="flex justify-center font-bold gap-10 lg:gap-28 text-sm text-gray-600 mb-2">
                    <span>{minIdeal}</span>
                    <span>{maxIdeal}</span>
                    <span>{overWeight}</span>
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
        </section>
    );
};

export default BeratBadanIdeal;