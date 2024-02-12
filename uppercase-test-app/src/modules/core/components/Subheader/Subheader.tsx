import type {FC} from 'react'
import styles from './Subheader.module.scss'
import {Badge} from "../../../../ui/components";

interface Props {
    query?: string
    totalResults?: string
}

const Subheader: FC<Props> = ({query, totalResults}) => {
    return (
        <div className={styles.root}>
            <h1 className={styles.root__title}>You searched for: <u>{query}</u></h1>
            <Badge text={`${totalResults} results`}/>
        </div>
    )
}

export {Subheader}
