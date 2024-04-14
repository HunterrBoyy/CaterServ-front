import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';



export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints:(builder) => ({

    getAllServices : builder.query({
      query:(query) => ({
        url: '/api/services',

      })
    })

  })
})

export const {useGetAllServicesQuery} = serviceApi