import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = state => ({
	isAuth: state.authData.isAuth,
})

export const withRedirect = Component => {
	const ComponentWithRedirect = props => {
		if (!props.isAuth) return <Navigate to={'/login'} />

		return <Component {...props} />
	}

	return connect(mapStateToProps)(ComponentWithRedirect)
}
