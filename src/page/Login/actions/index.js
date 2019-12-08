import * as Types from '../../../constants/actionType';
import callApi from '../../../utils/apiCaller';

export const actLoginUser =(user)=>{
    return {
        type: Types.USER.LOGIN_USER,
        user
    }
}
export const actLoginUserRequest =(user)=>{
    console.log(user.nameUser)
    return (dispatch)=>{
        return callApi(`userlogin/${user.nameUser}`,'GET',user)
        .then(res=>{
            console.log(res.data)
            dispatch(actLoginUser(res.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const actLogoutOut =()=>{
    return {
        type: Types.USER.IS_LOGOUT
        
    }
}
export const actLogin =()=>{
    return {
        type: Types.USER.IS_LOGIN

    }
}