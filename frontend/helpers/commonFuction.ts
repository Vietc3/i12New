import { URL_BASE } from '../constants';
import moment from 'moment';
import _ from 'lodash';
export const getUrlImage = (image: string) => {
    return URL_BASE + image
}

export const getCategories = (categories: string) => { 
 const data =  categories.split(',').map((category:any)=>{
     const result = category.charAt(0) === ' ' ? category.substr(1) : category
     return result
 });
 
  return data
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


