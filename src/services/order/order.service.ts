import { getAllOrders } from '@/api/requests/order/getAllOrders'

export const OrderService = {
	// get all orders just for current user
	async getAll() {
		return getAllOrders()
	}
}
