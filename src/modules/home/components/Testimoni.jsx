import React from "react";
import "keen-slider/keen-slider.min.css";
import { Icon } from "@iconify/react";
import { useKeenSlider } from "keen-slider/react";
import TestiImage from "/src/assets/testi-image.png";
import TestiImage2 from "/src/assets/testi-image2.png";

const testimonials = [
    {
        rating: 5,
        text: "Awalnya saya bingung soal MPASI, apalagi anak saya susah makan. Tapi sejak pakai platform ini, saya bisa cek status gizinya dan coba resep yang sesuai usianya. Jadi lebih tenang dan percaya diri!",
        name: "Rania Yasmin",
        location: "Malang",
        image: TestiImage,
    },
    {
        rating: 4,
        text: "Fitur grafik tumbuh kembangnya bantu saya pantau pertumbuhan anak secara rutin. Notifikasinya juga bikin saya sadar lebih cepat kalau ada yang nggak normal. Sangat membantu!",
        name: "Cut Risfa Zuhra",
        location: "Pekanabaru",
        image: TestiImage2,
    },
    {
        rating: 3,
        text: "Fitur grafik tumbuh kembangnya bantu saya pantau pertumbuhan anak secara rutin. Notifikasinya juga bikin saya sadar lebih cepat kalau ada yang nggak normal. Sangat membantu!",
        name: "Ananta Risky",
        location: "Majalengka",
        image: TestiImage,
    },
];

const TestimonialCard = ({ rating, text, name, location, image }) => (
    <div className="keen-slider__slide flex flex-col rounded-xl p-6 shadow-lg bg-white">
        <div className="flex items-center mb-4">
            {Array.from({ length: rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl mr-1">★</span>
            ))}
        </div>
        <p className="text-neutral-80 text-sm mb-6">{text}</p>
        <div className="flex items-center gap-3 mt-auto">
            <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h5 className="font-extrabold text-sm lg:text-base">{name}</h5>
                <p className="text-sm text-neutral-60">{location}</p>
            </div>
        </div>
    </div>
);


const ArrowButton = ({ onClick, direction = "left" }) => (
    <button
        onClick={onClick}
        className="bg-white shadow px-1 py-1 lg:px-3 lg:py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label={`Slide ${direction}`}
    >
        <Icon
            icon={direction === "left" ? "mdi:chevron-left" : "mdi:chevron-right"}
            className="text-2xl text-gray-700"
        />
    </button>
);

const Testimoni = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 24,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                    spacing: 10
                },
            },
        },
        loop: true,
    });

    return (
        <section className="relative py-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2/3 bg-primary-10 z-0" />

            <div className="relative z-10 container mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-primary-0 font-bold text-2xl lg:text-4xl mb-2">
                        Real Stories, Real Satisfaction
                    </h1>
                    <p className="text-neutral-90 font-semibold text-sm lg:text-base">
                        Kisah nyata para orang tua yang menemukan kemudahan dan ketenangan saat mendampingi tumbuh kembang si kecil bersama kami.
                    </p>
                </div>

                <div className="relative container ">
                    <div ref={sliderRef} className="keen-slider py-5 lg:px-3">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>

                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
                        <ArrowButton onClick={() => instanceRef.current?.prev()} direction="left" />
                    </div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <ArrowButton onClick={() => instanceRef.current?.next()} direction="right" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimoni;
