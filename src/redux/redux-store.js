import thunk from 'redux-thunk'
import appReducer from './app-reducer'
import authReducer from './auth-reducer'
import usersReducer from './users-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import { reducer as formReducer } from 'redux-form'
import { applyMiddleware, combineReducers, legacy_createStore as createStore, } from 'redux'

const reducers = combineReducers({
	form: formReducer,
	appData: appReducer,
	authData: authReducer,
	usersData: usersReducer,
	profileData: profileReducer,
	dialogsData: dialogsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
