import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import JenisMakanan from './components/JenisMakanan'

const ResepMpasi = () => {
    return (
        <MainLayout>
            <div>
                <Hero />
                <JenisMakanan />
            </div>
        </MainLayout>
    )
}

export default ResepMpasi
