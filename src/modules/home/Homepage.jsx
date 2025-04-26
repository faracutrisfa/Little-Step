import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import DaruratGizi from './components/DaruratGizi'
import Komitmen from './components/Komitmen'
import Fitur from './components/Fitur'
import FaseTumbuh from './components/FaseTumbuh'
import Ads from './components/Ads'
import BeritaEdukasi from './components/BeritaEdukasi'

const Homepage = () => {
    return (
        <MainLayout>
            <div>
                <Hero />
                <DaruratGizi />
                <Komitmen />
                <Fitur />
                <FaseTumbuh />
                <Ads />
                <BeritaEdukasi />
            </div>
        </MainLayout>
    )
}

export default Homepage
