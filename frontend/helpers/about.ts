import {URL_BASE} from '../constants'

export const useGetContentAboutUs = async () => {
    const data = await fetch(URL_BASE+`/config-about-us`)
    return data.json()
}