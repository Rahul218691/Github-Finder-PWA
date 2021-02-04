import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {
    userDetailsReducer,
    userReposReducer
} from './reducers/GitReducer';

const reducer = combineReducers({
    userDetails:userDetailsReducer,
    userRepo:userReposReducer
});

const initialState = {}
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;