import {combineReducers} from 'redux';
import Staffs from './liststaff';
import staff from './staff';
import user from './userlogin';

const appReducers = combineReducers({
    Staffs,
    staff,
    user
});

export default appReducers;