import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import JenisMakanan from './components/JenisMakanan'
import ResepPopuler from './components/ResepPopuler'
import KategoriResep from './components/KategoriResep'
import EkslusifResep from './components/EkslusifResep'

const ResepMpasi = () => {
    return (
        <MainLayout>
            <div>
                <Hero />
                <JenisMakanan />
                <ResepPopuler />
                <KategoriResep />
                <EkslusifResep />
            </div>
        </MainLayout>
    )
}

export default ResepMpasi
