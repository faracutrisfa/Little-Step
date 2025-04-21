import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

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
