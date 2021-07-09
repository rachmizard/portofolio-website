import React from 'react'
import styles from '../../styles/Button.module.css'

type TypeEnum = 'button' | 'link'

type Props = {
     children: React.ReactNode
     className?: string
     style?: React.CSSProperties
     outlined?: boolean
     transparent?: boolean
     icon?: React.ReactNode
     href?: string
     type?: TypeEnum
     onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
     children,
     className,
     outlined,
     style,
     transparent = false,
     icon = null,
     href,
     type = 'button',
     onClick,
}: Props) {
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

     if (type === 'link') {
          return (
               <a href={href} className={classes.join(' ')}>
                    {children}
               </a>
          )
     }

     return (
          <button onClick={onClick} style={style} className={classes.join(' ')}>
               {children}
               {icon !== null ? <span className="ml-2">{icon}</span> : null}
          </button>
     )
}
