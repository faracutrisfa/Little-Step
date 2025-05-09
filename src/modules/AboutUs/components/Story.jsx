import React from 'react';
import frame1 from "../../../assets/frame-story1.webp";
import frame2 from "../../../assets/frame-story2.webp";
import frame3 from "../../../assets/frame-story3.webp";

const stories = [
    {
        image: frame3,
        quote: "Aku kadang bingung, gizi anakku udah cukup atau belum. Kadang cuma kira-kira aja, asal dia makan dan kenyang. Tapi aku nggak tahu pasti berapa kalori atau proteinnya.",
        name: "Ajeng",
    },
    {
        image: frame2,
        quote: "MPASI kadang ditolak, aku sampai bingung harus variasi menu kayak gimana lagi. Kadang cuma bisa kasih yang penting dimakan dulu, urusan gizinya belakangan.",
        name: "Fitri",
    },
    {
        image: frame1,
        quote: "Kadang aku ngerasa sedih loh… anakku aktif, tapi pas dicek KMS katanya kurang berat badan. Langsung kepikiran macam-macam. Padahal dia nggak sakit dan aktif.",
        name: "Nelly",
    },
];

const Story = () => {
    return (
        <section className="bg-secondary-10">
            <div className="container py-14 space-y-10">
                <header className="text-center space-y-4 px-4">
                    <h1 className="text-primary-00 font-bold text-2xl md:text-3xl lg:text-4xl">
                        Our Story
                    </h1>
                    <p className="text-neutral-90 font-semibold max-w-2xl mx-auto text-sm md:text-base">
                        Cerita kami berawal dari keresahan sederhana orang tua yang merasa bingung, cemas, dalam mendampingi tumbuh kembang Si Kecil.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row gap-8 px-4">
                    {stories.map((story, index) => (
                        <article key={index} className="relative w-full overflow-hidden rounded-xl">
                            <figure className="relative">
                                <img
                                    src={story.image}
                                    alt={`Story ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-white px-3 xl:px-5 py-8 text-sm md:text-[10px] xl:text-base lg:space-y-3 font-semibold text-center">
                                    <p className="italic leading-relaxed pt-3">"{story.quote}"</p>
                                    <h6 className="not-italic font-bold">~ {story.name} ~</h6>
                                </figcaption>
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;