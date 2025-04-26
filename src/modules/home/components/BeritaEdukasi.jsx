import React from 'react';

import FeatureImg from '../../../assets/feature.png';
import News1Img from '../../../assets/news1.png';
import News2Img from '../../../assets/news2.png';
import News3Img from '../../../assets/news3.png';

const BeritaEdukasi = () => {
    const feature = {
        image: FeatureImg,
        date: 'Posted Jan 28 2025',
        title: 'Cegah Stunting dengan Pola Asuh yang Baik',
        desc: 'Pastikan kebutuhan gizi terpenuhi dengan pola asuh yang tepat agar si kecil tumbuh optimal dan terhindar dari risiko stunting.',
    };

    const newsList = [
        {
            image: News1Img,
            date: 'Posted Jan 28 2025',
            title: '1000 HPK Kunci Cegah Stunting',
            category: 'Dewasa (18-59 Tahun) • Pola Asuh dan Perkembangan Anak',
            link: '#',
        },
        {
            image: News2Img,
            date: 'Posted Jan 28 2025',
            title: 'Cegah Stunting dengan ABCDE',
            category: 'Anak-anak (5-9 Tahun) • Pola Asuh dan Perkembangan Anak',
            link: '#',
        },
        {
            image: News3Img,
            date: 'Posted Jan 28 2025',
            title: 'Gejala Stunting yang Harus Diwaspadai',
            category: 'Anak-anak (5-9 Tahun) • Pola Asuh dan Perkembangan Anak',
            link: '#',
        },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-primary-0 font-bold text-2xl lg:text-4xl mb-2">
                        Berita dan Edukasi si Kecil
                    </h1>
                    <p className="text-neutral-90 font-semibold text-sm lg:text-base">
                        Littlestep hadir sebagai respons terhadap permasalahan serius yang dihadapi banyak orang tua
                        dalam memastikan tumbuh kembang anak yang sehat.
                    </p>
                </div>

                <div className="container flex flex-col lg:flex-row gap-8 justify-center">
                    <div className="flex-1">
                        <div className="overflow-hidden">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-56 lg:h-72 object-cover rounded-2xl"
                            />
                            <div className="py-2 space-y-2">
                                <p className="text-xs text-neutral-500">{feature.date}</p>
                                <h3 className="text-xl font-bold text-neutral-900">
                                    {feature.title}
                                </h3>
                                <p className="text-base text-neutral-90">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-6">
                        {newsList.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg flex-shrink-0"
                                />
                                <div className="flex-1 space-y-1">
                                    <p className="text-xs text-neutral-500">{item.date}</p>
                                    <h4 className="text-sm lg:text-base font-semibold text-neutral-900 leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-neutral-500">{item.category}</p>
                                    <a
                                        href={item.link}
                                        className="block text-sm font-medium text-secondary-50 hover:underline"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeritaEdukasi;