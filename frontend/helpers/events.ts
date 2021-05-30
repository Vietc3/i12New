import {URL_BASE} from '../constants'

export const useGetAllEvents = async () => {
    const data = await fetch(URL_BASE+`/events`)
    return data.json()
}
export const useGetEventsByParams = async (param:string) => {
    const data = await fetch(URL_BASE+`/events?`+param)
    return data.json()
}