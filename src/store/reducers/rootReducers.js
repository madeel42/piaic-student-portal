import {combineReducers} from 'redux';
import {getQuarter} from './quarterReducers';
import {courseReducers} from './courseReducers';
let allReducers = combineReducers({getQuarter,courseReducers});
export default allReducers;