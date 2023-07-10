import { axiosAuth } from '@/api/api.interceptor'
import { PaymentPayload, PaymentResponse } from '@/types/payment.interface'

export const createPayment = async (data: PaymentPayload) => {
	const responce = await axiosAuth<PaymentResponse>({
		url: `/payment`,
		method: 'POST',
		data
	})

	return responce
}
