import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { addPostAC } from '../../../redux/profile-reducer'

const mapStateToProps = state => ({
	posts: state.profileData.posts,
})

const mapDispatchToProps = dispatch => ({
	addPost: newPost => dispatch(addPostAC(newPost)),
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
