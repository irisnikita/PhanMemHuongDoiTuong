import * as Types from '../constants/actionType';

var initalState = [{}
];

var findindex =(staffs,id)=>{
    let result = -1
    staffs.forEach((staff,index)=>{
        if(staff.id===id){
            result=index;
        }
    })
    
    return result;
}

const Staffs = (state=initalState,action)=>{
    let index=-1;
    switch(action.type){
        case Types.FETCH_STAFF:
            state=action.staffs;
            return [...state];
        case Types.DELETE_STAFF:
            index=findindex(state,action.id);
            state.splice(index,1);
            return [...state];
        case Types.INSERT_STAFF:
            state.push(action.staff);
            return [...state];
        case Types.UPDATE_STAFF:
            index=findindex(state,action.staff.id);
            state[index]=action.staff
            return [...state];
        default: 
            return [...state];
    }
}
export default Staffs;