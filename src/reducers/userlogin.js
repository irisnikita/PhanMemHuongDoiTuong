import * as Types from '../constants/actionType'

var userlogin = JSON.parse(localStorage.getItem('userlogin'));
var initialState = userlogin?userlogin:{
    id:0
};

const user = (state=initialState,action)=>{
    switch (action.type){
        case Types.USER.LOGIN_USER:
            state=action.user
            return {...state}
        case Types.USER.IS_LOGIN:
            state.isLogin=1
            return {...state}
        case Types.USER.IS_LOGOUT:
            state={
                id:0
            };
            return state
        default:
            return {...state}
    }
}
export default user;