import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/SideBar' 
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'

export default function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='contend-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}
