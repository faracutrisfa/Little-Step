import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceDot,
    ResponsiveContainer,
} from 'recharts';

const babyData = {
    weight: 7.6,
    length: 65.8,
};

const minIdeal = 7.1;
const maxIdeal = 7.94;

const getStatus = (weight) => {
    if (weight < minIdeal) return 'kurang';
    if (weight <= maxIdeal) return 'ideal';
    return 'berlebih';
};

const status = getStatus(babyData.weight);

const statusMessage = {
    kurang: 'Bayi Bunda memiliki berat badan kurang dari ideal. Disarankan untuk konsultasi lebih lanjut.',
    ideal: `Bayi Bunda terindikasi sehat dengan berat badan ideal, yaitu antara ${minIdeal} – ${maxIdeal} kg. Si kecil berada dalam kategori gizi baik, sesuai dengan standar WHO untuk usianya.`,
    berlebih: 'Bayi Bunda memiliki berat badan berlebih dari ideal. Perlu diperhatikan asupan gizinya.'
};

const data = [
    { length: 45, min: 2.1, idealMin: 2.5, idealMax: 3.5, max: 4.5 },
    { length: 50, min: 2.5, idealMin: 3.2, idealMax: 4.2, max: 5.0 },
    { length: 55, min: 3.0, idealMin: 4.0, idealMax: 5.0, max: 6.2 },
    { length: 60, min: 3.5, idealMin: 5.0, idealMax: 6.5, max: 7.4 },
    { length: 65, min: 4.0, idealMin: 6.0, idealMax: 7.9, max: 8.8 },
    { length: 70, min: 4.5, idealMin: 6.8, idealMax: 8.5, max: 9.5 },
    { length: 75, min: 5.0, idealMin: 7.5, idealMax: 9.2, max: 10.2 },
    { length: 80, min: 5.5, idealMin: 8.2, idealMax: 9.8, max: 11.0 },
    { length: 85, min: 6.0, idealMin: 8.8, idealMax: 10.5, max: 11.8 },
    { length: 90, min: 6.5, idealMin: 9.5, idealMax: 11.1, max: 12.5 },
    { length: 95, min: 7.0, idealMin: 10.1, idealMax: 11.8, max: 13.2 },
    { length: 100, min: 7.5, idealMin: 10.8, idealMax: 12.5, max: 14.0 },
    { length: 105, min: 8.0, idealMin: 11.5, idealMax: 13.2, max: 14.8 },
    { length: 110, min: 8.5, idealMin: 12.2, idealMax: 14.0, max: 15.5 },
];

const Grafik = () => {
    return (
        <section>
            <div className="text-center space-y-4 pb-8">
                <p className="text-gray-700 text-sm lg:text-base">
                    Pilih kategori untuk melihat hasil bayi Anda pada grafik pertumbuhan :
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="bg-secondary-50 border-2 border-secondary-50 text-white px-4 py-2 rounded-xl font-semibold">
                        Berat badan Per Usia
                    </button>
                    <button className="border-2 border-secondary-50 text-secondary-50 px-4 py-2 rounded-xl font-semibold">
                        Panjang Badan Per Usia
                    </button>
                    <button className="border-2 border-secondary-50 text-secondary-50 px-4 py-2 rounded-xl font-semibold">
                        Berat Per Panjang Badan
                    </button>
                </div>
            </div>

            <div className="rounded-t-xl bg-primary-70 text-white text-center py-2 font-extrabold">
                Berat Badan Ideal : {minIdeal} - {maxIdeal} Kg
            </div>

            <div className="bg-white shadow-md px-4 py-6 rounded-b-xl">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data}>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <XAxis dataKey="length" label={{ value: 'Panjang Badan (cm)', position: 'insideBottomRight', offset: -5 }} />
                        <YAxis label={{ value: 'Berat Badan (kg)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />

                        <Line type="monotone" dataKey="min" stroke="#E57373" strokeWidth={1} dot={false} />
                        <Line type="monotone" dataKey="idealMin" stroke="#81C784" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="idealMax" stroke="#81C784" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="max" stroke="#E57373" strokeWidth={1} dot={false} />
                      
                        <ReferenceDot x={babyData.length} y={babyData.weight} r={5} fill="#4CAF50" stroke="white" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-xs text-gray-600 mt-2">
                    Sumber: WHO Child Growth Standards. <a href="https://www.who.int/tools/child-growth-standards/standards" className="underline">https://www.who.int/tools/child-growth-standards/standards</a>
                </p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl space-y-2 mt-8">
                <h3 className="font-bold text-xl text-gray-800">Analisis Pertumbuhan Anak</h3>
                <p className="text-gray-700 text-sm lg:text-base font-semibold">
                    {statusMessage[status]}
                </p>
            </div>
        </section>
    );
};

export default Grafik;