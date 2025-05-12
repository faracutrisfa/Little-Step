import React from 'react';
import { Check } from 'lucide-react';

const Premium = () => {
    const premiumFeatures = [
        'Akses riwayat lengkap perkembangan bayi',
        'perbandingan grafik dengan anak seusia berdasarkan data WHO',
        'Insight Bulanan',
        'Download laporan tumbuh kembang dalam bentuk PDF'
    ];

    return (
        <div className="max-w-md">
            <div className="bg-secondary-10 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    LittleStep Premium
                </h2>

                <p className="text-gray-600 mb-6">
                    Pantau Tumbuh Kembang Bayi Lebih Mudah Lewat Grafik Interaktif!
                </p>

                <div className="space-y-4 mb-6">
                    {premiumFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 mr-3">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <Check size={16} className="text-white" />
                                </div>
                            </div>
                            <p className="text-gray-800 font-bold">{feature}</p>
                        </div>
                    ))}
                </div>

                <button
                    className="w-full bg-secondary-50 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                    Cek sekarang
                </button>
            </div>
        </div>
    );
};

export default Premium;