import React, { useEffect, useState } from 'react';
import AdsImage from '../../../assets/ads.webp';
import Button from '../../../components/Button';

const Ads = () => {
    const adsData = [
        {
            bgColor: 'bg-secondary-10',
            title: 'Butuh solusi lengkap untuk kesehatan dan gizi',
            highlight: 'Si Kecil?',
            descriptionLong: 'Upgrade ke Premium dan dapatkan akses lengkap ke semua fitur eksklusif! Nikmati pemantauan tumbuh kembang anak yang lebih canggih, serta rekomendasi gizi yang lebih terperinci.',
            descriptionShort: 'Upgrade ke Premium dan dapatkan akses lengkap ke semua fitur eksklusif!',
        },
        {
            bgColor: 'bg-primary-10',
            title: 'Ingin pantau tumbuh kembang anak lebih mudah?',
            highlight: 'Gunakan Premium!',
            descriptionLong: 'Dapatkan fitur eksklusif seperti grafik pertumbuhan, analisis gizi, dan saran aktivitas harian untuk si kecil.',
            descriptionShort: 'Dapatkan fitur eksklusif Premium sekarang juga!',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % adsData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const activeAd = adsData[activeIndex];

    return (
        <section className="container py-10 bg">
            <div className={`container mx-auto rounded-2xl lg:rounded-[50px] px-4 sm:px-10 py-8 flex items-center justify-between gap-6 sm:gap-10 transition-all duration-500 ${activeAd.bgColor}`}>
                <div className="flex-1 min-w-[280px] max-w-xl text-center lg:text-left">
                    <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-snug">
                        {activeAd.title} <span className="text-secondary-50">{activeAd.highlight}</span>
                    </h1>
                    <p className="hidden lg:block text-sm sm:text-base mb-4 sm:mb-6">
                        {activeAd.descriptionLong}
                    </p>
                    <p className="lg:hidden text-xs sm:text-sm mb-4 sm:mb-6">
                        {activeAd.descriptionShort}
                    </p>
                    <Button variant="primary" className="text-xs lg:text-base py-3">Premium Sekarang</Button>
                </div>

                <div className="flex-1 max-w-sm hidden lg:block">
                    <img src={AdsImage} alt="Iklan Premium" className="w-full h-auto object-contain" />
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {adsData.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-secondary-50' : 'bg-primary-70'}`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Ads;