import {URL_BASE} from '../constants'

export const useGetContentArticles= async () => {
    const data = await fetch(URL_BASE+`/config-aritcles`)
    return data.json()
}

export const useGetAllArticles = async () => {
    const data = await fetch(URL_BASE+`/articles`)
    return data.json()
}


export const useGetArticlesByParams = async (param:string) => {
    const data = await fetch(URL_BASE+`/articles?`+param)
    return data.json()
}
