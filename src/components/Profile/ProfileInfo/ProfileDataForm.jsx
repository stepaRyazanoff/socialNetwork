import React from 'react'
import { reduxForm } from 'redux-form'
import cl from './ProfileDataForm.module.css'
import { CreateField } from '../../../utils/helpers/createField'
import { CreateForm } from '../../Common/FormsControl/FormsControl'
import { required } from '../../../utils/validators/validators'

const Input = CreateForm('input')
const Textarea = CreateForm('textarea')

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}>
         <b>Full Name</b>: {CreateField('fullName', Input, 'Full name', null, [required])}
         <b>Looking for a job</b>: {CreateField('lookingForAJob', Input, null, { type: 'checkbox' }, [required])}
         <b>My skills</b>: {CreateField('lookingForAJobDescription', Textarea, 'Description', null, [required])}
         <b>About me</b>: {CreateField('aboutMe', Textarea, 'About me', null, [required])}
         <b>Contacts</b>:
         {Object.keys(profile.contacts).map(key => CreateField('contacts.' + key, Input, key, null, []))}
         <button>Save</button>
         {error && <div className={cl.error}>{error}</div>}
      </form>
   )
}

export default reduxForm({ form: 'editProfile' })(ProfileDataForm)