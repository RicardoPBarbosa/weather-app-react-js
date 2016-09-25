import {combineReducers} from 'redux';

import weather from './weatherReducer';
import page from './pageReducer';
import myloc from './mylocReducer';

export default combineReducers({
	weather,
	page,
	myloc
});