import React from 'react';
import FoodBowl from "../../../assets/food-bowl.png";
import Document from "../../../assets/document.png";
import Warning from "../../../assets/warning.png";
import Check from "../../../assets/check.png";

const giziEstimasi = [
    { label: 'Zat Besi', value: '1.3 mg' },
    { label: 'Kalsium', value: '52 mg' },
    { label: 'Vitamin A', value: '250 mcg' },
    { label: 'Vitamin C', value: '20 mg' },
    { label: 'Energi', value: '180 kkal' },
    { label: 'Protein', value: '6.5 gram' },
    { label: 'Lemak', value: '8.2 gram' },
    { label: 'Karbohidrat', value: '18 gram' }
];

const kebutuhanGizi = [
    { label: 'Energi', value: '~625 kkal' },
    { label: 'Protein', value: '9 gram' },
    { label: 'Lemak', value: '30 gram' },
    { label: 'Karbohidrat', value: '60 gram' },
    { label: 'Zat Besi', value: '11 mg' },
    { label: 'Kalsium', value: '270 mg' },
    { label: 'Vitamin A', value: '375 mcg' },
    { label: 'Vitamin C', value: '50 mg' }
];

const analisis = [
    {
        icon: Check,
        color: "text-green-500",
        text: "Kandungan makanan ini memenuhi sekitar 70% kebutuhan protein harian anak usia 6 bulan."
    },
    {
        icon: Warning,
        color: "text-yellow-500",
        text: "Kandungan zat besi masih rendah, disarankan menambahkan sumber zat besi seperti hati ayam atau kuning telur."
    },
    {
        icon: Check,
        color: "text-green-500",
        text: "Vitamin A cukup tinggi, baik untuk kesehatan mata dan kekebalan tubuh."
    },
    {
        icon: Warning,
        color: "text-yellow-500",
        text: "Energi total masih rendah, bisa ditambah dengan sumber lemak sehat seperti santan atau alpukat."
    }
];

const splitArray = (arr) => [arr.slice(0, 4), arr.slice(4)];

const EstimasiGizi = () => {
    const [leftGizi, rightGizi] = splitArray(giziEstimasi);
    const [leftKebutuhan, rightKebutuhan] = splitArray(kebutuhanGizi);

    return (
        <section className='space-y-4'>
            <div className='rounded-xl overflow-hidden shadow-md bg-white'>
                <div className="bg-primary-70 text-white text-center font-bold py-3 px-4">
                    Hasil Estimasi Gizi dari Bahan yang Bunda Miliki:
                </div>

                <div className="p-4">
                    <div className="flex items-center mb-6 flex-wrap gap-3">
                        <img src={FoodBowl} alt="Ilustrasi bahan makanan" className="rounded-full w-16 h-16" />
                        <div>
                            <p className="font-bold text-gray-800">Bahan dimasukkan :</p>
                            <p className="text-gray-700">Wortel, Kentang, dan Ayam</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {[{ title: "Estimasi Kandungan Gizi:", data: [leftGizi, rightGizi] },
                        { title: "Kebutuhan Gizi Anak Usia 6 Bulan per Hari (berdasarkan AKG):", data: [leftKebutuhan, rightKebutuhan] }]
                            .map((section, idx) => (
                                <div key={idx} className="bg-blue-50 rounded-lg p-4 flex-1">
                                    <h3 className="font-extrabold text-gray-800 mb-3">{section.title}</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {section.data.map((group, i) => (
                                            <ul key={i} className="text-sm text-gray-700 space-y-1">
                                                {group.map((item, j) => (
                                                    <li key={j}>• {item.label}: {item.value}</li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <div className="flex items-start mb-3 gap-3">
                            <img src={Document} alt="Dokumen Analisis" className="w-16 h-16 rounded" />
                            <div>
                                <p className="font-bold text-gray-800">Analisis Sistem</p>
                                <p className="text-gray-600 text-sm">Kandungan gizi Bayi</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {analisis.map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <img src={item.icon} alt="Icon Analisis" className="w-5 h-5" />
                                    <p className="text-sm text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstimasiGizi;