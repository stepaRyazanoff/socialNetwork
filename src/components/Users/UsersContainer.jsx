import React from 'react'
import Users from './Users'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRedirect } from '../../hoc/withRedirect'
import { getUsers, subscribe, unsubscribe, setTotalUsersCount, } from '../../redux/users-reducer'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersArray } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged(page) {
		this.props.getUsers(page, this.props.pageSize)
	}

	render() {
		return (
			<Users {...this.props} onPageChanged={this.onPageChanged.bind(this)} />
		)
	}
}

const mapStateToProps = state => ({
	users: getUsersArray(state),
	pageSize: getPageSize(state),
	isFetching: getIsFetching(state),
	currentPage: getCurrentPage(state),
	totalUsersCount: getTotalUsersCount(state),
	followingInProgress: getFollowingInProgress(state)
})

export default compose(withRedirect, connect(mapStateToProps, { getUsers, subscribe, unsubscribe, setTotalUsersCount, }))(UsersContainer)

