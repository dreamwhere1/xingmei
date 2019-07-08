import * as Types from './actionTypes'

export const getGoodMsg = id => ({ type: Types.GET_GOOD_MSG, id })

export const initGoodMsg = res => {
  return {
    type: Types.INIT_GOOD_MSG,
    res
  }
}

export const emptyGood = () => ({ type: Types.EMPTY_GOOD })
