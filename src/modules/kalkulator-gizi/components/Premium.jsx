import React, { useState } from 'react';
import AdsImage from '../../../assets/ads.png';

const Premium = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const adsData = [
        {
            bgColor: 'bg-primary-10',
            title: 'Ingin lihat Grafik pertumbuhan',
            highlight: 'Si Kecil?',
            descriptionLong: 'Upgrade ke Premium dan Dapatkan Akses Lengkap ke Semua Fitur Eksklusif!. Nikmati pemantauan tumbuh kembang anak yang lebih canggih, rekomendasi gizi yang lebih terperinci',
            descriptionShort: 'Upgrade ke Premium dan Dapatkan Akses Lengkap ke Semua Fitur Eksklusif!.',
        },
    ];

    const activeAd = adsData[0];

    return (
        <section>
            <div className="space-y-8">
                <div className="border border-blue-400 rounded-lg">
                    <div className="border-2 border-primary-70 rounded-lg">
                        <button onClick={toggleOpen} className="w-full flex justify-between items-center p-3 text-primary-70 font-extrabold hover:bg-blue-50 transition-colors">
                            <span>Lihat Grafik Pertumbuhan Anak Sekarang</span>
                            <span className="text-xl">+</span>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className={`container mx-auto rounded-2xl lg:rounded-[50px] px-4 sm:px-10 py-8 flex items-center justify-between gap-6 sm:gap-10 transition-all duration-500 ${activeAd.bgColor}`}>
                        <div className="flex-1 min-w-[280px] max-w-xl text-center lg:text-left">
                            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-snug">
                                {activeAd.title} <span className="text-primary-50">{activeAd.highlight}</span>
                            </h1>
                            <p className="hidden lg:block text-sm sm:text-base mb-4 sm:mb-6">
                                {activeAd.descriptionLong}
                            </p>
                            <p className="lg:hidden text-xs sm:text-sm mb-4 sm:mb-6">
                                {activeAd.descriptionShort}
                            </p>
                            <button className='rounded-2xl px-4 lg:px-8 py-3 font-extrabold transition duration-200 hover:scale-105 bg-primary-20 text-white shadow-xl hover:bg-primary-70'>
                                Premium Sekarang
                            </button>
                        </div>

                        <div className="flex-1 max-w-sm hidden lg:block">
                            <img src={AdsImage} alt="Iklan Premium" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Premium;