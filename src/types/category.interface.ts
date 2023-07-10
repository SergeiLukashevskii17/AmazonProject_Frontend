export interface Category {
	id: number
	name: string
	slug: string
}

export type CreateCategoryType = Pick<Category, 'name'>
export type UpdateCategoryType = Omit<Category, 'slug'>
export type DeleteCategoryType = Pick<Category, 'id'>
