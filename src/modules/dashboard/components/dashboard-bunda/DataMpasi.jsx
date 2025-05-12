import React from 'react';

const mealData = [
    {
        id: 1,
        title: 'Makan Pagi',
        description: 'Bubur Labu Kuning, kurang lebih 100 gram',
        calories: 80,
        status: 'completed',
    },
    {
        id: 2,
        title: 'Makan Siang',
        description: 'Bubur Labu Kuning, kurang lebih 100 gram',
        calories: 100,
        status: 'completed',
    },
    {
        id: 3,
        title: 'Makan Malam',
        description: 'Isi makanan untuk Si Kecil hari ini yuk Bunda !',
        calories: 200,
        status: 'pending',
    },
];

const MealEntry = ({ meal, isLast }) => {
    const statusColor = meal.status === 'pending' ? 'bg-secondary-50' : 'bg-secondary-50';

    return (
        <div className="relative">
            {!isLast && (
                <div className="absolute left-6 -ml-px h-full w-0.5 bg-primary-20" />
            )}

            <div className="relative flex items-start mb-4">
                <div className="flex items-center justify-center w-12 flex-shrink-0">
                    <div
                        className={`w-6 h-6 rounded-full border-4 border-white outline outline-2 outline-offset-[-1px] outline-primary-20 ${meal.status === 'completed' ? 'bg-primary-20' : 'bg-white'
                            }`}
                    />
                </div>

                <div className="flex-1">
                    <div className="bg-red-50 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="font-extrabold text-gray-800 mb-1">{meal.title}</h3>
                            <p className="text-gray-600 font-semibold text-sm mb-2">{meal.description}</p>
                            <span
                                className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold text-white ${statusColor}`}
                            >
                                {meal.status === 'pending'
                                    ? `+ ${meal.calories} kkal`
                                    : `${meal.calories} kkal`}
                            </span>
                        </div>

                        <div className="w-full md:w-auto">
                            {meal.status === 'completed' ? (
                                <button className="bg-gray-500 font-bold text-white text-sm px-3 py-1 rounded-xl w-full md:w-auto">
                                    Cek sekarang
                                </button>
                            ) : (
                                <button className="bg-secondary-50 font-bold text-white text-sm px-6 py-2 rounded-xl w-full md:w-auto">
                                    Unggah
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DataMpasi = () => {
    return (
        <div>
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                <h2 className="font-extrabold mb-6 text-lg md:text-xl">Data MPASI Balita</h2>
                <div className="relative">
                    {mealData.map((meal, index) => (
                        <MealEntry
                            key={meal.id}
                            meal={meal}
                            isLast={index === mealData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataMpasi;