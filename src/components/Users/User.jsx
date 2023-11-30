import React from 'react'
import cl from './User.module.css'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/images.png'
import { CreateButton } from '../../utils/helpers/createButton'


const User = ({ user, ...props }) => {
	return (
		<div >
			<div key={user.id} className={cl.wrapperContent}>
				<div className={cl.item_1}>
					<NavLink to={'/profile/' + user.id}>
						<img src={user.photos.small || userPhoto} alt='#' />
					</NavLink>
				</div>
				<div className={cl.item_2}>
					{user.followed
						? CreateButton(props.followingInProgress, user.id, props.unsubscribe, 'unsubscribe', 'Unsubscribe')
						: CreateButton(props.followingInProgress, user.id, props.subscribe, 'subscribe', 'Subscribe')
					}
				</div>
				<div className={cl.item_3}>{user.name}</div>
				<div className={cl.item_4}>{user.status}</div>
			</div>
		</div>
	)
}

export default User
