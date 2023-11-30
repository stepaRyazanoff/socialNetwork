import React from 'react'
import cl from './Post.module.css'

const Post = ({ id, message, likesCount, userImage }) => {
	return (
		<div className={cl.post}>
			<img src={userImage} alt='#' />
			<div>
				{id}. {message}
			</div>
			<span className={cl.like}>like: {likesCount}</span>
		</div>
	)
}

export default Post
