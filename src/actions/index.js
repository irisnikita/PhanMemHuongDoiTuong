import * as Types from './../constants/actionType';
import callApi from './../utils/apiCaller';

export const actFetchStaffRequest = ()=>{
    return(dispatch)=>{
        return callApi('staffs','GET',null).then(res=>{
            dispatch(actFetchStaff(res.data))
        })
    }
}
export const actFetchStaff = (staffs)=>{
    return{
        type: Types.FETCH_STAFF,
        staffs
    }
}
export const actGetOneStaffRequest = (id)=>{
    return(dispatch)=>{
        return callApi(`staffs/${id}`,'GET',null)
        .then(res=>{
            dispatch(actGetOneStaff(res.data))
        })
    }
}
export const actGetOneStaff = (staff)=>{
    return{
        type:Types.GET_ONE_STAFF,
        staff
    }
}

export const actDeleteStaff = (id)=>{
    return{
        type:Types.DELETE_STAFF,
        id
    }
}
export const actDeleteStaffRequest = (id)=>{
    return (dispatch)=>{
        return callApi(`staffs/${id}`,'DELETE',null)
        .then((res)=>{
            dispatch(actDeleteStaff(id))
        })
    }
}
export const actInsertStaff = (staff)=>{
    return {
        type: Types.INSERT_STAFF,
        staff
    }
}
export const actInsertStaffRequest = (staff)=>{
    return (dispatch)=>{
        return callApi(`staffs/`,'POST',staff)
        .then((res)=>{
            console.log(res.data)
            dispatch(actInsertStaff(res.data))
        })
    }
}

export const actUpdateStaff =(staff)=>{
    return {
        type: Types.UPDATE_STAFF,
        staff
    }
}
export const actUpdateStaffRequest = (staff)=>{
    console.log(staff);
    return (dispatch)=>{
        return callApi(`staffs/${staff.id}`,'PUT',staff)
        .then(res=>{
            dispatch(actUpdateStaff(staff))
        })
    }
}