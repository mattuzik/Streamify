// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const filmsApiKey = import.meta.env.VITE_FILMSAPI_KEY

interface FilmsResponse {
  total: number
  totalPages: number
  items: any[]
}

interface GetFilmsArgs {
  type: string
  page: number
}

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', filmsApiKey)
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),

  endpoints: (builder) => ({
    getFilmsTop: builder.query<FilmsResponse, GetFilmsArgs>({
      query: ({ type, page, keyword = "" }) => 
        `/v2.2/films/collections?type=${type}&page=${page}&search-by-keyword=${keyword}`,
    }),

    getFilm: builder.query({
      query: (id) => `/v2.2/films/${id}`
    }),

    getSequalsAndPriquels: builder.query<ResultType, RequestArg>({
      query: (id) => {
        return `/v2.1/films/${id}/sequels_and_prequels`;
      },
      transformResponse: (response: any) => response?.map((item: any) => ({ ...item, id: item.filmId })) || []
    }),

    getFilmsBySearch: builder.query({
      query: ({ keyword, page = 1 }) => 
        `/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`,
    }),
  }),
})


export const { 
  useGetFilmsTopQuery, 
  useGetFilmQuery, 
  useGetSequalsAndPriquelsQuery,
  useGetFilmsBySearchQuery,
} = filmsApi
