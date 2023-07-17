import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react'
import cn from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'white' | 'orange'
}

export const Button: FC<PropsWithChildren<Props>> = ({
	children,
	className,
	variant,
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(
				'rounded-2xl font-semibold shadow-md px-10 py-2',
				{
					'text-white bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'white'
				},
				className
			)}
		>
			{children}
		</button>
	)
}
