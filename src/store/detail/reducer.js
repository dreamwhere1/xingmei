import * as Types from './actionTypes'

const initState = {
  goodMsg: {}
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === Types.INIT_GOOD_MSG) {
    newState.goodMsg = action.res
  }
  if (action.type === Types.EMPTY_GOOD) {
    newState = initState
  }
  return newState
}
