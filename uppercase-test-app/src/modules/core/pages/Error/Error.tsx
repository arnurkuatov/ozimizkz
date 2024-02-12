import { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

import type { FC } from 'react'

const Error: FC = () => {
  const error = useRouteError()

  useEffect(() => {
    console.error(error)
  }, [error])

  return <div>Error</div>
}

export { Error }
