import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartSlice } from './cart/cart.slice'
import {
	combineReducers,
	configureStore,
	getDefaultMiddleware
} from '@reduxjs/toolkit'
import { userSlice } from './user/user.slice'

const persisConfig = {
	key: 'amazon',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	user: userSlice.reducer
})

const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
