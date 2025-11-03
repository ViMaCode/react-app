import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import LangSwitcher from 'features/LangSwitcher/ui/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string,
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

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
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.INVERTED_PRIMARY}
					to={RoutePath[AppRoutes.MAIN]}
					className={cls.link}
				>
					<span className={cls.icon}>
						<MainIcon />
					</span>
					<span className={cls.linkText}>
						{t('Main page')}
					</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.INVERTED_PRIMARY}
					to={RoutePath[AppRoutes.ABOUT]}
					className={cls.link}
				>
					<span className={cls.icon}>
						<AboutIcon />
					</span>
					<span className={cls.linkText}>
						{t('About page')}
					</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
