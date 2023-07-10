import { deleteCategory } from '@/api/requests/category/deleteCategory'
import { getAllCategories } from '@/api/requests/category/getAllCategories'
import { getCategoryById } from '@/api/requests/category/getCategoryById'
import { getCategoryBySlug } from '@/api/requests/category/getCategoryBySlug'
import { createCategory } from '@/api/requests/category/createCategory'
import { updateCategory } from '@/api/requests/category/updateCategory'
import {
	Category,
	CreateCategoryType,
	DeleteCategoryType,
	UpdateCategoryType
} from '@/types/category.interface'

export const CategoryService = {
	async getAll() {
		return getAllCategories()
	},

	async getById(id: number | string) {
		return getCategoryById(Number(id))
	},

	async getBySlug(slug: string) {
		return getCategoryBySlug(slug)
	},

	async create(data: CreateCategoryType) {
		return createCategory(data)
	},

	async update(data: UpdateCategoryType) {
		return updateCategory({ ...data, id: Number(data.id) })
	},

	async delete(data: DeleteCategoryType) {
		return deleteCategory({ id: Number(data.id) })
	}
}
