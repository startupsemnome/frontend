import { combineReducers } from 'redux'

import networkReducer from './../networks/networkReducer'
import navbarReducer from './../redux/reducers/navbarReducer';
import authReducer from './../redux/reducers/auth';

const rootReducer = combineReducers({
    network: networkReducer,
    navbar: navbarReducer,
    auth: authReducer
})

export default rootReducer