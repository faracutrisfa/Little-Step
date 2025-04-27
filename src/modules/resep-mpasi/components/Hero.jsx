import React from 'react'
import { Icon } from '@iconify/react'

const Hero = () => {
    return (
        <section className='bg-primary-30'>
            <div className='continer py-10'>
                <div className="text-center container">
                    <h1 className="text-primary-0 font-extrabold text-4xl">
                        Cek Asupan Gizi Si Kecil dengan
                    </h1>
                    <h1 className="font-extrabold text-4xl text-secondary-70">
                        Kalkulator <span className="text-primary-70">Gizi</span>
                    </h1>
                    <p className="font-semibold text-neutral-90 mt-2">
                        "Setiap sendok makanan yang masuk harus penuh makna." Dengan menghitung gizi, orang tua bisa memastikan asupan harian bayi mencukupi kebutuhan protein, lemak, karbohidrat, serta vitamin dan mineral penting."
                    </p>

                    <div className="flex justify-center mt-7">
                        <div className="flex items-center border-2 border-primary-0 rounded-xl overflow-hidden w-full max-w-xl ">
                            <div className="px-4 text-neutral-90 flex items-center">
                                <Icon icon="mdi:magnify" width="24" height="24" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari Resep disini"
                                className="py-3 w-full outline-none bg-primary-30 text-neutral-70"
                            />
                            <button className="bg-primary-0 text-white px-6 py-3 font-semibold hover:bg-primary-80 transition rounded-l-xl">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
