import { axiosAuth } from '@/api/api.interceptor'
import { Order } from '@/types/order.interface'

export const getAllOrders = async () => {
	const responce = await axiosAuth<Order[]>({
		url: `/order`,
		method: 'GET'
	})

	return responce
}
