import { useSearchParams } from 'react-router-dom'
import clsx from 'clsx'


import styles from './Pagination.module.scss'

import type { FC } from 'react'
import ReactPaginate from "react-paginate";

interface Props {
    page?: number
    pageCount?: number
}

const Pagination: FC<Props> = ({ page = 0, pageCount = 0 }) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleChangePage = (page: number) => {
        const currentParams = Object.fromEntries([...searchParams])
        const newParams = {
            ...currentParams,
            page: String(page + 1),
        }

        setSearchParams(newParams)
    }

    return (
        <div className={styles.root}>
            <div>
                <ReactPaginate
                    pageCount={pageCount === 1 ? 0 : pageCount}
                    forcePage={page - 1}
                    disabledLinkClassName={styles.disabled}
                    onPageChange={({ selected }) => handleChangePage(selected)}
                    renderOnZeroPageCount={null}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    className={styles.pagination}
                    pageLinkClassName={styles.page}
                    activeLinkClassName={styles.activePage}
                    previousLabel={
                        <div
                            className={clsx(styles.arrowControls, styles.arrowControlsPrev)}
                        >
                            Предыдущая
                        </div>
                    }
                    nextLabel={
                        <div
                            className={clsx(styles.arrowControls, styles.arrowControlsNext)}
                        >
                            Следующая{' '}
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export { Pagination }
