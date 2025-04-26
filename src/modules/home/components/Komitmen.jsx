import React from 'react'
import HeroKomitmen from "../../../assets/hero_komitmen.webp"
import MotherIcon from "../../../assets/mother.webp"
import AmbulanceIcon from "../../../assets/ambulance.webp"
import DeviceIcon from "../../../assets/devices.webp"
import NurseIcon from "../../../assets/nurse.webp"

const komitmenList = [
  {
    title: "Terpercaya",
    icon: MotherIcon,
    bg: "bg-amber-50",
    description: "Sudah digunakan oleh ribuan orang tua di Indonesia untuk memantau gizi dan tumbuh kembang anak.",
  },
  {
    title: "Ilmiah",
    icon: AmbulanceIcon,
    bg: "bg-secondary-10",
    description: "Berdasarkan standar WHO & Kementerian Kesehatan untuk penilaian pertumbuhan dan gizi anak.",
  },
  {
    title: "Lengkap",
    icon: DeviceIcon,
    bg: "bg-secondary-30/60",
    description: "Satu platform untuk kalkulator gizi, resep MPASI, grafik pertumbuhan, dan insight tumbuh kembang.",
  },
  {
    title: "Profesional",
    icon: NurseIcon,
    bg: "bg-primary-30",
    description: "Dirancang bersama dokter anak & ahli gizi untuk memastikan keakuratan dan keamanan informasi.",
  }
]

const Komitmen = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto grid lg:grid-cols-2 items-center">
        <div className='flex justify-center'>
          <img src={HeroKomitmen} alt="Komitmen" className="w-full max-w-md mx-auto md:mx-0" />
        </div>

        <div>
          <div className="mb-10 text-center lg:text-start">
            <h1 className="text-primary-0 font-bold text-2xl lg:text-4xl mb-2">
              Komitmen Kami
            </h1>
            <p className="text-neutral-90 font-semibold text-sm lg:text-base">
              Setiap angka punya makna. Kami bantu menerjemahkannya menjadi langkah nyata untuk gizi dan pertumbuhan anak yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {komitmenList.map(({ title, icon, bg, description }) => (
              <div key={title} className="flex items-center gap-2 lg:gap-4">
                <div className={`${bg} rounded-lg flex px-1 py-2 lg:px-2 lg:py-3 justify-center items-center`}>
                  <img src={icon} alt={title} className="w-32 lg:w-40" />
                </div>
                <div>
                  <h2 className="font-bold text-base lg:text-xl">{title}</h2>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Komitmen