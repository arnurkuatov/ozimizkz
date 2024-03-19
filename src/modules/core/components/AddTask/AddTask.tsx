import {FC, useState} from 'react'
import styles from './AddTask.module.scss'
import {Input} from "../../../../ui/components";
import {useAddTaskMutation} from "../../api/todoListApi.ts";
import Button from "../../../../ui/components/Button/Button.tsx";

interface Props {
    onCloseAddTask: VoidFunction
}

const AddTask: FC<Props> = ({onCloseAddTask}) => {
    const [onAddTask] = useAddTaskMutation()
    const [inputValue, setInputValue] = useState({
        author: '',
        title: '',
        task: ''
    })

    const handleChange = (e: { target: { name: string; value: any } }): void => {
        const {name, value} = e.target
        setInputValue(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleAddTask = () => {
        onAddTask(inputValue)
    }

    const isDisabled = inputValue.task && inputValue.author && inputValue.title

    return (
        <div className={styles.container}>
            <Input value={inputValue.author} label='Автор' name='author' onChange={handleChange}/>
            <Input value={inputValue.title} label='Название задачки' name='title' onChange={handleChange}/>
            <Input value={inputValue.task} label='Описание задачки' name='task' onChange={handleChange}/>
            <div className={styles.btn}>
                <Button disabled={Boolean(!isDisabled)} onClick={handleAddTask}>Добавить</Button>
                <Button variant='secondary' onClick={onCloseAddTask}>Отмена</Button>
            </div>
        </div>
    )
}

export {AddTask}
