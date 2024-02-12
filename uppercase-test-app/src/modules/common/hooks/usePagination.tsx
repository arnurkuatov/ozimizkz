import {useMemo} from 'react'

// eslint-disable-next-line react-refresh/only-export-components
const DOTS = '...'

const range = (start: number, end: number): number[] => {
    const length = end - start + 1
    return Array.from({length}, (_, idx) => idx + start)
}

const usePagination: ({
                          totalCount,
                          pageSize,
                          siblingCount,
                          currentPage,
                      }: {
    totalCount: number
    pageSize: number
    siblingCount?: number
    currentPage: number
}) => number[] = ({
                      totalCount,
                      pageSize,
                      siblingCount = 1,
                      currentPage,
                  }): number[] => {
    return useMemo<Array<number> | any>(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)

        const totalPageNumbers = siblingCount + 5

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount,
        )

        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1

        const firstPageIndex = 1
        const lastPageIndex = totalPageCount

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 1 + 3 * siblingCount
            const leftRange = range(1, leftItemCount)

            return [...leftRange, DOTS, totalPageCount]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 1 + 2 * siblingCount
            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount,
            )
            return [firstPageIndex, DOTS, ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex)
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }
    }, [totalCount, pageSize, siblingCount, currentPage])
}

export { usePagination }
