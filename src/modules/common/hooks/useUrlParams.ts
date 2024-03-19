import { useSearchParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

type UrlParams = {
  [s: string]: string
}
const useUrlParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [urlParams, setUrlParams] = useState<UrlParams>(
    Object.fromEntries([...searchParams]),
  )

  useEffect(() => {
    const params: UrlParams = Object.fromEntries([...searchParams])
    setUrlParams(params)
  }, [searchParams])

  return {
    urlParams,
    searchParams,
    setUrlParams: setSearchParams,
  }
}

export { useUrlParams }
