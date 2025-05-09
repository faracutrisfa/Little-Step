import { useState } from 'react';

export const usePremiumState = () => {
    const [subscriptionType, setSubscriptionType] = useState('monthly');
    const [openFAQIndex, setOpenFAQIndex] = useState(0); // default terbuka index 0

    const toggleFAQ = (index) => {
        setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return {
        subscriptionType,
        setSubscriptionType,
        openFAQIndex,
        toggleFAQ,
    };
};
