import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const MONTH_NAMES = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const SHORT_MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const DAYS_OF_WEEK = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

const EVENTS = [
    {
        id: 1,
        date: new Date(2025, 10, 10),
        title: 'Jadwal Imunisasi',
        description: 'Yukk segera imunisasi Si Kecil ke Posyandu terdekatmu !',
        day: 'Rabu'
    },
    {
        id: 2,
        date: new Date(2025, 10, 13),
        title: 'Vaksin DPT-HB-Hib',
        description: 'Yuk Bunda beri vaksin si kecil dengan Vaksin DPT di umur 2-4 Bulan',
        day: 'Sabtu'
    },
    {
        id: 3,
        date: new Date(2025, 11, 1),
        title: 'Vaksin DPT-HB-Hib',
        description: 'Yuk Bunda beri vaksin si kecil dengan Vaksin DPT di umur 2-4 Bulan',
        day: 'Sabtu'
    }
];

const Kalender = () => {
    const [currentMonth, setCurrentMonth] = useState(10);
    const [currentYear, setCurrentYear] = useState(2025);

    const getMonthName = (month) => MONTH_NAMES[month];
    const getShortMonthName = (month) => SHORT_MONTH_NAMES[month];

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        } else {
            setCurrentMonth((prev) => prev - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        } else {
            setCurrentMonth((prev) => prev + 1);
        }
    };

    const generateCalendarDates = () => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const totalDays = lastDay.getDate();

        let startOffset = firstDay.getDay() - 1;
        if (startOffset < 0) startOffset = 6;

        const days = Array(startOffset).fill(null).concat([...Array(totalDays).keys()].map(i => i + 1));
        const weeks = [];

        while (days.length) {
            weeks.push(days.splice(0, 7));
        }

        return weeks;
    };

    const isEventDay = (day) =>
        day && EVENTS.some(e =>
            e.date.getFullYear() === currentYear &&
            e.date.getMonth() === currentMonth &&
            e.date.getDate() === day
        );

    const isHighlighted = (day) =>
        day && currentMonth === 10 && currentYear === 2025 && day >= 10 && day <= 13;

    const getVisibleEvents = () => {
        const today = new Date();
        return EVENTS.filter(e =>
            (e.date.getFullYear() === currentYear && e.date.getMonth() === currentMonth) ||
            (e.date > new Date(currentYear, currentMonth, today.getDate()))
        ).sort((a, b) => a.date - b.date);
    };

    const visibleEvents = getVisibleEvents();

    return (
        <div className="max-w-md space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-primary-20">
                        {getShortMonthName(currentMonth)} {currentYear}
                    </h2>
                    <div className="flex space-x-2">
                        <button onClick={prevMonth} className="p-1 rounded-full bg-white text-gray-500 hover:bg-gray-100">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextMonth} className="p-1 rounded-full bg-white text-gray-500 hover:bg-gray-100">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 mb-2">
                    {DAYS_OF_WEEK.map((day, i) => (
                        <div key={i} className="text-center font-semibold text-gray-500 text-sm py-1">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-y-2">
                    {generateCalendarDates().map((week, wi) =>
                        week.map((day, di) => (
                            <div
                                key={`${wi}-${di}`}
                                className={`text-center p-1 relative ${isHighlighted(day) ? 'bg-red-100' : ''}`}
                            >
                                {day && (
                                    <span className={`inline-flex font-semibold items-center justify-center w-8 h-8 rounded-full ${isEventDay(day) ? 'bg-secondary-50 text-white' : 'text-gray-500'}`}>
                                        {day}
                                    </span>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="space-y-4">
                {visibleEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex">
                            <div className="mr-4 text-center">
                                <div className="text-4xl font-bold text-secondary-50 ">
                                    {event.date.getDate()}
                                </div>
                                <div className="text-secondary-50 font-semibold text-sm">
                                    {event.day}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="text-lg font-bold">
                                    {getMonthName(event.date.getMonth())}
                                </div>
                                <div className="text-secondary-50 font-extrabold text-sm mb-1">
                                    {event.title}
                                </div>
                                <p className="text-sm font-semibold text-gray-600">
                                    {event.description}
                                </p>
                            </div>
                            <div className="flex items-end">
                                <button className="bg-secondary-50 text-white rounded-xl p-2">
                                    <ArrowUpRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kalender;