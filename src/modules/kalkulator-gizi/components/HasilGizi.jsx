import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import BayiProfile from "../../../assets/bayi-profile.webp"
import BeratIdeal from './BeratIdeal'
import EstimasiGizi from './EstimasiGizi'
import RekomendasiMakanan from './RekomendasiMakanan'
import Premium from './Premium'

const HasilGizi = () => {
    const data = {
        nama: "Kenzo Arrayan",
        berat: "7.6 Kg",
        tinggi: "66 Cm",
        usia: "6 Bulan 0 Hari",
        status: "Sehat",
        range: "7.1 – 7.94 Kg",
        bahan: ["Wortel", "Kentang", "Ayam"],
        gizi: {
            Energi: "100 kkal",
            Protein: "8 g",
            Lemak: "3 g",
            Karbohidrat: "15 g",
            ZatBesi: "1.3 mg",
            VitaminA: "250 mcg",
        },
    }

    return (
        <div className="mt-12 container space-y-8">
            <div className="flex items-center gap-2 text-green-600 font-semibold mb-6">
                <Icon icon="lets-icons:check-fill" className='w-8 h-8' />
                <span className='text-sm lg:text-lg'>Hasil Kalkulator Gizimu sudah Keluar !</span>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="flex items-center gap-4">
                        <img src={BayiProfile} alt="Foto Bayi" className="w-20 h-20 rounded-full object-cover" />
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-1">Hasil Kalkulator Gizi</h2>
                            <p className="text-base md:text-lg">
                                <span className="font-semibold">Nama:</span> {data.nama}
                            </p>
                            <p className="text-base md:text-lg">
                                {data.berat} / {data.tinggi}
                            </p>
                            <p className="text-base md:text-lg">{data.usia}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-zinc-800 text-lg md:text-xl mb-1">Hasil</h3>
                        <p className="text-zinc-700 text-sm lg:text-base font-semibold">
                            Bayi Bunda terindikasi {data.status}dengan berat badan ideal, yaitu antara {data.range}. Si kecil berada dalam kategori gizi baik, sesuai dengan standar WHO untuk usianya.
                        </p>
                    </div>
                </div>
            </div>
            <BeratIdeal />
            <EstimasiGizi />
            <RekomendasiMakanan />
            <Premium />
            <div className='flex items-center justify-center gap-4'>
                <button className='rounded-2xl px-4 lg:px-8 py-3 font-extrabold transition duration-200 hover:scale-105 border-2 bg-primary-20 text-white shadow-xl hover:bg-primary-70'>
                    Simpan Hasil
                </button>
                <button className='rounded-2xl px-4 lg:px-8 py-3 font-extrabold transition duration-200 hover:scale-105 border-2 border-primary-20 text-primary-20 shadow-xl hover:border-primary-70'>
                    Bagikan Hasil
                </button>
            </div>
        </div>
    )
}

export default HasilGizi
