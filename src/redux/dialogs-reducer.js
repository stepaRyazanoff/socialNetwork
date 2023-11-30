const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
	dialogs: [
		{ id: 1, name: 'Sophy' },
		{ id: 2, name: 'Tomek' },
		{ id: 3, name: 'Tyson' },
		{ id: 4, name: 'Valya' },
	],

	messages: [
		{ id: 1, message: 'Hey, it`s me;)' },
		{ id: 2, message: 'I`m little Tom)' },
		{ id: 3, message: 'Woof, Woof' },
		{ id: 4, message: 'Do you now?' },
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, { id: 5, message: action.message }],
			}

		default:
			return state
	}
}

export const addMessage = message => ({
	type: ADD_MESSAGE,
	message,
})

export default dialogsReducer
