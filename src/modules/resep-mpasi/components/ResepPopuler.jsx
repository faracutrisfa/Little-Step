import React from 'react';
import { Icon } from '@iconify/react'
import Mpasi1 from '../../../assets/mpasi1.png';
import Mpasi2 from '../../../assets/mpasi2.png';
import Mpasi3 from '../../../assets/mpasi3.png';
import Mpasi4 from '../../../assets/mpasi4.png';

const ResepPopuler = () => {
    const resepData = [
        {
            id: 1,
            title: 'Bubur Labu Kuning',
            description: 'kaya vitamin A dan beta-karoten',
            imageUrl: Mpasi1,
            likes: 12,
        },
        {
            id: 2,
            title: 'Bubur Labu Kuning',
            description: 'kaya vitamin A dan beta-karoten',
            imageUrl: Mpasi2,
            likes: 12,
        },
        {
            id: 3,
            title: 'Bubur Labu Kuning',
            description: 'kaya vitamin A dan beta-karoten',
            imageUrl: Mpasi3,
            likes: 12,
        },
        {
            id: 4,
            title: 'Bubur Labu Kuning',
            description: 'kaya vitamin A dan beta-karoten',
            imageUrl: Mpasi4,
            likes: 12,
        }
    ];

    return (
        <section className="bg-white py-">
            <div className="container mx-auto">
                <h1 className="font-extrabold text-3xl text-primary-0">
                    Resep Populer di Kalangan Bunda
                </h1>
                <p className="font-semibold text-neutral-90 mt-2">
                    Maksimalkan gizi anak dengan resep yang sudah digunakan lebih dari 1 juta pengguna dan rekomendasi ahli gizi
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-0">
                    {resepData.map((resep) => (
                        <div key={resep.id} className="relative overflow-hidden rounded-lg">
                            <img
                                src={resep.imageUrl}
                                alt={resep.title}
                                className="h-44 w-full object-cover"
                            />

                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-900 to-transparent"></div>

                            <div className="absolute top-3 left-3 flex items-center gap-1">
                                <div className="flex items-center rounded-full bg-secondary-30 text-secondary-70 px-2 py-1">
                                    <Icon icon="mdi:user" width="20" height="20" />
                                    <span className="ml-1 text-sm ">{resep.likes}</span>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0">
                                <div className="flex h-12 w-12 items-center justify-center bg-red-600 text-xl font-bold text-white">
                                    {resep.id}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-4">
                                <h3 className="text-lg font-extrabold text-white">{resep.title}</h3>
                                <p className="text-sm font-bold text-white/90">{resep.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResepPopuler;