import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapset] = useState(false)

    const onToggle = () => {
        setCollapset((prev) => !prev  )
    }
     
    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                {/* luanguage switcher */}
            </div>
        </div>
    )
}