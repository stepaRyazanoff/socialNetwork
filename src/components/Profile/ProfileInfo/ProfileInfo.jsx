import React, { useState } from 'react'
import ProfileData from './ProfileData'
import cl from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileDataForm from './ProfileDataForm'
import photo from '../../../assets/images/images.png'
import Preloader from '../../Common/Preloader/Preloader'

const ProfileInfo = ({ profile, isOwner, ...props }) => {
	const setUserPhoto = (e) => {
		if (e.target.files.length) {
			props.setUserPhoto(e.target.files[0])
		}
	}

	const [editMode, setEditMode] = useState(false)
	const onEditMode = () => setEditMode(true)

	const sendProfileForm = formData => {
		props.sendProfileForm(formData).then(response => {
			if (response === 0) {
				setEditMode(false)
			}
		})
	}

	return (
		<div>
			{!profile
				? <Preloader />
				: <div className={cl.profile}>
					<h1>{profile.fullName}</h1>
					<div className={cl.photo}>
						{isOwner &&
							<div>
								<input onChange={setUserPhoto} type='file' />
							</div>}
						<img src={profile.photos.large || photo} alt='#' />
					</div>
					<ProfileStatus {...props} />
					{editMode
						? <ProfileDataForm
							initialValues={profile}
							onSubmit={sendProfileForm}
							profile={profile} />
						: <ProfileData
							isOwner={isOwner}
							profile={profile}
							onEditMode={onEditMode} />
					}
				</div>
			}
		</div>
	)
}

export default ProfileInfo
