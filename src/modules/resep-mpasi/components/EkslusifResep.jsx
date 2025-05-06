import React from 'react';
import { Icon } from '@iconify/react';
import ImageMpasi1 from "../../../assets/image_mpasi1.webp"
import ImageMpasi2 from "../../../assets/image_mpasi2.webp"
import ImageMpasi3 from "../../../assets/image_mpasi3.webp"
import ImageMpasi4 from "../../../assets/image_mpasi4.webp"


const EkslusifResep = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className='text-center mb-7'>
                    <h1 className="font-extrabold text-3xl text-primary-0">
                        Ekslusif Resep MPASI
                    </h1>
                    <p className="font-semibold text-neutral-90 mt-2">
                        Nikmati resep MPASI eksklusif selama 1 bulan lengkap dengan kandungan gizi dan vitamin di setiap menunya – bantu si kecil tumbuh sehat dan ceria. Dapatkan akses ke 30+ resep MPASI bergizi dengan panduan vitamin harian – praktis, sehat, dan dirancang oleh ahli gizi terpercaya!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="md:col-span-2 relative rounded-lg overflow-hidden shadow-md">
                        <img
                            src={ImageMpasi2}
                            alt="Person preparing baby food"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-white/80 to-transparent w-full">
                            <h2 className="text-4xl font-extrabold text-primary-0">30+ Akses Resep</h2>
                            <p className="text-[#3D93D7] font-bold mt-2">
                                Resep MPASI bernutrisi berbahan alami, dikurasi khusus untuk kebutuhan harian bayi 6–12 bulan. Ada kandungan gizinya juga, lho!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className='flex gap-5 lg:gap-0 lg:justify-between'>
                            <div className="rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={ImageMpasi1}
                                    alt="Baby food puree samples"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={ImageMpasi4}
                                    alt="Baby food spoons"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                            <img
                                src={ImageMpasi3}
                                alt="Child eating"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EkslusifResep;