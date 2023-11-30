import Login from './Login'
import { connect } from 'react-redux'
import { getLogin } from '../../redux/auth-reducer'

const mapStateToProps = state => ({
	authData: state.authData,

})

export default connect(mapStateToProps, { getLogin })(Login)
