import *as Types from './actionTypes';

const initState={
    
};
export default (state=initState,action)=>{
    let newState=JSON.parse(JSON.stringify(state));
    if(action.type===Types.SET_FILM_LIST){
        newState.list=action.list;
        newState.pageTOtal=action.pageTOtal;
    }
    return newState;
}