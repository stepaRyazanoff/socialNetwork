import { Field } from 'redux-form'

export const CreateField = (name, Component, placeholder, type = {}, validate, className, text = '') => {
	return (
		<div key={name} className={className} >
			<Field name={name} {...type} validate={validate} component={Component} placeholder={placeholder} />
			{text}
		</div>
	)
}
