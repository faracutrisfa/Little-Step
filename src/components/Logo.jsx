import React from 'react'
import logo from '../assets/logo.webp'

const Logo = () => {
    return (
        <a href="/">
            <img src={logo} alt="logo" className='w-24 lg:w-36' />
        </a>
    )
}

export default Logo