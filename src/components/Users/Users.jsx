import React from 'react'
import User from './User'
import cl from './Users.module.css'
import Paginator from '../Common/Paginator/Paginator'
import Preloader from '../Common/Preloader/Preloader'

const Users = ({ isFetching, users, ...props }) => {
	return (
		<div className={cl.wrapper}>
			<Paginator onPageChanged={props.onPageChanged} {...props} />
			{isFetching
				? <Preloader />
				: users.map(user => <User
					{...props}
					user={user}
					key={user.id}
				/>)
			}
		</div>
	)
}

export default Users
