import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Mpasi1 from '../../../assets/mpasi1.png';
import Mpasi2 from '../../../assets/mpasi2.png';
import Mpasi3 from '../../../assets/mpasi3.png';
import Mpasi4 from '../../../assets/mpasi4.png';
import Button from '../../../components/Button';

const KategoriResep = () => {
    const [activeFilter, setActiveFilter] = useState('6 - 8 Bulan');

    const filters = [
        '6 - 8 Bulan',
        '9 - 11 Bulan',
        '12 - 24 Bulan'
    ];

    const recipes = [
        {
            id: 1,
            title: 'Sweet Carrot Cream',
            author: 'Kamilia Arina',
            description: 'Puree lembut dari wortel kukus yang dipadukan dengan susu',
            views: 114,
            image: Mpasi1
        },
        {
            id: 2,
            title: 'Sweet Carrot Cream',
            author: 'Kamilia Arina',
            description: 'Puree lembut dari wortel kukus yang dipadukan dengan susu',
            views: 114,
            image: Mpasi4
        },
        {
            id: 3,
            title: 'Sweet Carrot Cream',
            author: 'Kamilia Arina',
            description: 'Puree lembut dari wortel kukus yang dipadukan dengan susu',
            views: 114,
            image: Mpasi2
        },
        {
            id: 4,
            title: 'Sweet Carrot Cream',
            author: 'Kamilia Arina',
            description: 'Puree lembut dari wortel kukus yang dipadukan dengan susu',
            views: 114,
            image: Mpasi3
        }
    ];

    const recipesRepeated = [...Array(3)].flatMap(() => recipes);

    return (
        <section>
            <div className="container mx-auto py-20">
                <div className='text-center mb-7'>
                    <h1 className="font-extrabold text-3xl text-secondary-50">
                        Kategori Resep MPASI
                    </h1>
                    <p className="font-semibold text-neutral-90 mt-2">
                        Bunda nggak perlu bingung lagi! Yuk, coba resep MPASI dan pilih sesuai umur Anak Bunda
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`px-3 lg:px-8 py-2 font-extrabold shadow-lg rounded-full text-xs lg:text-sm transition-colors ${activeFilter === filter
                                ? 'bg-secondary-50 text-white'
                                : 'border-secondary-50 text-secondary-50 border-2'
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-0">
                    {recipesRepeated.map((recipe, index) => (
                        <div key={index} className="overflow-hidden border rounded-xl shadow-lg">
                            <div className="relative h-52">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full rounded-xl"
                                />
                                <div className="absolute bottom-0 rounded-b-lg left-0 w-full h-1/3 bg-gradient-to-t from-red-900 to-transparent flex flex-col justify-end p-4">
                                    <h3 className="text-white font-extrabold text-lg">{recipe.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                                            <Icon icon="ph:user" className="text-gray-600 text-xs" />
                                        </div>
                                        <span className="text-white font-bold text-sm">{recipe.author}</span>
                                    </div>
                                </div>

                                <button className="absolute bottom-3 right-3 rounded-md p-1">
                                    <Icon icon="mage:bookmark" className="text-white" width={26} height={25} />
                                </button>
                            </div>

                            <div className="p-4">
                                <p className="text-gray-600 text-sm">{recipe.description}</p>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center text-sm ml-3 text-secondary-50">
                                        <Icon icon="mdi:user" width={20} height={20} />
                                        <span className='font-bold ml-1'>{recipe.views} Dilihat</span>
                                    </div>
                                    <button className="bg-secondary-50 text-white px-5 py-1 rounded-md text-sm font-medium">
                                        Lihat
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KategoriResep;