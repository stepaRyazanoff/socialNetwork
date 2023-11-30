import React from 'react'
import { reduxForm } from 'redux-form'
import cl from './LoginForm.module.css'
import { required } from '../../../utils/validators/validators'
import { CreateField } from '../../../utils/helpers/createField'
import { CreateForm } from '../../Common/FormsControl/FormsControl'

const Input = CreateForm('input')

const LoginForm = ({ captcha, handleSubmit, error }) => {
	const summaryError = error ? cl.summaryError : ''

	return (
		<form onSubmit={handleSubmit}>
			<div className={cl.loginForm + ' ' + summaryError}>
				{CreateField('email', Input, 'Email', null, [required], cl.login)}
				{CreateField('password', Input, 'Password', { type: 'password' }, [required], cl.password)}
				{CreateField('remember me', Input, null, { type: 'checkbox' }, null, cl.checkbox, 'remember me')}
				<div className={cl.errorSpan}>
					<span>{error}</span>
				</div>
				<img src={captcha} alt='' />
				{captcha && CreateField('captcha', Input, 'Captcha', null, [required])}
				<div className={cl.btnLogin}>
					<button>Login</button>
				</div>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'login' })(LoginForm)

