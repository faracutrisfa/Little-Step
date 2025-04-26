import React from 'react';

import NeonatalImg from '../../../assets/neonatal.webp';
import InfasiAwalImg from '../../../assets/infasi-awal.webp';
import InfasiLanjutanImg from '../../../assets/infasi-lanjutan.webp';
import ToddlerImg from '../../../assets/toddler.webp';

const FaseTumbuh = () => {
    const phases = [
        {
            title: "Fase Neonatal",
            age: "0-28 Hari",
            desc: "Bayi beradaptasi dengan lingkungan luar rahim dan mulai menunjukkan refleks dasar seperti mengisap dan menggenggam.",
            image: NeonatalImg,
        },
        {
            title: "Fase Infasi Awal",
            age: "1-6 Bulan",
            desc: "Bayi mulai mengangkat kepala, menggulingkan tubuh, dan menunjukkan minat pada wajah orang di sekitarnya.",
            image: InfasiAwalImg,
        },
        {
            title: "Fase Infasi Lanjutan",
            age: "6-12 Bulan",
            desc: "Bayi mulai merangkak, duduk, berdiri dengan bantuan, dan mengeluarkan suara sederhana seperti 'ba-ba'.",
            image: InfasiLanjutanImg,
        },
        {
            title: "Fase Toddler",
            age: "1-2 Tahun",
            desc: "Anak mulai berjalan tanpa bantuan, berbicara dengan kata-kata sederhana, dan menunjukkan perilaku sosial seperti bermain bersama teman sebaya.",
            image: ToddlerImg,
        },
    ];

    const BubbleSvg = ({ color }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="93" viewBox="0 0 105 93" fill="none">
            <ellipse cx="47.625" cy="19.6523" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="24.875" cy="31.746" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="23.25" cy="58.957" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="47.625" cy="72.5622" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="75.25" cy="24.1874" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="81.75" cy="43.8398" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="75.25" cy="63.4921" rx="22.75" ry="19.6523" fill={color} />
            <ellipse cx="55.75" cy="46.8632" rx="22.75" ry="19.6523" fill={color} />
        </svg>
    );

    return (
        <section>
            <div className="container py-10">
                <div className="mb-10 text-center">
                    <h1 className="text-primary-0 font-bold text-2xl lg:text-4xl mb-2">
                        Fase Tumbuh Kembang Anak
                    </h1>
                    <p className="text-neutral-90 font-semibold text-sm lg:text-base">
                        Tumbuh kembang anak, khususnya hingga usia 2 tahun, dapat dibagi dalam beberapa fase penting yang berpengaruh pada perkembangan fisik, motorik, kognitif, dan sosial.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 relative">
                    {phases.map((phase, index) => (
                        <div key={`phase-${index}`} className="flex flex-col items-center text-center z-10 relative">
                            <div className={`relative w-[105px] h-[93px] flex items-center justify-center mb-4 ${index % 2 !== 0 ? 'lg:order-2 lg:mt-4' : ''}`}>
                                <BubbleSvg color={index % 2 === 0 ? "#E87864" : "#8ACCFF"} />
                                <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="absolute w-14 h-14 object-contain"
                                />
                            </div>

                            {index !== phases.length - 1 && (
                                <div
                                    className={`hidden lg:block absolute top-1/2 right-[-60px] w-[120px] h-[2px] border-t-2 border-dashed border-primary-50  ${index % 2 === 0 ? 'rotate-[20deg]' : '-rotate-[20deg]'}`}
                                ></div>
                            )}

                            <h3 className="font-bold text-xl">{phase.title}</h3>
                            <p className={`font-bold ${index % 2 === 0 ? 'text-[#E87864]' : 'text-[#8ACCFF]'}`}>
                                {phase.age}
                            </p>
                            <p className="text-sm text-neutral-80 mt-2 max-w-xs">{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaseTumbuh;