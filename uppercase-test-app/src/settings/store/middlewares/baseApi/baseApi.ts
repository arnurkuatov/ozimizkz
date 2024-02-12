import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../../../axios/axiosBaseQuery.ts";

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  refetchOnMountOrArgChange: 60,
  tagTypes: [],
})
