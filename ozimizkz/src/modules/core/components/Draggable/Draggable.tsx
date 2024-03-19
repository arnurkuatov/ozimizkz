import type {FC, ReactNode} from 'react'
import styles from './Draggable.module.scss'
import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";

interface Props {
    id: string
    children: ReactNode
}

const Draggable: FC<Props> = ({id, children}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id});
    const style = transform
        ? {
            transform: CSS.Translate.toString(transform)
        }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            className={styles.draggableItem}
            style={style}
            {...listeners}
            {...attributes}
        >
            {children}
        </div>
    )
}

export {Draggable}
