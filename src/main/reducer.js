import { combineReducers } from 'redux'

import networkReducer from './../networks/networkReducer'

const rootReducer = combineReducers({
    network: networkReducer
})

export default rootReducer