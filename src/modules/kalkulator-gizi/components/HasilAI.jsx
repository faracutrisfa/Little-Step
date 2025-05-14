import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import BayiProfile from "../../../assets/bayi-profile.webp"
import BeratIdeal from './BeratIdeal'
import EstimasiGizi from './EstimasiGizi'
import RekomendasiMakanan from './RekomendasiMakanan'
import Premium from './Premium'
import PerbandinganTarget from './PerbandinganTarget'

const HasilAI = () => {
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
        <div className="mt-12 container space-y-8 pb-14">
            <div className="flex items-center gap-2 text-green-600 font-semibold mb-6">
                <Icon icon="lets-icons:check-fill" className='w-8 h-8' />
                <span className='text-sm lg:text-lg'>Hasil AI Scanmu sudah keluar !</span>
            </div>
            <EstimasiGizi variant='secondary' />
            <PerbandinganTarget />
            <div className='flex items-center justify-center gap-4'>
                <button className='rounded-2xl px-4 lg:px-8 py-3 font-extrabold transition duration-200 hover:scale-105 border-2 border-secondary-50 bg-secondary-50 text-white shadow-xl hover:bg-primary-70'>
                    Simpan Hasil
                </button>
                <button className='rounded-2xl px-4 lg:px-8 py-3 font-extrabold transition duration-200 hover:scale-105 border-2 border-secondary-50 text-secondary-50 shadow-xl hover:border-primary-70'>
                    Bagikan Hasil
                </button>
            </div>
        </div>
    )
}

export default HasilAI
