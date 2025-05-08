import React from 'react'
import frame1 from "../../../assets/frame-story1.webp"
import frame2 from "../../../assets/frame-story2.webp"
import frame3 from "../../../assets/frame-story3.webp"


const Story = () => {
    return (
        <section className='bg-secondary-10'>
            <div className='container py-14'>
                <div className="text-center mb-10 container">
                    <h1 className="text-primary-00 font-bold text-2xl lg:text-4xl">
                        Our Story
                    </h1>
                    <p className="text-neutral-90 font-semibold">
                        Cerita kami berawal dari keresahan sederhana orang tua yang merasa bingung, cemas, dalam mendampingi tumbuh kembang Si Kecil
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='relative'>
                        <img src={frame3} alt="image" />
                        <div className='absolute z-20 -top-0 text-center space-y-2 translate-y-1/2 pr-9 pl-2 font-extrabold text-sm lh:text-base text-white'>
                            <p>"Aku kadang bingung, gizi anakku udah cukup atau belum. Kadang cuma kira-kira aja, asal dia makan dan kenyang. Tapi aku nggak tahu pasti berapa kalori atau proteinnya."</p>
                            <h6>~ Ajeng ~</h6>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={frame2} alt="image" />
                        <div className='absolute z-20 -top-0 text-center space-y-5 translate-y-1/2 pr-9 pl-2 font-extrabold text-sm lh:text-base text-white'>
                            <p>"MPASI kadang ditolak, aku sampai bingung harus variasi menu kayak gimana lagi. Kadang cuma bisa kasih yang penting dimakan dulu, urusan gizinya belakangan."</p>
                            <h6>~ Fitri ~</h6>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={frame1} alt="image" />
                        <div className='absolute z-20 -top-0 text-center space-y-5 translate-y-1/2 pr-9 pl-2 font-extrabold text-sm lh:text-base text-white'>
                            <p>"Kadang aku ngerasa sedih loh… anakku aktif, tapi pas dicek KMS katanya kurang berat badan. Langsung kepikiran macam-macam. Padahal dia nggak sakit dan aktif."</p>
                            <h6>~ Nelly ~</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story
