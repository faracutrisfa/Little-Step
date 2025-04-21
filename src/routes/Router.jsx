import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../modules/home/Homepage'
import KalkulatorGizi from '../modules/kalkulator-gizi/KalkulatorGizi'
import FoodScan from "../modules/food-scan/FoodScan"
import ResepMpasi from '../modules/resep-mpasi/ResepMpasi'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/kalkulator-gizi' element={<KalkulatorGizi />} />
                <Route path='/food-scan' element={<FoodScan />} />
                <Route path='/resep-mpasi' element={<ResepMpasi />} />
            </Routes>
        </BrowserRouter>
    )
}