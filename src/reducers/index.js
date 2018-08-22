import { combineReducers } from 'redux';

import fetchImage from './fetchImage';
import history from './history';

const rootReducer = combineReducers({ fetchImage, history });

export default rootReducer;
