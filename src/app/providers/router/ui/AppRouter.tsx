
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Suspense } from 'react'

export default function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        </Suspense>
    )
}
