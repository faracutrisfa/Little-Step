import React from 'react';
import { Icon } from '@iconify/react';
import SdgImage from "../../../assets/sdg.webp";
import HeroMission from "../../../assets/hero-mision.webp";

const VisiMisi = () => {
    return (
        <section className="py-14">
            <div className="container space-y-16 lg:space-y-24">
                {/* Vision Section */}
                <article className="flex flex-wrap lg:flex-nowrap gap-16 items-center">
                    <figure className="w-full lg:w-1/2">
                        <img src={SdgImage} alt="Ilustrasi Tujuan SDGs" className="w-full" />
                    </figure>
                    <div className="w-full space-y-6">
                        <header className="space-y-2">
                            <h2 className="text-2xl lg:text-4xl font-bold">Our Vision</h2>
                            <p className="font-semibold text-zinc-600 text-sm lg:text-base">
                                Menjadi platform terpercaya yang berkontribusi nyata dalam mengurangi angka kematian bayi dan balita di Indonesia melalui edukasi, pemantauan, dan dukungan kesehatan yang berkelanjutan bagi keluarga.
                            </p>
                        </header>
                        <div className="flex items-start gap-4">
                            <img
                                src="https://img.icons8.com/ios-filled/100/6EA3CC/breastfeeding.png"
                                alt="Ikon SDGs"
                                className="w-16"
                            />
                            <div>
                                <h3 className="text-lg font-bold text-zinc-800">
                                    SDGS 3.2 Neonatal Child and Mortality
                                </h3>
                                <p className="font-semibold text-zinc-600 text-sm lg:text-base">
                                    Mengakhiri kematian yang dapat dicegah pada bayi baru lahir dan anak di bawah usia 5 tahun pada tahun 2030.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Mission Section */}
                <article className="space-y-12">
                    <header className="text-center space-y-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">Our Mission</h2>
                        <p className="lg:text-lg font-bold text-zinc-700">
                            Kami percaya bahwa setiap anak berhak tumbuh sehat, kuat, dan bahagia sejak hari pertama kehidupannya. Oleh karena itu, kami memiliki misi:
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                        <div className="space-y-8 max-w-sm mx-auto">
                            <MissionItem
                                icon="https://img.icons8.com/?size=100&id=79773&format=png&color=FFFFFF"
                                color="bg-amber-300"
                                outlineColor="outline-amber-300"
                                title="Informasi dan Panduan"
                                description="Menyediakan informasi dan panduan kesehatan anak usia dini yang akurat, mudah diakses, dan berbasis ilmu medis terkini."
                            />
                            <MissionItem
                                icon="https://img.icons8.com/?size=100&id=61624&format=png&color=FFFFFF"
                                color="bg-blue-300"
                                outlineColor="outline-blue-300"
                                title="Sadar dan Aktif"
                                description="Mendorong orang tua untuk lebih sadar dan aktif dalam memantau tumbuh kembang serta status gizi anak."
                            />
                        </div>

                        <figure className="w-full max-w-md mx-auto">
                            <img src={HeroMission} alt="Ilustrasi Misi" className="w-full" />
                        </figure>

                        <div className="space-y-8 max-w-sm mx-auto">
                            <MissionItem
                                icon="https://img.icons8.com/?size=100&id=59800&format=png&color=FFFFFF"
                                color="bg-red-400"
                                outlineColor="outline-red-400"
                                title="Berkolaborasi"
                                description="Berkolaborasi dengan berbagai pihak untuk memperluas dampak kesehatan anak secara nasional."
                                reverse
                            />
                            <MissionItem
                                icon="https://img.icons8.com/?size=100&id=79779&format=png&color=FFFFFF"
                                color="bg-pink-900"
                                outlineColor="outline-pink-900"
                                title="Ekosistem Digital"
                                description="Membangun ekosistem digital yang mendukung pencegahan stunting, malnutrisi, dan penyakit yang dapat dicegah sejak dini."
                                reverse
                            />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

const MissionItem = ({ icon, outlineColor, color, title, description, reverse = false }) => (
    <div className={`flex items-center gap-4 ${reverse ? 'flex-row-reverse text-right' : ''}`}>
        <div className={`w-16 h-16 lg:w-20 lg:h-20 p-2.5 rounded-full outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5 ${outlineColor}`}>
            <div className={`${color} w-12 h-11 lg:w-16 lg:h-16 p-2.5 rounded-full inline-flex flex-col justify-start items-start gap-2.5 `}>
                <img src={icon} alt="icon" className='w-20' />
            </div>
        </div>
        <div>
            <h3 className="lg:text-xl font-bold">{title}</h3>
            <p className="text-zinc-600 font-medium text-sm lg:text-base">{description}</p>
        </div>
    </div>
);

export default VisiMisi;