import { User } from './user.interface'

export interface Review {
	id: number
	user: User
	createdAt: string
	text: string
	rating: number
	productId: number
}

export type CreateReviewType = Pick<Review, 'rating' | 'text' | 'productId'>
export type UpdateReviewType = Pick<Review, 'rating' | 'text' | 'id'>
export type DeleteReviewType = Pick<Review, 'id'>
