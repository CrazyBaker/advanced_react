import { Routes, Route, Link } from 'react-router-dom'
import { Suspense, useContext } from 'react'

import  { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { classNames } from './helpers/classNames/classNames'
import Counter from './components/Counter'
import { useTheme } from './theme/useTheme'
import './styles/index.scss'


export default function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}/>
                    <Route path='/' element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    )
}
