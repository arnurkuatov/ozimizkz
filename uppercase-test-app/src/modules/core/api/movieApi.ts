import {baseApi} from "../../../settings/store/middlewares/baseApi";


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

type UrlParams = {
    [s: string]: string
}
export const movieApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieLists: build.query<MovieResponse, UrlParams>({
            query: ( params ) => {
                const { page, s } = params
                return {
                    url: '',
                    method: 'get',
                    params: {
                        s,
                        page,
                    }
                }
            }
        })
    })
})


export const { useGetMovieListsQuery } = movieApi
