import {forwardRef} from 'react'

import styles from './Input.module.scss'
import type {InputHTMLAttributes} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    required?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            value,
            label,
            required = false,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={styles.root}>
                <label
                    className={styles.input}
                >
                    {label && (
                        <div className={styles.input__label}>
                            {label} {required && <span className={styles.required}>*</span>}
                        </div>
                    )}

                    <input
                        ref={ref}
                        value={value}
                        className={styles.input__field}
                        required={required}
                        {...props}
                    />
                </label>
            </div>
        )
    },
)

export { Input }
