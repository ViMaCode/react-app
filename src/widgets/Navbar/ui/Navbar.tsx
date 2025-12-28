import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onToggleModal = useCallback((): void => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onToggleModal}
			>
				{ t('Login')}
			</Button>
			<Modal isOpen={isOpen} onClose={onToggleModal}>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				{/* eslint-disable-next-line max-len */}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa, eos fugit illo iure laudantium libero nesciunt quas sed ullam. Accusamus adipisci assumenda aut consequatur debitis dolorum esse eum expedita fugiat id illo in iste minus natus niham quasi quo recusandae, soluta ullam voluptates. Adipisci cum doloremque et ex iusto odit provident quis ut. Accusantium corporis dignissimos doloremque doloribus ducimus fugiat hic placeat quam velit. Aperiam corporis delectus dolor hic maxime obcaecati perspiciatis quasi voluptatem.
			</Modal>
		</div>
	);
};

export default Navbar;
