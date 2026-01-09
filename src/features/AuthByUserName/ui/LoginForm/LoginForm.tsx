import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
	className?: string,
	autoFocus?: boolean;
}

export const LoginForm = memo(({ className, autoFocus }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const {
		username, password, isLoading, error,
	} = useSelector(getLoginState);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={(t('Authorization form'))} />
			{error && (<Text theme={TextTheme.ERROR} text={error} />)}
			<Input
				autoFocus={autoFocus}
				type="text"
				placeholder={t('enter user name')}
				className={cls.input}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				type="text"
				placeholder={t('enter password')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				className={cls.loginBtn}
				theme={ButtonTheme.OUTLINE}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Login')}
			</Button>
		</div>
	);
});
