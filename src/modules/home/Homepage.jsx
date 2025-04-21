import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import DaruratGizi from './components/DaruratGizi'
import Komitmen from './components/Komitmen'
import Fitur from './components/Fitur'

const Homepage = () => {
    return (
        <MainLayout>
            <div>
                <Hero />
                <DaruratGizi />
                <Komitmen />
                <Fitur />
            </div>
        </MainLayout>
    )
}

export default Homepage
