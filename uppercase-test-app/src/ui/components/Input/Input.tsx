import {forwardRef} from 'react'

import styles from './Input.module.scss'
import IconSearch from '../../../assets/icons/icon-search.svg'
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
                        <div>
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
                    <img src={IconSearch} alt="icon-search" className={styles.iconSearch}/>
                </label>
            </div>
        )
    },
)

export { Input }
