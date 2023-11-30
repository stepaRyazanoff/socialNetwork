import React from 'react'
import cl from './Dialogs.module.css'
import DialogsForm from './DialogsForm'
import Message from './Message/Message'
import DialogItem from './Dialog/DialogItem'

const Dialogs = ({ dialogsData: { dialogs, messages }, addMessage }) => {
	const addNewMessage = formData => {
		addMessage(formData.newMessageText)
		formData.newMessageText = ''
	}

	return (
		<>
			<div className={cl.elements}>
				<DialogsForm onSubmit={addNewMessage} />
			</div>

			<div className={cl.dialogs}>
				<div className={cl.dialogsItems}>
					{dialogs.map(dialogEl => <DialogItem key={dialogEl.id} {...dialogEl} />)}
				</div>

				<div className={cl.messages}>
					{messages.map(message => <Message key={message.id} {...message} />)}
				</div>
			</div>
		</>
	)
}

export default Dialogs
