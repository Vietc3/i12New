import {URL_BASE} from '../constants'

export const useGetAllCarousels = async () => {
    const data = await fetch(URL_BASE+`/carousels`)
    return data.json()
}
