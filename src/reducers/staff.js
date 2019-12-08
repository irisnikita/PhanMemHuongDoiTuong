import * as Types from '../constants/actionType';

var initialState = {
};

const staff = (state=initialState,action)=>{
    switch (action.type) {
        case Types.GET_ONE_STAFF:
            state=action.staff
            return state
        default:
            return state
    }
}
export default staff;