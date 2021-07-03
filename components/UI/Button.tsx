import React from 'react'
import styles from '../../styles/Button.module.css'

type ButtonProps = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    outlined?: boolean
    transparent?: boolean
    icon?: React.ReactNode
}

export default function Button({
    children,
    className,
    outlined,
    style,
    transparent = false,
    icon = null,
}: ButtonProps) {
    const classes = [className, styles['btn']]

    if (outlined) {
        classes.push(styles['btn-outlined'])
    } else {
        classes.push(styles['btn-primary'])
    }

    if (transparent) {
        classes.push(styles['btn-transparent'])
    }

    if (icon !== null) {
        classes.push(styles['btn-icon'])
    }

    return (
        <button style={style} className={classes.join(' ')}>
            {children}
            {icon !== null ? <span className="ml-2">{icon}</span> : null}
        </button>
    )
}
