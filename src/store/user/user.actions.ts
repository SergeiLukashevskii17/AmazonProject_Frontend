import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from '@/api/api.helper'
import { AuthResponce, EmailPassword } from './user.interface'
import { removeUserFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { Auth, JwtErrors } from '@/types/common'

export const register = createAsyncThunk<AuthResponce, EmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.authorize(Auth.register, data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<AuthResponce, EmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.authorize(Auth.login, data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () =>
	removeUserFromStorage()
)

export const checkAuth = createAsyncThunk<AuthResponce>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === JwtErrors.expired) {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
