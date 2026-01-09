import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	{ rejectValue: string }
>('login/loginByUserName', async (authData, thunkAPI) => {
	try {
		const response = await axios.post<User>(
			'http://localhost:8000/login',
			authData,
			{
				headers: {
					'X-App-Language': i18n.language, // ← Отправляем язык приложения
				},
			},
		);

		if (!response.data) {
			return thunkAPI.rejectWithValue(i18n.t('The server did not return user data'));
		}

		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
		thunkAPI.dispatch(userActions.setAuthData(response.data));

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return thunkAPI.rejectWithValue(
				error.response?.data?.message || i18n.t('Authorization error'),
			);
		}

		return thunkAPI.rejectWithValue(i18n.t('Unknown error'));
	}
});
