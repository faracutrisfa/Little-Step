import React from 'react';

const ContactInfo = () => (
    <div className="grid grid-cols-2 gap-5">
        {[
            {
                title: "Chat dengan Kami",
                content: (
                    <>
                        Punya pertanyaan atau butuh panduan lebih lanjut?
                        <br />
                        <a href="mailto:littlestep@gmail.com" className="font-bold text-primary-70 underline">
                            littlestep@gmail.com
                        </a>
                    </>
                ),
            },
            {
                title: "Jam",
                content: (
                    <>
                        Silakan hubungi pada jam berikut
                        <br />
                        <span className="font-bold text-primary-70">(Senin–Jumat, 08.00–17.00 WIB)</span>
                    </>
                ),
            },
        ].map(({ title, content }) => (
            <div key={title}>
                <h3 className="text-lg font-bold lg:font-extrabold">{title}</h3>
                <p className='text-sm lg:text-base'>{content}</p>
            </div>
        ))}
    </div>
);

const Tags = () => (
    <div className="mt-5 flex gap-2 text-sm font-bold lg:font-extrabold text-white">
        {['Health', 'Nutrition', 'Baby'].map(tag => (
            <span key={tag} className="rounded-lg bg-primary-50 px-4 py-1">{tag}</span>
        ))}
    </div>
);

const NutritionForm = () => (
    <form className="space-y-4">
        <input
            type="text"
            name="baby-name"
            placeholder="Nama Lengkap Bayi"
            className="w-full rounded-lg bg-primary-30 text-sm lg:text-base p-3 font-bold lg:font-extrabold placeholder-primary-50"
        />
        <div className="flex gap-4">
            {[
                { id: "height", placeholder: "Tinggi Badan (m)" },
                { id: "weight", placeholder: "Berat Badan (kg)" },
            ].map(({ id, placeholder }) => (
                <input
                    key={id}
                    type="text"
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    className="w-1/2 rounded-lg bg-primary-30 text-sm lg:text-base p-3 font-bold lg:font-extrabold placeholder-primary-50"
                />
            ))}
        </div>

        <div className="flex gap-4">
            {[
                { id: "gender-male", label: "Laki-laki" },
                { id: "gender-female", label: "Perempuan" },
            ].map(({ id, label }) => (
                <label
                    key={id}
                    htmlFor={id}
                    className="flex w-1/2 items-center gap-2 rounded-lg bg-primary-30 text-sm lg:text-base p-3 font-bold lg:font-extrabold text-primary-50"
                >
                    <input type="radio" id={id} name="gender" className="accent-primary-70" />
                    {label}
                </label>
            ))}
        </div>

        <div>
            <label htmlFor="birth-date" className="mb-1 block font-bold">Tanggal Lahir</label>
            <div className="flex items-center gap-5">
                <input
                    type="date"
                    id="birth-date"
                    name="birth-date"
                    className="w-1/2 rounded-lg bg-primary-30 text-sm lg:text-base p-3 font-bold lg:font-extrabold text-primary-50"
                />
                <p className="text-sm font-bold lg:font-extrabold text-primary-50">6 bulan 0 hari</p>
            </div>
        </div>

        <div>
            <label htmlFor="food-ingredients" className="mb-1 block font-bold">
                Masukkan Bahan Makanan yang Bunda miliki
            </label>
            <textarea
                id="food-ingredients"
                name="food-ingredients"
                placeholder="Tuliskan Bahan makanan apa saja yang Bunda miliki"
                className="h-24 w-full resize-none rounded-lg bg-primary-30 text-sm lg:text-base p-3 font-bold placeholder-primary-50"
            />
        </div>

        <button
            type="submit"
            className="w-full rounded-full bg-primary-70 py-3 font-bold lg:font-extrabold text-white hover:bg-primary-90"
        >
            Submit
        </button>
    </form>
);

const Kalkulator = () => (
    <section>
        <div className="container relative grid grid-cols-1 gap-14 lg:gap-8 py-14 md:grid-cols-2">
            <div className="flex flex-col justify-center">
                <h1 className="mb-1 text-2xl lg:text-3xl font-extrabold">Kalkulator Gizi</h1>
                <p className="text-sm lg:text-base mb-4">
                    Kami menggunakan rumus standar BMI untuk membantu Bunda memahami kebutuhan gizi si kecil secara lebih akurat.
                </p>
                <ContactInfo />
                <Tags />
            </div>

            <div className="relative overflow-hidden rounded-xl">
                <NutritionForm />
            </div>
        </div>
    </section>
);

export default Kalkulator;