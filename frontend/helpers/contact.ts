import {URL_BASE} from '../constants'

export const useGetContentContactUs = async () => {
    const data = await fetch(URL_BASE+`/config-contact-us`)
    return data.json()
}