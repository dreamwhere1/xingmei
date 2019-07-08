import * as Types from './actionTypes';

const initStat={
    inputVal:'',
    passWord:'',
    msg:'手机号错误',
    userList:[
        {
            username:'13116884736',
            secret:'123456'
        }
    ]
}




export  default (state=initStat,action)=>{
    let newState= JSON.parse(JSON.stringify(state));

    if (action.type === Types.SIGN_IN) {
        console.log(action.value);
        newState.inputVal = action.value;
      }

      if (action.type === Types.SECRETE_IN) {
        console.log(action.value);
        newState.passWord = action.value;
      }

      

      return newState
}









