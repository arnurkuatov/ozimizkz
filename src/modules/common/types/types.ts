
export type Nullable<T> = T | null

export type ToDoListResponse = {
    author: string
    avatar: string
    createdAt: string
    done: boolean
    id: string
    task: string
    title: string
}
