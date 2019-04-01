import { combineReducers } from 'redux'

import networkReducer from './../networks/networkReducer'
import navbarReducer from './../redux/reducers/navbarReducer';

const rootReducer = combineReducers({
    network: networkReducer,
    navbar: navbarReducer
})

export default rootReducer