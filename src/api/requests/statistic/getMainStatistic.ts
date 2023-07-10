import { axiosAuth } from '@/api/api.interceptor'

type Count = { count: number }

type StatisticResponce = {
	orders: Count
	reviews: Count
	favorites: Count
	totalAmount: number
}

export const getMainStatistic = async () => {
	const responce = await axiosAuth<StatisticResponce>({
		url: `/statistics`,
		method: 'GET'
	})

	return responce
}
