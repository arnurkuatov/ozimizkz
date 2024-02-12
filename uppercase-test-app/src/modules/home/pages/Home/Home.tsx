import type {FC} from 'react'
import {useUrlParams} from "../../../common/hooks";
import {useGetMovieListsQuery} from "../../../core/api/movieApi.ts";
import {Card, Pagination} from "../../../../ui/components";
import {Subheader} from "../../../core/components/Subheader";

const Home: FC = () => {
    const {urlParams} = useUrlParams()
    const {data} = useGetMovieListsQuery(urlParams)
    return (
        <div>
            <Subheader query={urlParams?.s} totalResults={data?.totalResults}/>
            <Card data={data?.Search}/>
            <Pagination
                page={1}
                pageCount={100}/>
        </div>
    )
}

export {Home}
