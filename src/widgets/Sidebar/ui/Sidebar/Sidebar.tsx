import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import LangSwitcher from 'features/LangSwitcher/ui/LangSwitcher';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string,
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const { t } = useTranslation();

	return (
		<div
			data-testid="sidebar"
			className={classNames(
				cls.Sidebar,
				{ [cls.collapsed]: collapsed },
				[className],
			)}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
			>
				{t('Switch')}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
