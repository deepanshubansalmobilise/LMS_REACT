import { combineReducers, createStore } from 'redux';
import authReducer from './AuthSlice.js';

const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here if needed
});
const store = createStore(rootReducer);

export default store;