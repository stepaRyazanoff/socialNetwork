import React, { useEffect, useState } from 'react'


const ProfileStatus = (props) => {

	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => setEditMode(true)

	const onStatusChange = (e) => setStatus(e.target.value)

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateUserStatus(status)
	}

	return (
		<div>
			{!editMode && (
				<div>
					<span><b>Status</b>: </span>
					<span onDoubleClick={activateEditMode}>
						{props.status || 'hey'}
					</span>
				</div>
			)}

			{editMode && (
				<div>
					<input
						autoFocus
						value={status}
						onChange={onStatusChange}
						onBlur={deactivateEditMode}
					/>
				</div>
			)}
		</div>
	)

}

export default ProfileStatus
