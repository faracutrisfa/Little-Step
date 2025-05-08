import React from 'react';
import { Icon } from '@iconify/react';

const VisiMisi = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                {/* Vision Section */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
                    <div className="flex-shrink-0">
                        <div className="bg-green-500 rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center">
                            <div className="text-white text-3xl font-bold">3</div>
                            <div className="text-white text-xs text-center mt-1">GOOD HEALTH AND WELL-BEING</div>
                            <Icon icon="mdi:heartbeat" className="text-white text-3xl mt-2" />
                        </div>
                        <div className="bg-white border border-green-500 rounded-lg p-2 mt-2 w-32 flex flex-col items-center justify-center">
                            <div className="text-green-500 font-bold text-2xl">3.2</div>
                            <div className="text-green-500 text-xs text-center">NEONATAL AND CHILD MORTALITY</div>
                        </div>
                    </div>

                    <div className="flex-grow">
                        <h2 className="text-gray-700 text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-gray-600 mb-6">
                            Menjadi platform terpercaya yang berkontribusi nyata dalam mengurangi angka kematian bayi
                            dan balita di Indonesia melalui edukasi, pemantauan, dan dukungan kesehatan yang
                            berkelanjutan bagi keluarga.
                        </p>

                        <div className=" p-4 rounded-lg">
                            <h3 className="text-gray-700 font-bold mb-2">SDGS 3.2 Neonatal Child and Mortality</h3>
                            <p className="text-gray-600">
                                Mengakhiri kematian yang dapat dicegah pada bayi baru lahir
                                dan anak di bawah usia 5 tahun pada tahun 2030.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Mission Section */}
                <div className="mb-16">
                    <h2 className="text-gray-700 text-3xl font-bold mb-6 text-center">Our Mission</h2>
                    <p className="text-gray-600 text-center mb-12">
                        Kami percaya bahwa setiap anak berhak tumbuh sehat, kuat, dan bahagia sejak hari
                        pertama kehidupannya, oleh karena itu kami memiliki misi :
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Info dan Panduan */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-yellow-100 rounded-full p-4 flex-shrink-0">
                                <Icon icon="mdi:file-document-outline" className="text-4xl text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-gray-700 font-bold mb-2">Informasi dan Panduan</h3>
                                <p className="text-gray-600">
                                    Menyediakan informasi dan panduan kesehatan anak usia dini yang akurat,
                                    mudah diakses, dan berbasis ilmu medis terkini.
                                </p>
                            </div>
                        </div>

                        {/* Berkolaborasi */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="bg-red-100 rounded-full p-4">
                                    <Icon icon="mdi:message-outline" className="text-4xl text-red-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-gray-700 font-bold mb-2">Berkolaborasi</h3>
                                <p className="text-gray-600">
                                    Berkolaborasi dengan berbagai pihak, untuk memperluas dampak kesehatan anak secara nasional.
                                </p>
                            </div>
                        </div>

                        {/* Sadar dan Aktif */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                                <Icon icon="mdi:camera" className="text-4xl text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-gray-700 font-bold mb-2">Sadar dan Aktif</h3>
                                <p className="text-gray-600">
                                    Mendorong orang tua untuk lebih sadar dan aktif dalam memantau tumbuh kembang serta status gizi anak.
                                </p>
                            </div>
                        </div>

                        {/* Ekosistem Digital */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-purple-100 rounded-full p-4 flex-shrink-0">
                                <Icon icon="mdi:devices" className="text-4xl text-purple-800" />
                            </div>
                            <div>
                                <h3 className="text-gray-700 font-bold mb-2">Ekosistem Digital</h3>
                                <p className="text-gray-600">
                                    Membangun ekosistem digital yang mendukung pencegahan stunting, malnutrisi, dan penyakit yang dapat dicegah sejak dini.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Baby Image */}
                <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-90">
                    <img
                        src="/api/placeholder/250/250"
                        alt="Baby with blocks"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default VisiMisi;