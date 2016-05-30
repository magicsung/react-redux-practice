import { combineReducers } from 'redux';
import { totalPriceCountReducer } from './totalPriceCountReducer';


let reducers = combineReducers({
    totalPriceCounter: totalPriceCountReducer
});

export default reducers;
