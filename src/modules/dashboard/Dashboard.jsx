import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'
import Bunda from './Bunda'
import Bayi from './Bayi'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('bayi');

    return (
        <DashboardLayout activeSidebar={activeTab} setActiveSidebar={setActiveTab}>
            {activeTab === 'bunda' ? <Bunda /> : <Bayi />}
        </DashboardLayout>
    )
}

export default Dashboard
