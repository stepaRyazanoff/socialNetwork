import {
	maxLengthCreator,
	required,
} from '../../../utils/validators/validators'
import React from 'react'
import { reduxForm } from 'redux-form'
import { CreateField } from '../../../utils/helpers/createField'
import { CreateForm } from '../../Common/FormsControl/FormsControl'

const maxLength = maxLengthCreator(30)
const Textarea = CreateForm('textarea')

const PostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			{CreateField('addPost', Textarea, 'Add post', null, [
				required,
				maxLength,
			])}
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'addPost' })(PostForm)
