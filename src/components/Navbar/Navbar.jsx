import React from 'react'
import cl from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => (isActive ? cl.activeLink : '')

const Navbar = () => {
	return (
		<div className={cl.navbar}>
			<nav>
				<div>
					<NavLink to='/profile' className={setActive}>
						Profile
					</NavLink>
				</div>
				<div>
					<NavLink to={'/users'} className={setActive}>
						Users
					</NavLink>
				</div>
				<div>
					<NavLink to='/dialogs' className={setActive}>
						Messages
					</NavLink>
				</div>
				{/* <div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>
				<div>
					<a>Settings</a>
				</div> */}
			</nav>
		</div>
	)
}

export default Navbar
