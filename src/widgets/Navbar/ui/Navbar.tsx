import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onCloseModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsOpen(true);
	}, []);

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
