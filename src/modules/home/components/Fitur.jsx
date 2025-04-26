import React from 'react';
import { Icon } from '@iconify/react';
import Fitur1 from '../../../assets/fitur1.webp';
import Fitur2 from '../../../assets/fitur2.webp';
import Fitur3 from '../../../assets/fitur3.webp';
import Fitur4 from '../../../assets/fitur4.webp';

const fiturList = [
  {
    img: Fitur1,
    icon: 'material-symbols-light:monitor-heart-rounded',
    title: 'Grafik Tumbuh Kembang Bayi',
    description: 'Pantau pertumbuhan anak dengan grafik interaktif sesuai standar WHO.',
    iconBg: 'bg-yellow-400',
  },
  {
    img: Fitur2,
    icon: 'carbon:cookie',
    title: 'Resep MPASI Sesuai Usia',
    description: 'Temukan resep MPASI yang lezat dan sesuai dengan usia serta kebutuhan gizi anak.',
    iconBg: 'bg-primary-50',
  },
  {
    img: Fitur3,
    icon: 'lsicon:order-outline',
    title: 'Cek Status Gizi Anak',
    description: 'Ketahui status gizi si kecil secara instan berdasarkan data berat dan tinggi badan.',
    iconBg: 'bg-secondary-50',
  },
  {
    img: Fitur4,
    icon: 'fluent:scan-camera-20-regular',
    title: 'Scan Makanan Berbasis AI',
    description: 'Pantau pertumbuhan anak dengan grafik interaktif sesuai standar WHO.',
    iconBg: 'bg-fuchsia-900',
  },
];

const Fitur = () => {
  return (
    <section className="bg-primary-30">
      <div className="container py-10">
        <div className="mb-10 text-center">
          <h1 className="text-primary-0 font-bold text-2xl lg:text-4xl mb-2">
            Fitur Kami
          </h1>
          <p className="text-neutral-90 font-semibold text-sm lg:text-base">
            Littlestep hadir sebagai respons terhadap permasalahan serius yang dihadapi oleh banyak orang tua dalam memastikan tumbuh kembang anak yang sehat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 place-items-center">
          {fiturList.map((fitur, index) => (
            <div key={index} className="relative w-[270px] bg-[#E8F6FF] rounded-2xl overflow-hidden">
              <div className="w-full h-[200px] relative">
                <img
                  src={fitur.img}
                  alt={fitur.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <svg
                  className="absolute bottom-0 left-0 w-full h-[80px]"
                  viewBox="0 0 270 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 14.6952C0 14.6952 25.3125 -3.22095 50.625 0.511578C75.9375 4.2441 116.827 34.8507 162.909 42.3159C208.99 49.781 270 14.6952 270 14.6952V80H0V14.6952Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2">
                <div className={`w-14 h-14 rounded-full ${fitur.iconBg} flex items-center justify-center shadow-lg`}>
                  <Icon icon={fitur.icon} className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="px-4 pb-6 pt-1 text-center bg-white">
                <h3 className="text-lg font-bold text-neutral-800 mt-4">
                  {fitur.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-2">
                  {fitur.description}
                </p>

                <div className={`w-10 h-10 rounded-full ${fitur.iconBg} flex items-center justify-center mx-auto mt-6`}>
                  <Icon icon="mdi:arrow-right" className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fitur;