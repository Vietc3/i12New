import { URL_BASE } from '../constants';
import moment from 'moment';
import _ from 'lodash';
export const getUrlImage = (image: string) => {
    return URL_BASE + image
}

export const getCategories = (categories: string) => { 
    return categories.split(',')
}

export const getProductIds = (ids: string) => { 
    return ids.split(',')
}

export const formatDatePublic = (datePublic: any) => {
    return moment(datePublic).format("Do MMM YY");
}

export const sortBy = async (obj:[], filter:string,asc:string,callBack:any ) =>{
        const orderBy = await _.orderBy(obj, [filter], [asc==='asc'?'asc':'asc']);
        callBack(orderBy)
}


