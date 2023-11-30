import React from 'react'
import Post from './Post/Post'
import PostForm from './PostForm'
import cl from './MyPosts.module.css'

const MyPosts = ({ posts, addPost }) => {

	const addNewPost = formData => {
		addPost(formData.addPost)
	}

	return (
		<div className={cl.posts}>
			<PostForm onSubmit={addNewPost} />
			{posts.map(post => (
				<Post key={post.id} {...post} />
			))}
		</div>
	)

}

export default MyPosts
