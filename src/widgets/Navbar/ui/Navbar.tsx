import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const onCloseModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<Button
					className={cls.links}
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={onLogout}
				>
					{ t('Logout')}
				</Button>
			</div>
		);
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onShowModal}
			>
				{ t('Login')}
			</Button>
			<LoginModal
				isOpen={isOpen}
				onClose={onCloseModal}
			/>
		</div>
	);
};

export default Navbar;
