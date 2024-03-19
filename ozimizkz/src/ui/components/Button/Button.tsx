import clsx from 'clsx'
import {ButtonHTMLAttributes, forwardRef} from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
    variant?: ButtonVariants
    size?: ButtonSizes
    active?: string
    isDownloadButton?: boolean
    fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonVariants =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'outlined'
    | 'text'
    | 'link'
    | 'secondary-delete'
    | 'dangerous'
    | 'largeLink'
    | 'dangerous-link'

type ButtonSizes = 'sm' | 'md' | 'lg'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            onClick,
            disabled,
            size,
            active,
            className,
            isDownloadButton,
            fullWidth = false,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                disabled={disabled}
                className={clsx([
                    styles.btn,
                    isDownloadButton && styles.reverse,
                    styles[variant],
                    active && styles[active],
                    size && styles[size],
                    fullWidth && styles.fullWidth,
                    className,
                ])}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        )
    },
)

export default Button
