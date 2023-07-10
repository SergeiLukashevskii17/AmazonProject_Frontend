import { getMainStatistic } from '@/api/requests/statistic/getMainStatistic'

export const StatisticService = {
	async getMain() {
		return getMainStatistic()
	}
}
