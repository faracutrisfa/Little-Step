import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../modules/home/Homepage'
import KalkulatorGizi from '../modules/kalkulator-gizi/KalkulatorGizi'
import Foodscan from '../modules/food-scan/Foodscan'
import ResepMpasi from '../modules/resep-mpasi/ResepMpasi'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/kalkulator-gizi' element={<KalkulatorGizi />} />
                <Route path='/food-scan' element={<Foodscan />} />
                <Route path='/resep-mpasi' element={<ResepMpasi />} />
            </Routes>
        </BrowserRouter>
    )
}