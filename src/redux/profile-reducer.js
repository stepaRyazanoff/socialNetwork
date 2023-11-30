import { stopSubmit } from 'redux-form'
import { profileAPI } from '../api/api'
import { setSmallUserPhoto } from './auth-reducer'

const ADD_POST = 'ADD_POST'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_USER_PROFILE = 'SET_USERS_PROFILE'

let initialState = {
	posts: [
		{
			id: 1,
			message: 'Hey, how are you',
			likesCount: 3,
			userImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jxiqqPu-duevzeT0IH6MBvijTJh8V_F7lQ&usqp=CAU',
		},

		{
			id: 2,
			message: 'Fuck you asshole',
			likesCount: 7,
			userImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jxiqqPu-duevzeT0IH6MBvijTJh8V_F7lQ&usqp=CAU',
		},
	],

	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 3,
						message: action.post,
						likesCount: 7,
						userImage:
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jxiqqPu-duevzeT0IH6MBvijTJh8V_F7lQ&usqp=CAU',
					},
				],
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}

		case SET_USER_STATUS:
			return {
				...state,
				status: action.status,
			}

		case SET_USER_PHOTO:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			}

		default:
			return state
	}
}

export const addPostAC = post => ({
	type: ADD_POST,
	post,
})

const setUserProfileSuccess = profile => ({
	type: SET_USER_PROFILE,
	profile,
})

const setUserStatus = status => ({
	type: SET_USER_STATUS,
	status,
})

const setPhotoSuccess = photos => ({
	type: SET_USER_PHOTO,
	photos,
})

export const setUserProfile = profileId => async dispatch => {
	const response = await profileAPI.getUserProfile(profileId)
	dispatch(setUserProfileSuccess(response))
}

export const getUserStatus = userId => async dispatch => {
	const response = await profileAPI.getUserStatus(userId)
	dispatch(setUserStatus(response))
}

export const updateUserStatus = status => async dispatch => {
	const response = await profileAPI.updateUserStatus(status)
	if (response.resultCode === 0) dispatch(setUserStatus(status))
}

export const setUserPhoto = filePhoto => async dispatch => {
	const response = await profileAPI.setUserPhoto(filePhoto)
	if (response.resultCode === 0) {
		dispatch(setPhotoSuccess(response.data.photos))
		dispatch(setSmallUserPhoto(response.data.photos.small))
	}
}

export const sendProfileForm = (data) => async (dispatch, getState) => {
	const response = await profileAPI.sendProfileForm(data)
	if (response.resultCode === 0) {
		dispatch(setUserProfile(getState().authData.id))
	} else {
		const messageWithError = response.messages.join()
		const error = messageWithError.slice(messageWithError.indexOf('>') + 1, messageWithError.indexOf(')')).toLowerCase()
		dispatch(stopSubmit('editProfile', {
			'contacts': { [error]: response.messages[0] }
		})
		)
	}
	return response.resultCode
}

export default profileReducer
