import React from 'react';
import { Icon } from '@iconify/react';
import Hero from '../../../assets/hero-premium.webp';
import { usePremiumState } from '../hooks/usePremiumState';

const FAQ = [
    {
        question: 'Bisakah saya mendapatkan rekomendasi menu harian untuk anak saya?',
        answer: 'Tentu. Cukup masukkan usia anak dan preferensi makanan...',
    },
    {
        question: 'Apakah website ini bisa digunakan untuk kedua bayi saya?',
        answer: 'Ya, tentu saja. Anda dapat menambahkan lebih dari satu profil anak...',
    },
    {
        question: 'Bagaimana saya bisa mendapatkan bantuan jika mengalami kendala saat menggunakan website?',
        answer: 'Silakan hubungi tim dukungan kami melalui menu “Bantuan” di website...',
    },
];

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
            'Simpan dan tracking riwayat makanan anak',
        ],
        highlight: true,
    },
    {
        title: 'Resep MPASI',
        price: 'Rp 50K',
        period: '| Bulan',
        features: [
            'Akses katalog ekslusif tanpa batas',
            'Perencanaan MPASI bulanan eksklusif',
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
            'Resep MPASI lengkap dengan kandungan gizi',
        ],
        highlight: false,
    },
];

const SubscriptionToggle = ({ subscriptionType, setSubscriptionType }) => (
    <div className="flex justify-center mb-14">
        <div className="space-x-3 lg:space-x-8 font-extrabold">
            {['monthly', 'yearly'].map((type) => (
                <button
                    key={type}
                    className={`px-9 lg:px-16 py-3 transition-colors ${subscriptionType === type
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
    const baseClass = 'shadow-xl rounded-xl p-6 shadow-sm font-bold';
    const cardClass = highlight
        ? `${baseClass} bg-primary-70 text-white`
        : `${baseClass} bg-white text-primary-70 shadow-md`;

    const buttonClass = highlight
        ? 'bg-white text-primary-70 hover:bg-gray-100'
        : 'bg-primary-70 text-white hover:bg-primary-90';

    const checkColor = highlight ? 'text-green-400' : 'text-green-500';
    const textColor = highlight ? 'text-white' : 'text-neutral-0';

    return (
        <div className={cardClass}>
            <h3 className={`text-lg font-medium mb-2`}>{title}</h3>
            <div className={`flex items-center mb-6 ${textColor}`}>
                <span className="text-2xl font-bold">{price}</span>
                <span className="ml-2">{period}</span>
            </div>
            <button className={`w-full py-3 rounded-3xl mb-6 transition-colors ${buttonClass}`}>
                Get Started
            </button>
            <ul className="space-y-3">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <Icon
                            icon="lets-icons:check-fill"
                            className={`${checkColor} mr-2 h-5 w-5 mt-0.5 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Premium = () => {
    const {
        subscriptionType,
        setSubscriptionType,
        openFAQIndex,
        toggleFAQ,
    } = usePremiumState();

    return (
        <section className="container py-14">
            <div className="text-center mb-10">
                <h1 className="text-primary-90 font-bold text-2xl lg:text-4xl mb-4">
                    Little Step Premium
                </h1>
                <p className="text-neutral-90 max-w-4xl mx-auto">
                    Berdasarkan keresahan orang tua tersebut, kami menghadirkan solusi digital terpadu berupa website yang mendampingi orang tua, khususnya ibu, dalam memantau tumbuh kembang dan kebutuhan gizi anak secara praktis, akurat, dan berbasis data.
                </p>
            </div>

            <SubscriptionToggle
                subscriptionType={subscriptionType}
                setSubscriptionType={setSubscriptionType}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 container lg:px-0">
                {plans.map((plan, idx) => (
                    <PlanCard key={idx} {...plan} />
                ))}
            </div>

            <div className="mx-auto flex flex-col lg:flex-row items-center gap-12 mt-28">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-primary-90 font-bold text-2xl md:text-3xl lg:text-4xl">
                        Exploring, Learning and Growing Together with{' '}
                        <span className="text-secondary-50">LittleStep</span>
                    </h1>

                    <div className="space-y-4">
                        {FAQ.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-xl border border-neutral-20"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-5 flex justify-between items-start gap-4"
                                >
                                    <div className="text-sm md:text-base text-neutral-90 font-bold">
                                        {item.question}
                                    </div>
                                    <Icon
                                        icon="mdi:arrow-top-right"
                                        className="text-white w-7 h-7 min-w-7 mt-1 p-1 bg-secondary-50 rounded-lg"
                                    />
                                </button>
                                {openFAQIndex === index && (
                                    <div className="px-5 pb-5 text-sm text-neutral-70">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <img
                        src={Hero}
                        alt="Hero"
                        className="w-full max-w-md mx-auto relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Premium;