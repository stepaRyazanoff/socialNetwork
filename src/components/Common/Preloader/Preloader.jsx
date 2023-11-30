import React from 'react'
import cl from './Preloader.module.css'

const Preloader = () => {
	return (
		<div className={cl.preloaderWrapper}>
			<div className={cl.preloader}></div>
		</div>
	)
}

export default Preloader
