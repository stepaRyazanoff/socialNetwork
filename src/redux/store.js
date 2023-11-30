import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'

export const store = {
	_state: {
		profileData: {
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

			newPostText: '',
		},

		dialogsData: {
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

			newMessageText: '',
		},
	},

	_callSubscriber() {},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profileData = profileReducer(this._state.profileData, action)
		this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
		this._callSubscriber(this)
	},
}

window._store = store
