import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../modules/home/Homepage'
import KalkulatorGizi from '../modules/kalkulator-gizi/KalkulatorGizi'
import ResepMpasi from '../modules/resep-mpasi/ResepMpasi'
import About from '../modules/AboutUs/About'
import Login from '../modules/auth/Login'
import Register from '../modules/auth/Register'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/kalkulator-gizi' element={<KalkulatorGizi />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/resep-mpasi' element={<ResepMpasi />} />
            </Routes>
        </BrowserRouter>
    )
}