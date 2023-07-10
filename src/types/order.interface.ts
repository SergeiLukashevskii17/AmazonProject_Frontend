import { CartItem } from './cart.interface'
import { User } from './user.interface'

export enum OrderStatus {
	pending = 'pending',
	payed = 'payed',
	shipped = 'shipped',
	delivered = 'delivered'
}

export interface Order {
	id: number
	createdAt: string
	items: CartItem[]
	status: OrderStatus
	user: User
}
