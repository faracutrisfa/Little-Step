import React from 'react';
import HeroBackground from "../../../assets/hero-background.webp";

const Hero = () => {
    return (
        <section
            className="relative py-20 lg:py-40 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HeroBackground})` }}
        >
            <div className="container mx-auto relative z-10">
                <div className="space-y-7 md:w-1/2">
                    <h1 className="font-extrabold text-3xl lg:text-5xl text-primary-90">
                        Setiap <span className="text-secondary-50">Langkah Kecil,</span> Arti Besar untuk <span className="text-primary-70">Masa Depan Anak</span>
                    </h1>
                    <p className="text-neutral-90 text-sm lg:text-base">
                        LittleStep hadir untuk mendampingi para orang tua, khususnya ibu, dalam memantau tumbuh kembang anak secara lebih mudah, aman, dan terpercaya. Melalui fitur-fitur interaktif, konten edukatif berbasis data medis, serta akses ke tenaga ahli, kami berkomitmen menjadi langkah awal yang berarti dalam perjalanan besar merawat si kecil.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;