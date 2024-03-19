import {FC, MouseEvent, useEffect, useState} from 'react'

import styles from './Home.module.scss'

import {useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation} from "../../../core/api/todoListApi.ts";

import {DndContext, DragEndEvent} from '@dnd-kit/core';

import {ToDoListResponse} from "../../../common/types";

import {Droppable} from "../../../core/components/Droppable/Droppable.tsx";
import {Draggable} from "../../../core/components/Draggable";
import {TaskCard} from "../../../core/components/TaskCard";
import {AddTask} from "../../../core/components/AddTask";
import Button from "../../../../ui/components/Button/Button.tsx";

const lists = [{
    done: false,
    name: 'To Do'
}, {
    done: true,
    name: 'Готово'
}
];
const Home: FC = () => {
    const {data, isSuccess} = useGetTasksQuery()

    const [updateTask] = useUpdateTaskMutation()
    const [deleteTask] = useDeleteTaskMutation()

    const [tasks, setTasks] = useState<ToDoListResponse[]>([])

    const [isAddTask, setIsAddTask] = useState(false)

    useEffect(() => {
        if (isSuccess && data) {
            setTasks(data)
        }
    }, [data, isSuccess]);

    const handleDragEnd = (event: DragEndEvent) => {
        const {active} = event;
        setTasks(
            tasks.map((item) => {
                if (item.id === active.id) {
                    const payload = {
                        id: item.id,
                        list: {
                            ...item,
                            done: !item.done
                        }
                    }
                    updateTask(payload)
                }
                return item;
            })
        );
    };

    const getTasks = (type: boolean) => tasks.filter((item) => item.done === type);


    const handleDeleteTask = (e: MouseEvent<HTMLButtonElement>, id: string) => {
        e.stopPropagation()
        deleteTask(id)
    }

    const handleIsAddTask = () => {
        setIsAddTask(true)
    }

    const handleCloseAddTask = () => {
        setIsAddTask(false)
    }


    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className={styles.container}>
                {lists.map((item) => (
                    <Droppable key={item.name} id={item.name}>
                        <h1 className={styles.title}>{item.name}</h1>
                        <div>{!item.done ?
                            <>
                                {!isAddTask ? <Button className={styles.button} onClick={handleIsAddTask}>
                                        Добавить задачку
                                    </Button>
                                    :
                                    null
                                }
                                <>
                                    {isAddTask ?
                                        <AddTask onCloseAddTask={handleCloseAddTask}/>
                                        :
                                        null
                                    }
                                </>
                            </>
                            :
                            null
                        }
                        </div>
                        {getTasks(item.done).map((task) => (
                            <div className={styles.block}>
                                <Draggable key={task.id} id={task.id}>
                                    <TaskCard data={task}/>
                                </Draggable>
                                <Button className={styles.btn_delete} variant='secondary-delete'
                                        onClick={(e) => handleDeleteTask(e, task.id)}>
                                    Удалить
                                </Button>
                            </div>
                        ))}
                    </Droppable>
                ))}
            </div>
        </DndContext>
    );
}

export {Home}
