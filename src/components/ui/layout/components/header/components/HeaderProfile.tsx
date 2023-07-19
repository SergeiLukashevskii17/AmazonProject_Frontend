import { useGetProfile } from '@/hooks/query/user/useGetProfile'
import { FC } from 'react'
import Image from 'next/image'

export const HeaderProfile: FC = () => {
	const { userProfile } = useGetProfile()

	console.log(userProfile)

	return (
		<div>
			{userProfile?.avatarPath && (
				<Image
					width={44}
					height={44}
					src={userProfile.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid  animate-opacity'
				/>
			)}
		</div>
	)
}
