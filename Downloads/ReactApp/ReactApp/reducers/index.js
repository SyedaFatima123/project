import { combineReducers } from 'redux';
import submitFormReducer from './submitFormReducer';

export default combineReducers({
    form : submitFormReducer
});