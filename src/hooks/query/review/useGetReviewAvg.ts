import { ReviewService } from '@/services/review/review.service'
import { useQuery } from '@tanstack/react-query'

export const useGetReviewAvg = (id: number | string) => {
	const { data: productAvgRating, isLoading: isProductAvgRatingLoading } =
		useQuery(
			['getProductRating', id],
			() => ReviewService.getProductAvgRating(id),
			{ select: ({ data }) => data.rating }
		)

	return {
		productAvgRating: productAvgRating || 0,
		isProductAvgRatingLoading
	}
}
