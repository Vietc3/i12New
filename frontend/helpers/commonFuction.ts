import { URL_BASE } from '../constants';
import moment from 'moment';

export const getUrlImage = (image: string) => {
    return URL_BASE + image
}

export const getTags = (tags: string) => { 
    return tags.split(',')
}

export const getProductIds = (ids: string) => { 
    return ids.split(',')
}

export const formatDatePublic = (datePublic: any) => {
    return moment(datePublic).format("Do MMM YY");
}
