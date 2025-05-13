import React from 'react';

const ResultSummary = ({ result }) => {
    if (!result) return null;

    const {
        idealWeight,
        weightCategory,
        nutritionEstimation,
        nutritionNeeds,
    } = result;

    const nutritionKeys = [
        'energy', 'protein', 'fat', 'carb',
        'iron', 'calcium', 'vitaminA', 'vitaminC'
    ];

    return (
        <div className="p-4 border rounded shadow mt-6">
            <h2 className="text-xl font-semibold mb-4">Ringkasan Hasil</h2>

            {idealWeight && (
                <div className="mb-2">
                    <p><strong>Berat Badan Ideal:</strong> {idealWeight.min} - {idealWeight.max} kg</p>
                </div>
            )}

            {weightCategory && (
                <div className="mb-2">
                    <p><strong>Kategori Berat Badan:</strong> {weightCategory}</p>
                </div>
            )}

            {nutritionEstimation && (
                <div className="mb-2">
                    <h3 className="font-medium mt-3">Estimasi Kandungan Gizi (Total):</h3>
                    <ul className="list-disc list-inside">
                        {nutritionKeys.map(key => (
                            <li key={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}: {nutritionEstimation[key]} {key === 'energy' ? 'kcal' : 'g'}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {nutritionNeeds && (
                <div className="mb-2">
                    <h3 className="font-medium mt-3">Kebutuhan Nutrisi Usia 6 Bulan:</h3>
                    <ul className="list-disc list-inside">
                        {nutritionKeys.map(key => (
                            <li key={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}: {nutritionNeeds[key]} {key === 'energy' ? 'kcal' : 'g'}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ResultSummary;
