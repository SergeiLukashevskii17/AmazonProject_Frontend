export interface User {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
	isAdmin: boolean
}

export type UpdateUserType = Omit<User, 'id'>

export enum ToggleFavoritesActions {
	add = 'add',
	remove = 'remove'
}

export type ToggleFavoritesType = { actionType: ToggleFavoritesActions }
