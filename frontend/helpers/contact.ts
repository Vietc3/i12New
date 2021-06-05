import { URL_BASE } from '../constants'
const URL_BASE_EMAILS = URL_BASE + '/emails'
import { toast } from "react-toastify";
const axios = require('axios').default;

export const useGetContentContactUs = async () => {
    const data = await fetch(URL_BASE + `/config-contact-us`)
    return data.json()
}


export const uploadImage = async (image: any) => {
    const dataImage = new FormData();
    dataImage.append('files', image)
    const data = await axios({
        method: 'POST',
        url: 'http://localhost:1337/upload',
        data: dataImage
    });
    return data
}


export const useContact = async (contact: any) => {
    const response = await fetch(URL_BASE_EMAILS, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    response.status === 200 ? toast.success("Send Successfully") : toast.warning("Send Failed")
}