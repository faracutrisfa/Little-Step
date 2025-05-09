import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Hero from './components/Hero'
import VisiMisi from './components/VisiMisi'
import Story from './components/Story'
import Premium from './components/Premium'
import Team from './components/Team'
import CoreValue from './components/CoreValue'

const About = () => {
    return (
        <MainLayout>
            <div>
                <Hero />
                <VisiMisi />
                <Story />
                <Premium />
                <Team />
                <CoreValue />
            </div>
        </MainLayout>
    )
}

export default About
