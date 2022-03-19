import boardReducer from "./boardReducer";
import gridReducer from "./gridReducer";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    board: boardReducer,
    grid: gridReducer
});

export default allReducers;