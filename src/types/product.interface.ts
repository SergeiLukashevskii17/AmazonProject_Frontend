import { Category } from './category.interface'
import { Review } from './review.interface'

export interface Product {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: Review[]
	images: string[]
	createdAt: string
	category: Category
}

export interface ProductDetails {
	product: Product
}
