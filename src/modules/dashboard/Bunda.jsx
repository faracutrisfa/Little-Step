import React from 'react';
import Profile from './components/dashboard-bunda/Profile';
import DataMpasi from './components/dashboard-bunda/DataMpasi';
import Kalender from './components/dashboard-bunda/Kalender';
import RiwayatKalkulator from './components/dashboard-bunda/RiwayatKalkulator';
import Premium from './components/dashboard-bunda/Premium';

const Bunda = () => {
    return (
        <div className='space-y-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full'>
                <div className='space-y-8'>
                    <Profile />
                    <DataMpasi />
                </div>
                <Kalender />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-ful'>
                <RiwayatKalkulator />
                <Premium />
            </div>
        </div>
    );
};

export default Bunda;
