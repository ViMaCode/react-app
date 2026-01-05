import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
	},
});

// Функция действия генерируется на каждую функцию редьюсера(reducer), определённую в createSlice
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
