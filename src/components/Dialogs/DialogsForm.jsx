import React from 'react'
import { reduxForm } from 'redux-form'
import { CreateField } from '../../utils/helpers/createField'
import { CreateForm } from '../Common/FormsControl/FormsControl'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const maxLength = maxLengthCreator(100)
const Textarea = CreateForm('textarea')

const DialogsForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			{CreateField('newMessageText', Textarea, 'Enter your message', null, [required, maxLength,])}
			<div>
				<button>Add message</button>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'addMessage' })(DialogsForm)
