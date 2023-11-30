import './App.css'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from './hoc/withRouter'
import Navbar from './components/Navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { withSuspense } from './hoc/withSuspense'
import { initializeApp } from './redux/app-reducer'
import LoginContainer from './components/Login/LoginContainer'
import UsersContainer from './components/Users/UsersContainer'
import Preloader from './components/Common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

const Dialogs = withSuspense(DialogsContainer)

class App extends React.Component {
	catchAllUnhandledErrors(reason, promise) {
		console.error(reason, promise)
	}

	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}

	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}

	render() {
		if (!this.props.initialized) return <Preloader />
		return (
			<div className='App'>
				<HeaderContainer />
				<Navbar />
				<div className='appContent'>
					<Routes>
						<Route path={'/dialogs/*'} element={<Dialogs />} />
						<Route path={'/users'} element={<UsersContainer />} />
						<Route path={'/login'} element={<LoginContainer />} />
						<Route path={'/*'} element={<h1>Page not found</h1>} />
						<Route path={'/'} element={<Navigate to={'/profile'} />} />
						<Route path={'/profile/:profileId?'} element={<ProfileContainer />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.appData.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)
