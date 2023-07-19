import { useGetProfile } from '@/hooks/query/user/useGetProfile'
import { FC } from 'react'
import Image from 'next/image'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { Spin } from 'antd'

export const HeaderProfile: FC = () => {
	const { userProfile, isUserProfileLoading } = useGetProfile()
	const { user } = useAuth()

	return (
		<div>
			{isUserProfileLoading ? (
				<div className='flex justify-center w-11'>
					<Spin />
				</div>
			) : userProfile?.avatarPath && user ? (
				<Image
					width={44}
					height={44}
					src={userProfile.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid  animate-opacity'
				/>
			) : (
				<Link href={'/auth'} className='text-primary'>
					Login
				</Link>
			)}
		</div>
	)
}
