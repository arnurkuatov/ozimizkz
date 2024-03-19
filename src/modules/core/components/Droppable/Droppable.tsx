import type {FC, ReactNode} from 'react'
import {useDroppable} from "@dnd-kit/core";
import styles from './Droppable.module.scss'

interface Props {
    id: string
    children: ReactNode
}

const Droppable: FC<Props> = ({ id, children }) => {
    const { isOver, setNodeRef } = useDroppable({
        id
    });

    const style = {
        backgroundColor: isOver ? "#F2F6FC" : undefined
    };
    return (
        <div ref={setNodeRef} className={styles.droppableContainer} style={style}>
            {children}
        </div>
    )
}

export {Droppable}
