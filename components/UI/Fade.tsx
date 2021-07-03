import { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

type FadeProps = {
    children: ReactNode
    inProp?: boolean
}

export default function Fade(props: FadeProps) {
    return (
        <CSSTransition
            in={props.inProp}
            timeout={900}
            classNames="fade"
            unmountOnExit>
            <>{props.children}</>
        </CSSTransition>
    )
}
