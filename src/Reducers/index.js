import { combineReducers } from 'redux'
import authedUser from './authedUsers'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer
})