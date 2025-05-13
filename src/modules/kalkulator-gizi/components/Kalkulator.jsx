import React, { useState } from 'react'
import FoodInput from './FoodInput'
import HasilGizi from './HasilGizi'

const Kalkulator = () => {
    const [showResult, setShowResult] = useState(false)

    const handleSubmit = () => {
        setShowResult(true)
    }

    return (
        <section className='py-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 container gap-10 lg:gap-16'>
                <div>
                    <h1 className="text-4xl font-extrabold text-zinc-800 mb-4">Kalkulator Gizi</h1>
                    <p className="text-gray-600 font-semibold">
                        Kami menggunakan rumus standar BMI untuk membantu Bunda memahami kebutuhan gizi si kecil secara lebih akurat.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8">
                        <div>
                            <h2 className="text-lg font-extrabold text-zinc-800 mb-1">Chat dengan Kami</h2>
                            <p className="font-semibold">Punya pertanyaan atau butuh panduan lebih lanjut?</p>
                            <a href="mailto:littlestep@gmail.com" className="text-primary-70 font-semibold hover:underline">
                                littlestep@gmail.com
                            </a>
                        </div>

                        <div>
                            <h2 className="text-lg font-extrabold text-zinc-800 mb-1">Jam</h2>
                            <p className="font-semibold">
                                Silakan hubungi pada jam berikut <br />
                                <span className="text-primary-70 font-semibold">(Senin–Jumat, 08.00–17.00 WIB)</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-5">
                        {["Health", "Nutrition", "Baby"].map((tag) => (
                            <span key={tag} className="p-2.5 bg-blue-300/70 text-white font-extrabold rounded-xl">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <FoodInput handleSubmit={handleSubmit} />
            </div>

            {showResult && <HasilGizi />}
        </section>
    )
}

export default Kalkulator