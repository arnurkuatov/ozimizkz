import type {FC} from 'react'
import styles from './TaskCard.module.scss'
import clsx from "clsx";
import {ToDoListResponse} from "../../../common/types";

interface Props {
    data: ToDoListResponse
}

const TaskCard: FC<Props> = ({data}) => {
    return (
        <div className={styles.root}>
            <div className={styles.root__block}>
                <p>Автор</p>
                <b>{data.author}</b>
            </div>
            <div className={clsx(styles.root__block, data.done && styles.root__done)}>
                <p>Заголовок</p>
                <b>{data.title}</b>
            </div>
            <div className={clsx(data.done && styles.root__done)}>{data.task}</div>
        </div>
    )
}

export {TaskCard}
