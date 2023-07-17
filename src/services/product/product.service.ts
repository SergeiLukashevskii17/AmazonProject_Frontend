import { createCategory } from '@/api/requests/category/createCategory'
import { deleteProduct } from '@/api/requests/products/deleteProduct'
import { getAllProducts } from '@/api/requests/products/getAllProducts'
import { getProductById } from '@/api/requests/products/getProductById'
import { getProductBySlug } from '@/api/requests/products/getProductBySlug'
import { getSimilarProducts } from '@/api/requests/products/getSimilarProducts'
import { updateProduct } from '@/api/requests/products/updateProduct'
import {
	CreateProductType,
	DeleteProductType,
	ProductDataFilters,
	UpdateProductType
} from '@/types/product.interface'

export const ProductService = {
	async getAll(query?: ProductDataFilters) {
		return getAllProducts(query)
	},
	async getSimilar(id: string | number) {
		return getSimilarProducts(Number(id))
	},
	async getById(id: number | string) {
		return getProductById(Number(id))
	},
	async getBySlug(categorySlug: string) {
		return getProductBySlug(categorySlug)
	},
	async create(data: CreateProductType) {
		return createCategory(data)
	},
	async update(data: UpdateProductType) {
		return updateProduct(data)
	},
	async delete(data: DeleteProductType) {
		return deleteProduct(data)
	}
}
