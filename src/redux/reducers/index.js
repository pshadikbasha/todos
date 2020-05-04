import {combineReducers} from 'redux';
import logReducer from '../reducers/todoReducer';
import userReducer from './userReducer';
export default combineReducers({
    todo:logReducer,
    user:userReducer,
});