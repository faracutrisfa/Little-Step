import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import Kalkulator from './components/Kalkulator'

const KalkulatorGizi = () => {
    return (
        <MainLayout>
            <div>
                <Hero />
                <Kalkulator />
            </div>
        </MainLayout>
    )
}

export default KalkulatorGizi
