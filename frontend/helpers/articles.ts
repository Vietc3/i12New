import {URL_BASE} from '../constants'

const URL_BASE_ARTICLES = URL_BASE+'/articles'

export const useGetArticles = async (filters:string) => {
     const data = await fetch(URL_BASE_ARTICLES+`?${filters}`)
     return data.json()
}

export const useGetAllArticles = async () => {
     const data = await fetch(URL_BASE_ARTICLES)
     return data.json()
}

export const useGetArticleById = async (id:any) => {
     const data = await fetch(URL_BASE_ARTICLES+'/'+id)
     return data.json()
}