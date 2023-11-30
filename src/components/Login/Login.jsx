import React from 'react'
import cl from './Login.module.css'
import { Navigate } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm'

const Login = ({ authData: { isAuth, captcha }, getLogin }) => {


	const onSubmit = formData => {
		getLogin(formData)
	}

	if (isAuth) return <Navigate to='/profile' />
	return (
		<div className={cl.loginContent}>
			<div className={cl.headerLogin}>
				<h1>Login</h1>
			</div>
			<LoginForm captcha={captcha} onSubmit={onSubmit} />
		</div>
	)
}

export default Login
