import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../src/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { AuthProvider } from '@/providers/AuthProvider'
import { ComponentAuthFields } from '@/providers/types'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({
	Component,
	pageProps
}: AppProps & ComponentAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
