import { Button } from '@/ui/button/Button'
import { Dispatch, SetStateAction } from 'react'

type Props = {
	total: number
	perPage: number
	page: number
	setPage: Dispatch<SetStateAction<number>>
}

export const PaginationPageList = ({
	perPage,
	total,
	page,
	setPage
}: Props) => {
	const length = Math.ceil(total / perPage)
	const mockArray = Array.from({ length })

	return (
		<div className='text-center mt-16'>
			{mockArray.map((_, index) => {
				const pageNumber = index + 1
				const variant = page === pageNumber ? 'orange' : 'white'
				const goToPage = () => setPage(pageNumber)
				return (
					<Button
						variant={variant}
						onClick={goToPage}
						className='mx-3'
						key={index}
					>
						{pageNumber}
					</Button>
				)
			})}
		</div>
	)
}
