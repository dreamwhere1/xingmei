import * as Types from './actionTypes'

export const getSearchList = searchMsg => ({
  type: Types.GET_SEARCH_LIST,
  searchMsg
})

export const initSearchList = res => {
  return {
    type: Types.INIT_SEARCH_LIST,
    res
  }
}

export const emptyState = () => ({ type: Types.EMPTY_STATE })

export const sortList = index => ({ type: Types.SORT_LIST, index })
