import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
// import { createStore } from 'redux'

import ItemsReducer from './reducers'

const store = createStore(ItemsReducer, applyMiddleware(thunk))

export default store;

export * as actionCreators from './actions'