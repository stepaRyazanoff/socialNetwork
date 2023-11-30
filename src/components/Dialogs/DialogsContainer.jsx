import Dialogs from './Dialogs'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRedirect } from '../../hoc/withRedirect'
import { addMessage } from '../../redux/dialogs-reducer'

const mapStateToProps = state => ({
	dialogsData: state.dialogsData,
})

export default compose(withRedirect, connect(mapStateToProps, { addMessage, }))(Dialogs)
