import {URL_BASE} from '../constants'

export const useGetAllDeals = async () => {
    const data = await fetch(URL_BASE+`/deals`)
    return data.json()
}
