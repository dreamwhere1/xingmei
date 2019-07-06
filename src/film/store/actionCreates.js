import *as Types from './actionTypes';
import http from '@/utils/http';

export const onFilmList=(data)=>({
    type:Types.SET_FILM_LIST,
    ...data
})
export const asyncFilmList=()=>{
    return(dispatch)=>{
         http.get('/gateway',
         { params:{
            cityId:440300,
            pageNum:1,
            pageSize:10,
            type:1,
            k:2792060
         },
         headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562247294751619278625"}',
            'X-Host': 'mall.film-ticket.film.list'
         }
        })
         .then(res=>{
            dispatch({type:Types.SET_FILM_LIST,list:res.data.films})
         })
    }
}