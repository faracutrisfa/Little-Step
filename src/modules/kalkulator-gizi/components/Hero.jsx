import React from "react";

const stats = [
    {
        img: "https://img.icons8.com/ios-filled/100/6EA3CC/breastfeeding.png",
        value: "120.000",
        label: "Bunda yang telah kami Bantu",
    },
    {
        img: "https://img.icons8.com/?size=100&id=69588&format=png&color=6EA3CC",
        value: "20.000",
        label: "Resep yang telah kami bagikan",
    },
    {
        img: "https://img.icons8.com/?size=100&id=100966&format=png&color=6EA3CC",
        value: "154.000",
        label: "Bayi yang telah menghitung gizinya",
    },
];

const Hero = () => {
    return (
        <section className="relative">
            <div className="absolute top-0 left-0 w-full h-2/3 bg-secondary-10 -z-10" />

            <div className="container py-14 relative z-10">
                <div className="text-center">
                    <h1 className="text-primary-0 font-extrabold text-4xl">
                        Yuk, Bunda! Cek kebutuhan gizi si kecil hari ini
                    </h1>
                    <h1 className="font-extrabold text-4xl text-secondary-70">
                        Kalkulator <span className="text-primary-70">Gizi</span>
                    </h1>
                    <p className="font-semibold text-neutral-90 mt-2">
                        Karena setiap sendok yang Bunda berikan, adalah langkah kecil untuk masa depan besar si buah hati.
                    </p>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 mt-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center rounded-xl gap-1 lg:gap-3 bg-white px-6 py-6 shadow-md"
                        >
                            <img
                                src={stat.img}
                                alt="Stat Icon"
                                className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                            />
                            <h1 className="text-primary-0 font-extrabold text-xl lg:text-3xl">
                                {stat.value}
                            </h1>
                            <p className="font-bold text-center text-sm lg:text-lg text-neutral-90">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;