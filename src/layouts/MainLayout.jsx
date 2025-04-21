import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
    return (
        <div className='font-nunito'>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
