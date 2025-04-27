import React from 'react';

const foodTypes = [
    {
        title: "Karbohidrat",
        bgColor: "bg-primary-10",
        textColor: "text-primary-90",
        imgUrl: "https://img.icons8.com/?size=100&id=94861&format=png&color=6EA3CC"
    },
    {
        title: "Protein Hewani",
        bgColor: "bg-secondary-10",
        textColor: "text-secondary-70",
        imgUrl: "https://img.icons8.com/?size=100&id=95710&format=png&color=BA6050"
    },
    {
        title: "Protein Nabati",
        bgColor: "bg-primary-10",
        textColor: "text-primary-90",
        imgUrl: "https://img.icons8.com/?size=100&id=96577&format=png&color=6EA3CC"
    },
    {
        title: "Sayur-Sayuran",
        bgColor: "bg-secondary-10",
        textColor: "text-secondary-70",
        imgUrl: "https://img.icons8.com/?size=100&id=96440&format=png&color=BA6050"
    },
    {
        title: "Buah-buahan",
        bgColor: "bg-primary-10",
        textColor: "text-primary-90",
        imgUrl: "https://img.icons8.com/?size=100&id=95285&format=png&color=6EA3CC"
    },
    {
        title: "Lemak Sehat",
        bgColor: "bg-secondary-10",
        textColor: "text-secondary-70",
        imgUrl: "https://img.icons8.com/?size=100&id=lCa44ww-O3Ro&format=png&color=BA6050"
    }
];

const JenisMakanan = () => {
    return (
        <section>
            <div className='container py-14'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 container'>
                    {foodTypes.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col text-center items-center gap-3 py-10 lg:px-7 lg:py-12 shadow-lg ${item.bgColor} rounded-2xl`}
                        >
                            <img src={item.imgUrl} alt="icon" className='w-14' />
                            <h1 className={`font-extrabold text-sm ${item.textColor}`}>
                                {item.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JenisMakanan;