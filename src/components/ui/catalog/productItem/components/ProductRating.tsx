import { Review } from '@/types/review.interface'
import { isFloat } from '@/utils/convertPrice'
import { FC, useMemo } from 'react'
import { Rating } from 'react-simple-star-rating'

export const ProductRating: FC<{
	reviews: Review[]
}> = ({ reviews }) => {
	const productAvgRating = useMemo(() => {
		const rating =
			reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

		return rating ? Number(isFloat(rating) ? rating.toFixed(1) : rating) : 0
	}, [])

	return (
		<div className='mb-2'>
			<span className='mr-1'>
				<Rating
					readonly
					initialValue={productAvgRating}
					SVGstyle={{
						display: 'inline-block'
					}}
					size={24}
					allowFraction
					transition
				/>
				<span className='text-gold text-sm ml-1'>{productAvgRating}</span>
			</span>
			<span className='text-sm'>({reviews.length} reviews)</span>
		</div>
	)
}
