import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/Assets/icons/theme-light.svg'
import DarkIcon from 'shared/Assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }:ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button className={classNames('', {}, [className])} theme={ThemeButton.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
        </Button>
    )
}
