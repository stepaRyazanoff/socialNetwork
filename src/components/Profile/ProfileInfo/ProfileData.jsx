import React from 'react'
import Contact from './Contact'
import cl from './ProfileInfo.module.css'

const ProfileData = ({ profile, isOwner, onEditMode }) => {

   return (
      <div className={cl.profile}>
         {isOwner && <button onClick={onEditMode}>Edit mode</button>}
         <div>
            <b>Full Name</b>: {profile.fullName}
         </div>
         <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
         </div>
         {profile.lookingForAJob &&
            <div>
               <b>My skills</b>: {profile.lookingForAJobDescription}
            </div>}
         <div>
            <b>About me</b>: {profile.aboutMe}
         </div>
         <div>
            <b>Contacts</b>:
            <div className={cl.contact}>
               {Object.keys(profile.contacts).map(key => {
                  return (
                     <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                  )
               })}
            </div>
         </div>
      </div>

   )
}

export default ProfileData