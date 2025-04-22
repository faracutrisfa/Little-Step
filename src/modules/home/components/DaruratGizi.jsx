import React from 'react';

const cardData = [
  {
    jumlah: '280,000',
    desc: 'Bayi lahir dengan berat yang kurang indikator kurang gizi',
  },
  {
    jumlah: '1 dari 5',
    desc: 'Anak dibawah 5 tahun terkena stunting dan terlalu pendek dari seumurannya',
  },
  {
    jumlah: '1 dari 12',
    desc: 'Anak-anak di bawah usia lima tahun mengalami gizi buruk, atau terlalu kurus untuk tinggi badan mereka',
  },
  {
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
                <div key={index} className={`${bgImage} w-20 h-20 lg:w-24 lg:h-24 rounded-full mb-4`} />
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