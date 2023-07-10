import { createReview } from '@/api/requests/review/createReview'
import { deleteReview } from '@/api/requests/review/deleteReview'
import { getAllReviews } from '@/api/requests/review/getAllReviews'
import { getProductAvgRating } from '@/api/requests/review/getProductAvgRating'
import { getReviewById } from '@/api/requests/review/getReviewById'
import { updateReview } from '@/api/requests/review/updateReview'
import {
	CreateReviewType,
	DeleteReviewType,
	Review,
	UpdateReviewType
} from '@/types/review.interface'

export const ReviewService = {
	async getProductAvgRating(id: number | string) {
		return getProductAvgRating(Number(id))
	},

	async getAll() {
		return getAllReviews()
	},

	async getById(id: number | string) {
		return getReviewById(Number(id))
	},

	async create(data: CreateReviewType) {
		return createReview(data)
	},

	async update(data: UpdateReviewType) {
		return updateReview(data)
	},

	async delete(data: DeleteReviewType) {
		return deleteReview({ id: Number(data.id) })
	}
}
