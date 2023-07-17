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

export interface Products {
	products: Product[]
}

export interface PaginationProducts extends Products {
	length?: number
}

export interface ProductDetails {
	product: Product
}

export type CreateProductType = Pick<
	Product,
	'name' | 'price' | 'description' | 'images'
> & {
	categoryId: number
}

export type UpdateProductType = CreateProductType & { id: number }

export type DeleteProductType = Pick<Product, 'id'>

export enum ProductSortTypes {
	high_price = 'high-price',
	low_price = 'low-price',
	newest = 'newest',
	oldest = 'oldest'
}

export type ProductDataFilters = {
	sort?: ProductSortTypes
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}
