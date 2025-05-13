import React from 'react';
import Profile from './components/dashboard-bayi/Profile';
import BeratBadanIdeal from './components/dashboard-bayi/BeratBadanIdeal';
import Grafik from './components/dashboard-bayi/Grafik';

const Bayi = () => {
    return (
        <div className='space-y-8'>
            <Profile />
            <BeratBadanIdeal />
            <Grafik />
        </div>
    );
};

export default Bayi;
