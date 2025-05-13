import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import Kalkulator from './components/Kalkulator'
import FoodScan from './components/FoodScan'

const KalkulatorGizi = () => {
    return (
        <MainLayout>
            <div className='font-nunito'>
                <Hero />
                <Kalkulator />
                <FoodScan />
            </div>
        </MainLayout>
    )
}

export default KalkulatorGizi
