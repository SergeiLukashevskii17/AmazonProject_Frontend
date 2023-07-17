import { useRouter } from 'next/router'
import { useAuth } from './useAuth'
import { useEffect } from 'react'

// maybe not needed
export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { replace } = useRouter()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
}
