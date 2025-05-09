import React from 'react';
import CoreBackground from "../../../assets/background-core.webp";

const coreValues = [
    {
        title: "Empati",
        iconUrl: "https://img.icons8.com/?size=100&id=79773&format=png&color=FFFFFF",
        outlineColor: "outline-amber-300",
        bgColor: "bg-amber-300",
    },
    {
        title: "Inovasi",
        iconUrl: "https://img.icons8.com/?size=100&id=61624&format=png&color=FFFFFF",
        outlineColor: "outline-blue-300",
        bgColor: "bg-blue-300",
    },
    {
        title: "Kolaborasi",
        iconUrl: "https://img.icons8.com/?size=100&id=59800&format=png&color=FFFFFF",
        outlineColor: "outline-red-400",
        bgColor: "bg-red-400",
    },
    {
        title: "Berkelanjutan",
        iconUrl: "https://img.icons8.com/?size=100&id=79779&format=png&color=FFFFFF",
        outlineColor: "outline-pink-900",
        bgColor: "bg-pink-900",
    },
];

const CoreValueItem = ({ title, iconUrl, outlineColor, bgColor }) => (
    <div className="flex items-center gap-2 lg:gap-5">
        <div className={`w-14 h-14 lg:w-20 lg:h-20 p-2.5 rounded-full outline outline-1 ${outlineColor} outline-offset-[-1px] flex justify-center items-center`}>
            <div className={`w-11 h-9 lg:w-16 lg:h-16 p-2.5 rounded-full ${bgColor} flex justify-center items-center`}>
                <img src={iconUrl} alt={title} className="w-6 lg:w-10" />
            </div>
        </div>
        <h3 className="md:text-lg lg:text-xl font-bold text-neutral-0">{title}</h3>
    </div>
);

const CoreValue = () => {
    return (
        <section
            className="relative py-10 lg:py-48 mb-14 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${CoreBackground})` }}
        >
            <div className="container mx-auto relative z-10">
                <div className="space-y-7 max-w-3xl">
                    <h1 className="font-extrabold text-3xl sm:text-4xl text-primary-90">Our Core Value</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {coreValues.map((value, index) => (
                            <CoreValueItem key={index} {...value} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValue;