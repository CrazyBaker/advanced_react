import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { useTranslation } from 'react-i18next'
import { Sidebar } from 'widgets/SideBar' 
import { Navbar } from 'widgets/Navbar'
import { Suspense } from 'react'

import './styles/index.scss'

const Component = () => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <button onClick={toggle}>{t('перевод')}</button>
            <div>{t('testoviy')}</div>
        </div>
    )
}

export default function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <Component />
                <div className='contend-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
