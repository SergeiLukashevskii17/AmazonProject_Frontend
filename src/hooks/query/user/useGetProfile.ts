import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'

export const useGetProfile = () => {
	const { user } = useAuth()

	const { data: userProfile, isLoading: isUserProfileLoading } = useQuery(
		['getProfile'],
		() => UserService.getCurrentUser(),
		{
			select: ({ data }) => data,
			enabled: !!user
		}
	)

	return {
		userProfile,
		isUserProfileLoading
	}
}
