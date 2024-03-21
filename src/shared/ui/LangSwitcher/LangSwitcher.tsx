import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}:LangSwitcherProps) => {

    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div >
            <Button 
                className={classNames(styles.LangSwitcher, {}, [className])} 
                theme={ThemeButton.CLEAR} 
                onClick={toggle}
            >
                {t('Язык')}
            </Button>
            <div></div>
        </div>
    )
}