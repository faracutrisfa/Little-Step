import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
    return (
        <div className='font-nunito'>
            <Navbar />
            <div className='mt-[70px] lg:mt-20'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
