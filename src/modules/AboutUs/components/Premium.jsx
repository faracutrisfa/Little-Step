import React, { useState } from 'react';    
import { Icon } from '@iconify/react'

const plans = [
    {
        title: 'Kalkulator Gizi',
        price: 'Rp 50K',
        period: '| Bulan',
        features: [
            'Akses grafik',
            'Analisis rekomendasi gizi harian',
            'Insight Bulanan',
            'Download laporan tumbuh kembang dalam bentuk PDF',
        ],
        highlight: false,
    },
    {
        title: 'AI Based Food Scan',
        price: 'Rp 60K',
        period: '| Bulan',
        features: [
            'Scan tanpa batas',
            'Estimasi kandungan gizi makro dan mikro',
            'Rekomendasi porsi berdasarkan usia dan kebutuhan anak',
            'simpan dan tracking riwayat makanan anak',
        ],
        highlight: true,
    },
    {
        title: 'Resep MPASI',
        price: 'Rp 50K',
        period: '| Bulan',
        features: [
            'Akses katalog ekslsuif tanpa batas',
            'Perencanaan MPASI bulanan ekslusif',
            'Akses resep teratas di seluruh menu',
        ],
        highlight: false,
    },
    {
        title: 'All in One',
        price: 'Rp 50K',
        period: '| Bulan',
        features: [
            'Akses penuh Kalkulator Gizi',
            'AI Food scan unlimited',
            'Resep MPASI lengkap dengan kandungan gizi dan rekomendasi berdasarkan usia',
        ],
        highlight: false,
    },
];

const SubscriptionToggle = ({ subscriptionType, setSubscriptionType }) => (
    <div className="flex justify-center mb-14">
        <div className="space-x-8 font-extrabold">
            {['monthly', 'yearly'].map(type => (
                <button
                    key={type}
                    className={`px-16 py-3 transition-colors ${subscriptionType === type
                        ? 'bg-primary-70 text-white rounded-3xl border-2 border-primary-70'
                        : 'border-2 rounded-3xl border-primary-70 text-primary-70'
                        }`}
                    onClick={() => setSubscriptionType(type)}
                >
                    {type === 'monthly' ? 'Bulanan' : 'Tahunan'}
                </button>
            ))}
        </div>
    </div>
);

const PlanCard = ({ title, price, period, features, highlight }) => {
    const isAI = title === 'AI Based Food Scan';
    const baseClass = 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-xl p-6 shadow-sm font-bold';
    const cardClass = highlight ? `${baseClass} bg-primary-70 text-white` : `${baseClass} bg-white text-primary-70 shadow-md`;

    const buttonClass = highlight
        ? 'bg-white text-primary-70 hover:bg-gray-100'
        : 'bg-primary-70 text-white hover:bg-primary-90';

    const checkColor = highlight ? 'text-green-400' : 'text-green-500';
    const priceTextColor = highlight ? 'text-blue-100' : 'text-gray-500';

    return (
        <div className={cardClass}>
            <h3 className={`text-lg font-medium mb-2 ${highlight ? 'text-white' : 'text-primary-70'}`}>{title}</h3>
            <div className="flex items-end mb-6">
                <span className="text-2xl text-black font-bold">{price}</span>
                <span className={`ml-2 ${priceTextColor}`}>{period}</span>
            </div>
            <button className={`w-full py-3 rounded-3xl mb-6 transition-colors ${buttonClass}`}>
                Get Started
            </button>
            <ul className="space-y-3">
                {features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <Icon icon="lets-icons:check-fill" className={`${checkColor} mr-2 h-5 w-5 mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Premium = () => {
    const [subscriptionType, setSubscriptionType] = useState('monthly');

    return (
        <section className="bg-white">
            <div className="container mx-auto py-14">
                <div className="text-center mb-10">
                    <h1 className="text-primary-90 font-bold text-2xl lg:text-4xl mb-4">
                        Little Step Premium
                    </h1>
                    <p className="text-neutral-90 max-w-4xl mx-auto">
                        Berdasarkan keresahan orang tua tersebut, kami menghadirkan solusi digital terpadu berupa website yang mendampingi orang tua,
                        khususnya ibu, dalam memantau tumbuh kembang dan kebutuhan gizi anak secara praktis, akurat, dan berbasis data.
                    </p>
                </div>

                <SubscriptionToggle
                    subscriptionType={subscriptionType}
                    setSubscriptionType={setSubscriptionType}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Premium;