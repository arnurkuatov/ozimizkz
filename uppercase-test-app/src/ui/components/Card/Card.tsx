import type {FC} from 'react'
import styles from './Card.module.scss'

import PlaceholderImg from '../../../assets/img/placeholder.png'
import {MovieResponse} from "../../../modules/core/api/movieApi.ts";

interface Props {
    data?: MovieResponse['Search']
}

const Card: FC<Props> = ({ data }) => {
    return (
        <div className={styles.container}>
            {data?.map(item => (
                <div className={styles.root} key={item.imdbID}>
                    <div className={styles.root__imgBlock}>
                        <img src={item.Poster || PlaceholderImg} alt="placeholder" className={styles.img}/>
                    </div>
                    <ul>
                        <li>Name: {item.Title}</li>
                        <li>Year: {item.Year}</li>
                        <li>imdbID: {item.imdbID}</li>
                        <li>Type: {item.Type}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export {Card}
