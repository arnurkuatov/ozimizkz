import {baseApi} from "../../../settings/store/middlewares/baseApi";
import {ToDoListResponse} from "../../common/types";


export type MovieResponse = {
    Response: string
    Search: {
        Poster: string
        Title: string
        Type: string
        Year: string
        imdbID: string
    }[]
    totalResults: string
}

export const todoListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<ToDoListResponse[], void>({
            query: () => ({
                url: '/lists',
                method: 'get',
            }),
            providesTags: ['Lists']
        }),
        addTask: build.mutation({
            query: data => {
                return {
                    url: `/lists`,
                    method: 'post',
                    data: {
                        ...data,
                        done: false,
                    }
                }
            },
            invalidatesTags: ['Lists']
        }),
        updateTask: build.mutation({
            query: payload => {
                const {id, list} = payload
                return {
                    url: `/lists/${id}`,
                    method: 'put',
                    data: list
                }
            },
            invalidatesTags: ['Lists']
        }),
        deleteTask: build.mutation({
            query: id => ({
                url: `/lists/${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Lists']
        })
    })
})


export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} =
    todoListApi
