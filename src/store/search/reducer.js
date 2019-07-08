import * as Types from './actionTypes'

const initState = {
  defaultList: [],
  searchList: [],
  currentPage: 1,
  load: 1,
  pageTotal: 1,
  sort: 0,
  text: ''
}

const sort = (state, index) => {
  switch (index) {
    case 1:
      state.searchList.sort((a, b) => {
        return b.goods_price - a.goods_price
      })
      break
    case 2:
      state.searchList.sort((a, b) => {
        return a.goods_price - b.goods_price
      })
      break
    case 3:
      state.searchList = state.defaultList
      break
    default:
      state.searchList = state.defaultList
      break
  }
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === Types.INIT_SEARCH_LIST) {
    newState.searchList = [].concat(newState.searchList, action.res)
    if (action.text && newState.text !== action.text) {
      newState.searchList = action.res
    }
    newState.defaultList = newState.searchList
    sort(newState, state.sort)
    if (action.res.length > 0) newState.currentPage += 1
    newState.load = action.load
    newState.pageTotal = action.pageTotal
    newState.text = action.text
  }
  if (action.type === Types.EMPTY_STATE) {
    newState = initState
  }
  if (action.type === Types.SORT_LIST) {
    newState.sort = action.index
    sort(newState, newState.sort)
  }
  return newState
}
