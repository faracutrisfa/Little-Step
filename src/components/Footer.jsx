import React from 'react'
import Logo from './Logo'
import { Icon } from '@iconify/react'

const Footer = () => {
    const socialIcons = [
        { icon: 'ri:facebook-fill', link: 'https://facebook.com' },
        { icon: 'ri:youtube-fill', link: 'https://youtube.com' },
        { icon: 'ri:instagram-line', link: 'https://instagram.com' },
        { icon: 'ri:pinterest-fill', link: 'https://pinterest.com' },
        { icon: 'ri:whatsapp-line', link: 'https://wa.me/1234567890' },
    ]

    return (
        <footer className="bg-primary-10 py-14 text-primary-0">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-6 md:justify-between">
                    <Logo />
                    <ul className="flex items-center gap-5">
                        {socialIcons.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-2xl transition duration-200 hover:scale-110 hover:text-secondary-50"
                                >
                                    <Icon icon={item.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='pt-6 flex flex-col lg:flex-row justify-between gap-5 lg:gap-0'>
                    <div className='space-y-3 lg:w-1/3 text-center lg:text-left'>
                        <p>Kami hadir untuk mendukung setiap senyum, setiap perkembangan, dan setiap momen berharga dalam tumbuh kembang buah hati Anda.</p>
                        <div className='flex items-center justify-center lg:justify-start gap-4'>
                            <Icon icon="vaadin:office" fontSize={20} />
                            <p>Jl.Zerovagata No 119</p>
                        </div>
                        <div className='flex items-center justify-center lg:justify-start gap-4'>
                            <Icon icon="material-symbols:mail-rounded" fontSize={20} />
                            <p>littlestep@gmail.com</p>
                        </div>
                    </div>
                    <div className='font-medium text-sm flex gap-6 lg:gap-16 text-center lg:text-left justify-center lg:justify-start'>
                        <ul>
                            <li className='text-base font-bold'>Company</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Our Team</li>
                            <li>Help Center</li>
                        </ul>
                        <ul>
                            <li className="text-base font-bold">Shop</li>
                            <li>Gift Cards</li>
                            <li>Our Product</li>
                            <li>My Account</li>
                            <li>Shopping</li>
                            <li>Returns</li>
                        </ul>
                        <ul>
                            <li className="text-base font-bold">Support</li>
                            <li>Contact Us</li>
                            <li>Payment Options</li>
                            <li>Store Locator</li>
                            <li>Accessibility</li>
                            <li>Affiliates</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row text-center lg:text-left justify-between font-medium text-sm pt-7 lg:pt-14'>
                    <p>Copyright 2024  All Right Reserved</p>
                    <p>User Terms & Conditions | Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer