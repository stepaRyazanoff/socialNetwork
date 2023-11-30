import React from 'react'
import cl from './Headers.module.css'
import { NavLink } from 'react-router-dom'

const Header = ({ isAuth, login, photoSmall, logOut }) => {
	return (
		<header className={cl.header}>
			<div>Social Network</div>
			{isAuth
				? <div className={cl.login}>
					<div className={cl.logOut}>
						<button onClick={logOut}>Logout</button>
					</div>
					<div className={cl.userLogin}>{login}</div>
					<div>
						<img src={photoSmall} alt='#' />
					</div>
				</div>
				:
				<div className={cl.login}>
					<NavLink to={'/login'}>Login</NavLink>
				</div>
			}
		</header>
	)
}

export default Header
