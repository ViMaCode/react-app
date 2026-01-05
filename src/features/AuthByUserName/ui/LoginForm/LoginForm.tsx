import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string,
	autoFocus?: boolean;
}

export const LoginForm = ({ className, autoFocus }: LoginFormProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input
				autoFocus={autoFocus}
				type="text"
				placeholder={t('enter user name')}
				className={cls.input}
			/>
			<Input
				type="text"
				placeholder={t('enter password')}
			/>
			<Button
				className={cls.loginBtn}
				theme={ButtonTheme.OUTLINE}
			>
				{t('Login')}
			</Button>
		</div>
	);
};
