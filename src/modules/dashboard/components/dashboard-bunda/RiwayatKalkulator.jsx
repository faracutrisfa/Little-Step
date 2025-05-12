import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import BookIcon from "../../../../assets/book-icon.webp";

const SortDropdown = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-wrap items-center mb-4">
            <span className="text-primary-90 font-bold mr-2 mb-2 sm:mb-0">Berdasarkan :</span>
            <div className="relative">
                <button
                    onClick={toggle}
                    className="flex items-center text-primary-90 font-medium"
                >
                    {selected.label}
                    <ChevronDown size={18} className="ml-1" />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-1 z-10 w-40">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                    onSelect(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const HistoryItem = ({ month, description, lastUpdated }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0 self-center md:self-start">
                <img
                    src={BookIcon}
                    alt="Checklist"
                    className="w-24 h-24 md:w-36 md:h-36 object-contain"
                />
            </div>

            <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg md:text-2xl mb-2 md:mb-3">
                    Rekap Bulan {month}
                </h3>
                <p className="text-gray-600 font-medium text-sm md:text-base mb-2">{description}</p>
                <p className="font-semibold text-sm md:text-base">Terakhir diperbarui {lastUpdated}</p>
            </div>

            <div className="flex self-end">
                <button className="w-10 h-10 bg-primary-70 rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    </div>
);

const RiwayatKalkulator = () => {
    const historyData = [
        {
            id: 1,
            month: 'Oktober',
            description: 'Menyediakan informasi dan panduan kesehatan anak usia dini yang akurat, mudah diakses, dan berbasis ilmu medis terkini.',
            lastUpdated: '30 Oktober 2025',
        },
        {
            id: 2,
            month: 'September',
            description: 'Menyediakan informasi dan panduan kesehatan anak usia dini yang akurat, mudah diakses, dan berbasis ilmu medis terkini.',
            lastUpdated: '30 Oktober 2025',
        },
    ];

    const sortOptions = [{ id: 'recent', label: 'Terakhir dilihat' }];
    const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

    return (
        <div className="w-full max-w-screen-lg">
            <h1 className="text-xl md:text-2xl font-extrabold text-primary-90 mb-4">
                Riwayat Kalkulator Gizi
            </h1>

            <SortDropdown
                options={sortOptions}
                selected={selectedSort}
                onSelect={setSelectedSort}
            />

            <div className="space-y-4">
                {historyData.map((item) => (
                    <HistoryItem
                        key={item.id}
                        month={item.month}
                        description={item.description}
                        lastUpdated={item.lastUpdated}
                    />
                ))}
            </div>
        </div>
    );
};

export default RiwayatKalkulator;