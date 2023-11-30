import { stopSubmit } from 'redux-form'
import { authAPI, profileAPI, securityAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_SMALL_USER_PHOTO = 'SET_SMALL_USER_PHOTO'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captcha: null,
	smallUserPhoto: null,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.dataAuth,
			}

		case SET_SMALL_USER_PHOTO:
			return {
				...state,
				smallUserPhoto: action.photo,
			}

		case SET_CAPTCHA:
			return {
				...state,
				captcha: action.captcha
			}

		default:
			return state
	}
}

export const setUserAuthSuccess = (id, login, email, isAuth) => ({
	type: SET_USER_DATA,
	dataAuth: { id, login, email, isAuth },
})

export const setSmallUserPhoto = photo => ({
	type: SET_SMALL_USER_PHOTO,
	photo,
})

export const setCaptcha = captcha => ({
	type: SET_CAPTCHA,
	captcha,
})

export const getUserAuth = () => async dispatch => {
	const response = await authAPI.me()
	if (response.resultCode === 0) {
		const responseWithUserPhoto = await profileAPI.getUserProfile(response.data.id)
		const { id, login, email } = response.data
		dispatch(setUserAuthSuccess(id, login, email, true))
		dispatch(setSmallUserPhoto(responseWithUserPhoto.photos.small))
	}
}

export const getLogin = loginData => async dispatch => {
	const response = await authAPI.getLogin(loginData)
	if (response.resultCode === 0) {
		dispatch(getUserAuth())
	} else if (response.resultCode === 10) {
		dispatch(getCaptcha())
	} else {
		dispatch(stopSubmit('login', {
			_error: response.messages.length > 0 ? response.messages[0] : 'Some error',
		}))
	}
}

export const logOut = () => async dispatch => {
	const response = await authAPI.logOut()
	if (response.resultCode === 0) {
		dispatch(setUserAuthSuccess(null, null, null, false))
	}
}

export const getCaptcha = () => async dispatch => {
	const response = await securityAPI.getCaptcha()
	dispatch(setCaptcha(response))
}

export default authReducer
