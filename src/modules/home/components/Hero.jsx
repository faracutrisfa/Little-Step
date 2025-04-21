import React from 'react'
import Button from '../../../components/Button'

const Hero = () => {
    return (
        <section className='bg-secondary-10 py-10'>
            <div className='container'>
                <div className='space-y-7 lg:w-2/5'>
                    <h1 className='font-extrabold text-5xl text-secondary-50'>
                        <span className='text-primary-0'>Cegah Stunting <br /></span> Mulai dari Langkah Kecil <span className='text-primary-70'>Hari Ini</span>
                    </h1>
                    <p className='text-neutral-90'>Stunting masih jadi ancaman bagi jutaan anak di Indonesia. Melalui edukasi dan pemantauan gizi, kita bisa bantu generasi tumbuh sehat dan cerdas.</p>
                    <Button>Jelajahi Fitur</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero