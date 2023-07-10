import { User } from '@/types/user.interface'

export interface UserState {
	email: string
	isAdmin: boolean
}
export interface Tokens {
	accessToken: string
	refreshToken: string
}
export interface InitialState {
	user: UserState | null
	isLoading: boolean
}
export interface EmailPassword {
	email: string
	password: string
}
export interface AuthResponce extends Tokens {
	user: User
}
