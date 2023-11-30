import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,

	headers: {
		'API-KEY': '9947e954-4f4d-4295-a326-d1a6673e842c',
	},
})


export const usersAPI = {
	getUsers: async (currentPage, pageSize) => {
		const response = await instance.get(
			`users?page=${currentPage}&count=${pageSize}`
		)
		return response.data
	},

	getOrDeletedFollowed: async (userId, followed) => {
		let response

		switch (followed) {
			case 'unsubscribe':
				response = await instance.delete(`follow/${userId}`, null)
				break

			case 'subscribe':
				response = await instance.post(`follow/${userId}`)
				break

			default:
				break
		}

		return response.data
	},
}


export const profileAPI = {
	getUserProfile: async profileId => {
		const response = await instance.get(`profile/${profileId}`)
		return response.data
	},

	getUserStatus: async userId => {
		const response = await instance.get(`profile/status/${userId}`)
		return response.data
	},

	updateUserStatus: async status => {
		const response = await instance.put(`profile/status`, { status })
		return response.data
	},

	sendProfileForm: async data => {
		const response = await instance.put(`profile`, data)
		return response.data
	},

	setUserPhoto: async photoFile => {
		const formData = new FormData()
		formData.append('image', photoFile)

		const response = await instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	}
}


export const authAPI = {
	me: async () => {
		const response = await instance.get('auth/me')
		return response.data
	},

	getLogin: async data => {
		const response = await instance.post('auth/login', data)
		return response.data
	},

	logOut: async () => {
		const response = await instance.delete('auth/login')
		return response.data
	},
}


export const securityAPI = {
	getCaptcha: async () => {
		const response = await instance.get('security/get-captcha-url')
		return response.data.url
	}
}