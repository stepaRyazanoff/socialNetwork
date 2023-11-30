import React from 'react'
import cl from './Message.module.css'

const Message = ({ id, message }) => {
	return (
		<div className={cl.message}>
			{id}. {message}
		</div>
	)
}

export default Message
