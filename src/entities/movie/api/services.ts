import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const filmsApiKey = (import.meta as any).env.VITE_FILMSAPI_KEY

// Описываем базовую сущность фильма
export interface Movie {
  kinopoiskId: number
  filmId?: number // Для старых версий API (v2.1)
  nameRu: string
  nameEn: string | null
  posterUrl: string
  posterUrlPreview: string
  ratingKinopoisk?: number
  year?: number
  [key: string]: any // Для дополнительных полей
}

export interface FilmsResponse {
  total: number
  totalPages: number
  items: Movie[]
}

export interface SearchResponse {
  keyword: string
  pagesCount: number
  searchFilmsCount: number
  films: Movie[]
}

export interface GetFilmsArgs {
  type: string
  page: number
  keyword?: string
}

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: (headers) => {
      if (filmsApiKey) {
        headers.set('X-API-KEY', filmsApiKey)
      }
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    // Список топ фильмов
    getFilmsTop: builder.query<FilmsResponse, GetFilmsArgs>({
      query: ({ type, page, keyword = "" }) => 
        `/v2.2/films/collections?type=${type}&page=${page}${keyword ? `&keyword=${keyword}` : ''}`,
    }),

    // Получение одного фильма по ID
    getFilm: builder.query<Movie, string | number>({
      query: (id) => `/v2.2/films/${id}`
    }),

    // Сиквелы и приквелы
    getSequalsAndPriquels: builder.query<Movie[], string | number>({
      query: (id) => `/v2.1/films/${id}/sequels_and_prequels`,
      // Трансформируем ответ, чтобы везде был id вместо filmId
      transformResponse: (response: Movie[]) => 
        response?.map((item) => ({ ...item, id: item.filmId || item.kinopoiskId })) || []
    }),

    // Поиск по ключевому слову
    getFilmsBySearch: builder.query<SearchResponse, { keyword: string; page?: number }>({
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
