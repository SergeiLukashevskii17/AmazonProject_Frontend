import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { EmailPassword } from '@/store/user/user.interface'
import { AuthVariants } from '@/types/common'
import { Button } from '@/ui/button/Button'
import { Heading } from '@/ui/Heading'
import { Meta } from '@/ui/Meta'
import { TextField } from '@/ui/TextField'
import { loginValidation } from '@/validation/auth/loginValidation'
import { emailReg } from '@/validation/common/regs/emailReg'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Spin } from 'antd'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

export const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const { login, register } = useActions()

	const [type, setType] = useState<AuthVariants>(AuthVariants.login)

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<EmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<EmailPassword> = data => {
		if (type === AuthVariants.login) login(data)
		else register(data)
		reset()
	}

	//  try to remake using Yup
	//	const validationSchema = loginValidation

	const anotherType =
		type === AuthVariants.login ? AuthVariants.register : AuthVariants.login

	const onSetTypeClick = () => {
		setType(anotherType)
	}
	const secondButtontext =
		(anotherType === AuthVariants.register
			? 'No account?'
			: 'Have an account?') + ` Click to ${anotherType}`

	return (
		<Meta title='Auth'>
			<div className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto w-96 flex gap-6 flex-col'
				>
					<Heading classname='capitalize text-center'>{type}</Heading>
					{isLoading ? (
						<Spin className='w-full' />
					) : (
						<>
							<div className='flex gap-4 flex-col'>
								<TextField
									{...formRegister('email', {
										required: 'Email is required',
										pattern: {
											value: emailReg,
											message: 'Please enter a valid email'
										}
									})}
									placeholder='Email'
									error={errors.email?.message}
								/>
								<TextField
									{...formRegister('password', {
										required: 'Password is required',
										minLength: {
											value: 6,
											message: 'Length must be at least 6 characters'
										}
									})}
									type='password'
									placeholder='Password'
									error={errors.password?.message}
								/>
							</div>
							<Button variant='orange' type='submit'>
								{type}
							</Button>
							<Button variant='white' onClick={onSetTypeClick} type='button'>
								{secondButtontext}
							</Button>
						</>
					)}
				</form>
			</div>
		</Meta>
	)
}
