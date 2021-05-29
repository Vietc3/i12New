import {URL_BASE} from '../constants'

export const useGetBanners = async () => {
    const data = await fetch(URL_BASE+`/config-banner`)
    return data.json()
}
