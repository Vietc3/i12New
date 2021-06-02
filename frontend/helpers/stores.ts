import {URL_BASE} from '../constants'

export const useGetAllStores = async () => {
    const data = await fetch(URL_BASE+`/stores`)
    return data.json()
}


export const useGetStoresByParams = async (param:string) => {
    const data = await fetch(URL_BASE+`/stores?`+param)
    return data.json()
}
