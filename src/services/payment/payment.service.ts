import { createPayment } from '@/api/requests/payment/createPayment'
import { PaymentPayload } from '@/types/payment.interface'

export const PaymentService = {
	async getMain(amount: PaymentPayload) {
		return createPayment(amount)
	}
}
