import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { HeaderCart } from './components/cart/HeaderCart'
import { HeaderProfile } from './components/HeaderProfile'

export const Header = () => {
	return (
		<header
			className='bg-secondary w-full h-20 py-3 px-10 flex items-center justify-between'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href='/'>
				<Image
					width={180}
					height={50}
					priority
					src={'/images/logo.svg'}
					alt='Amazon'
				/>
			</Link>
			{/* <Search /> */}
			<div className='flex items-center  gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}
