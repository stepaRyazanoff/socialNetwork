import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/helpers/object-helpers'

const SUBSCRIBE = 'SUBSCRIBE'
const SET_USERS = 'SET_USERS'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_IS_FETCHING = 'IS_FETCHING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	pageSize: 10,
	currentPage: 1,
	isFetching: false,
	totalUsersCount: 0,
	followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUBSCRIBE:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true },)
			}

		case UNSUBSCRIBE:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			}

		case SET_USERS:
			return {
				...state,
				users: action.users,
			}

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalCount }

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}

		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			}

		default:
			return state
	}
}

export const subscribeSuccess = userId => ({
	type: SUBSCRIBE,
	userId,
})

export const unsubscribeSuccess = userId => ({
	type: UNSUBSCRIBE,
	userId,
})

export const setUsers = users => ({
	type: SET_USERS,
	users,
})

export const setTotalUsersCount = totalCount => ({
	type: SET_TOTAL_USERS_COUNT,
	totalCount,
})

export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

export const setIsFetching = isFetching => ({
	type: SET_IS_FETCHING,
	isFetching,
})

export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})

export const getUsers = (currentPage, pageSize) => async dispatch => {
	dispatch(setIsFetching(true))
	dispatch(setCurrentPage(currentPage))
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
	dispatch(setIsFetching(false))
}


const subscribeUnsubscribeFlow = async (userId, followedData, dispatch, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId))
	const response = await usersAPI.getOrDeletedFollowed(userId, followedData)
	if (response.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}
export const unsubscribe = (userId, followedData) => dispatch => subscribeUnsubscribeFlow(userId, followedData, dispatch, unsubscribeSuccess)
export const subscribe = (userId, followedData) => dispatch => subscribeUnsubscribeFlow(userId, followedData, dispatch, subscribeSuccess)



export default usersReducer
