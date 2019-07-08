import * as Types from './actionTypes'

const initState = {
  sliderList: [],
  detailList: [],
  iconList: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === Types.INIT_ALL_LIST) {
    newState.sliderList = action.res[0].adv_list.item
    newState.detailList = [action.res[1].home3, action.res[2].home3]
  }
  if (action.type === Types.INIT_ICON_LIST) {
    newState.iconList = action.res
  }
  return newState
}
