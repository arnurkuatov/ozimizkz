import type {FC} from 'react'

import styles from './Badge.module.scss'

interface Props {
    text: string
}

const Badge: FC<Props> = ({text}) => {
    return (
        <div className={styles.root}>
            {text ? text : 0}
        </div>
    )
}

export {Badge}
