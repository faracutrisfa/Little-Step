import React from 'react'
import Button from '../../../components/Button'
import HeroImage from "../../../assets/hero.webp"
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
    return (
        <section className='bg-secondary-10 py-10 xl:py-0'>
            <div className='container flex justify-between items-center'>
                <div className='space-y-7 lg:w-2/5'>
                    <h1 className='font-extrabold text-5xl text-secondary-50'>
                        <span className='text-primary-0'>Cegah Stunting <br /></span> Mulai dari Langkah Kecil <span className='text-primary-70'>Hari Ini</span>
                    </h1>
                    <p className='text-neutral-90'>Stunting masih jadi ancaman bagi jutaan anak di Indonesia. Melalui edukasi dan pemantauan gizi, kita bisa bantu generasi tumbuh sehat dan cerdas.</p>
                    <Button className='flex items-center gap-2'>
                        Jelajahi Fitur
                        <Icon icon="humbleicons:arrow-up" fontSize={20} className='rotate-45' />
                    </Button>
                </div>
                <div className='w-2/5 xl:w-1/2 hidden lg:block'>
                    <img src={HeroImage} alt="hero image" />
                </div>
            </div>
        </section>
    )
}

export default Hero