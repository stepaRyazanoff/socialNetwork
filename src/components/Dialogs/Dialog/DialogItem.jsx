import React from 'react'
import cl from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => (isActive ? cl.activeLink : '')

const DialogItem = ({ name, id }) => {
	const path = '/dialogs/' + id

	return (
		<div className={cl.item}>
			<div>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU'
					alt='#'
				/>
			</div>
			<div className={cl.name}>
				<NavLink to={path} className={setActive}>
					{name}
				</NavLink>
			</div>
		</div>
	)
}

export default DialogItem
