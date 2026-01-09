import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
	// eslint-disable-next-line no-unused-vars
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	// eslint-disable-next-line no-unused-vars
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: ButtonTheme,
	square?: boolean,
	size?: ButtonSize,
	disabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
			disabled={disabled}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
