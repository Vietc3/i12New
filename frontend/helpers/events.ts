import {URL_BASE} from '../constants'

export const useGetAllEvents = async () => {
    const data = await fetch(URL_BASE+`/events`)
    return data.json()
}
