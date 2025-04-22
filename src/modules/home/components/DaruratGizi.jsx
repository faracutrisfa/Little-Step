import React from 'react';
import image1 from '../../../assets/darurat_image1.webp';
import image2 from '../../../assets/darurat_image2.webp';
import image3 from '../../../assets/darurat_image3.webp';
import image4 from '../../../assets/darurat_image4.webp';

const cardData = [
  {
    image: image1,
    jumlah: '280,000',
    desc: 'Bayi lahir dengan berat yang kurang indikator kurang gizi',
  },
  {
    image: image2,
    jumlah: '1 dari 5',
    desc: 'Anak dibawah 5 tahun terkena stunting dan terlalu pendek dari seumurannya',
  },
  {
    image: image3,
    jumlah: '1 dari 12',
    desc: 'Anak-anak di bawah usia lima tahun mengalami gizi buruk, atau terlalu kurus untuk tinggi badan mereka',
  },
  {
    image: image4,
    jumlah: '2 dari 5',
    desc: 'Anak dibawah usia lima tahun tidak menerima makanan dan minuman yang direkomendasikan',
  },
];

const DaruratGizi = () => {
  return (
    <section>
      <div className="container py-10">
        <div className="text-center mb-10">
          <h1 className="text-primary-0 font-bold text-2xl lg:text-4xl">
            Darurat Gizi Anak
          </h1>
          <p className="text-neutral-90 font-semibold">
            Ratusan ribu anak Indonesia lahir dengan berat badan rendah dan kekurangan gizi. Tanpa intervensi dini, mereka berisiko mengalami stunting yang menghambat masa depan.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.map((card, index) => {
            const bgImage = index % 2 === 0 ? 'bg-primary-100' : 'bg-secondary-50';
            const bgColor = index % 2 === 0 ? 'bg-primary-10' : 'bg-secondary-30';
            return (
              <div
                key={index}
                className={`${bgColor} p-3 lg:p-6 rounded-3xl shadow-lg text-center flex flex-col items-center h-full min-h-[250px]`}
              >
                <div key={index} className={`${bgImage} flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full mb-4`}>
                  <img src={card.image} alt="icon" className="w-14 lg:w-16 object-cover" />
                </div>

                <h2 className="text-primary-100 font-extrabold text-xl lg:text-4xl lg:pt-2">
                  {card.jumlah}
                </h2>
                <p className="text-neutral-90 font-semibold mt-2 text-sm lg:text-base">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DaruratGizi;