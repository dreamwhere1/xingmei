import * as Types from './actionTypes'

export const onFilmList = data => ({
  type: Types.SET_FILM_LIST,
  ...data
})
export const asyncFilmList = () => ({ type: 'getFilmList' })
