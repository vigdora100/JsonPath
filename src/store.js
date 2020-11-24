import { createStore } from 'redux'
import GraphJsonReducer from './reducer'
export default createStore(GraphJsonReducer, null, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())