import { FC, PropsWithChildren } from 'react'
import { ComponentAuthFields } from './types'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const CheckRoleProvider: FC<PropsWithChildren<ComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const { user } = useAuth()
	const router = useRouter()

	if (user && isOnlyUser) {
		return <>{children}</>
	}

	router.pathname !== 'auth' && router.replace('/auth')
	return <></>
}

export default CheckRoleProvider
