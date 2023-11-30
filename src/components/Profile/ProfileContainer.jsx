import React from 'react'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from '../../hoc/withRouter'
import { withRedirect } from '../../hoc/withRedirect'
import { setUserProfile, getUserStatus, updateUserStatus, setUserPhoto, sendProfileForm } from '../../redux/profile-reducer'


class ProfileContainer extends React.Component {

	refreshProfile() {
		let profileId = this.props.router.params.profileId
		if (!profileId) profileId = this.props.myId

		this.props.setUserProfile(profileId)
		this.props.getUserStatus(profileId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.router.params.profileId !== this.props.router.params.profileId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<div>
				<Profile
					status={this.props.status}
					profile={this.props.profile}
					setUserPhoto={this.props.setUserPhoto}
					sendProfileForm={this.props.sendProfileForm}
					isOwner={!this.props.router.params.profileId}
					updateUserStatus={this.props.updateUserStatus}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	myId: state.authData.id,
	isAuth: state.authData.isAuth,
	status: state.profileData.status,
	profile: state.profileData.profile,
})

export default compose(
	withRouter,
	withRedirect,
	connect(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus, setUserPhoto, sendProfileForm }))(ProfileContainer)
