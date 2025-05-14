import React, { useState } from 'react';
import FoodBowl from "../../../assets/food-bowl.png";
import Document from "../../../assets/document.png";
import ChickenLeg from "../../../assets/chicken-leg.png";

const NutritionalComparison = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const InfoSection = ({ image, title, description, children }) => (
        <div className="bg-secondary-10 p-4 rounded-lg">
            <div className="flex items-start gap-3">
                <img src={image} alt={title} className="w-16 h-16 rounded" />
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm mb-2">{description}</p>
                    {children}
                </div>
            </div>
        </div>
    );

    const nutrientRows = [
        {
            label: 'Energi',
            target: '~625 kkal',
            estimate: '60-80 kkal',
            deficit: '~545-565 kkal'
        },
        {
            label: 'Protein',
            target: '9 gram',
            estimate: '2 gram',
            deficit: '7 gram'
        },
        {
            label: 'Lemak',
            target: '30 gram',
            estimate: '(Sangat sedikit)',
            deficit: '~30 gram'
        },
        {
            label: 'Karbohidrat',
            target: '60 gram',
            estimate: '10-15 gram',
            deficit: '~45-50 gram'
        }
    ];

    return (
        <section>
            <div className="space-y-8">
                <div className="border-2 border-secondary-50 rounded-lg">
                    <button
                        onClick={toggleOpen}
                        className="w-full flex justify-between items-center p-3 text-secondary-50 hover:bg-red-50 transition-colors"
                    >
                        <span className="font-bold">Perbandingan dengan Target Gizi Anda</span>
                        <span className="text-xl">{isOpen ? "-" : "+"}</span>
                    </button>
                </div>

                {isOpen && (
                    <div className="bg-secondary-50 shadow-md rounded-xl">
                        <h2 className="text-white text-center font-bold py-3 px-4">
                            Hasil Estimasi Gizi dari Foto Bunda :
                        </h2>

                        <div className="bg-white p-4 space-y-5">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={FoodBowl} alt="Ilustrasi bahan makanan" className="rounded-full w-16 h-16" />
                                <div>
                                    <p className="font-bold">Makanan Bayi :</p>
                                    <p>Bubur Labu Kuning</p>
                                </div>
                            </div>

                            <InfoSection
                                image={ChickenLeg}
                                title="Estimasi Kandungan gizi"
                                description="Kandungan gizi Makanan"
                            >
                                <ul className="list-disc ml-5 text-sm space-y-1">
                                    <li>Kandungan Gizi dalam 200 gram Puree Labu (Estimasi):</li>
                                    <li>Energi: [10–40 kkal / 100g] × 200g = 60–80 kkal</li>
                                    <li>Protein: [1g / 100g] × 200g = 2g</li>
                                    <li>Lemak: (Relatif sangat rendah sekali)</li>
                                    <li>
                                        Karbohidrat: sekitar 10–15g (tergantung jenis labu dan cara pengolahan)
                                    </li>
                                </ul>
                            </InfoSection>

                            <div className="overflow-x-auto rounded-lg font-bold">
                                <table className="w-full">
                                    <thead className="bg-secondary-10">
                                        <tr className="bg-secondary-50 text-white">
                                            <th className="p-2 text-left">Nutrisi</th>
                                            <th className="p-2 text-left">Target Anda</th>
                                            <th className="p-2 text-left">Estimasi dari 200g Puree Labu</th>
                                            <th className="p-2 text-left">Perkiraan Kekurangan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-secondary-10 text-secondary-50">
                                        {nutrientRows.map((row, idx) => (
                                            <tr key={idx}>
                                                <td className="py-1 px-5">{row.label}</td>
                                                <td className="py-1 px-5">{row.target}</td>
                                                <td className="py-1 px-5">{row.estimate}</td>
                                                <td className="py-1 px-5">{row.deficit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <InfoSection
                                image={Document}
                                title="Penting untuk diingat"
                                description="Kandungan gizi Bayi"
                            >
                                <ul className="list-disc ml-5 text-sm space-y-1">
                                    <li>
                                        Ini hanyalah perkiraan berdasarkan asumsi porsi 200 gram dan data nutrisi
                                        standar puree labu. Jumlah sebenarnya bisa berbeda.
                                    </li>
                                    <li>
                                        Puree labu kaya vitamin A dan mengandung serat serta mikronutrien lainnya,
                                        yang belum termasuk dalam target makronutrien Anda.
                                    </li>
                                </ul>
                            </InfoSection>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NutritionalComparison;