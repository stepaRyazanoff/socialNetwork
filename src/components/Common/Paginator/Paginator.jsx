import cn from 'classnames'
import cl from './Paginator.module.css'
import React, { useEffect, useState } from 'react'

const Paginator = ({ currentPage, totalUsersCount, pageSize, onPageChanged, portionSize = 10, }) => {

	useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage, portionSize])

	const totalPagesCount = Math.ceil(totalUsersCount / pageSize)
	const pages = []
	for (let i = 1; i <= totalPagesCount; i++) {
		pages.push(i)
	}

	const totalPortionCount = Math.ceil(totalPagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftBorderOfPagesPortion = (portionNumber - 1) * portionSize + 1
	const rightBorderOfPagesPortion = portionNumber * portionSize

	return (
		<div className={cl.paginator}>
			{portionNumber > 1 &&
				<button
					className={cl.button}
					onClick={() => setPortionNumber(portionNumber - 1)}>
					{'<'}
				</button>
			}

			{pages.filter(page => page >= leftBorderOfPagesPortion && page <= rightBorderOfPagesPortion).map(page => (
				<span
					key={page}
					onClick={() => onPageChanged(page)}
					className={cn({ [cl.selectedPage]: currentPage === page }, cl.pageNumber)}>
					{page}
				</span>
			))}

			{totalPortionCount > portionNumber &&
				<button
					className={cl.button}
					onClick={() => setPortionNumber(portionNumber + 1)}>
					{'>'}
				</button>
			}
		</div>
	)
}

export default Paginator
