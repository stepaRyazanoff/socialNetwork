import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logOut } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = state => ({
	id: state.authData.id,
	login: state.authData.login,
	email: state.authData.email,
	isAuth: state.authData.isAuth,
	photoSmall: state.authData.smallUserPhoto,
})

export default connect(mapStateToProps, { logOut })(HeaderContainer)
