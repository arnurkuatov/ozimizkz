import NotFoundImage from './assets/404.png'

import type { FC } from 'react'

const NotFound: FC = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center bg-dominant-gray-50 text-center'>
      <img src={NotFoundImage} alt='404' />
      <p className='my-4 text-[64px] font-medium text-content-dark-gray-400'>
        Упс! Страница не найдена :(
      </p>
      <p className='mb-6 text-2xl text-content-dark-gray-300'>
        Мы не смогли найти то что вы искали. Возможно страница <br /> перемещена
        или удалена.
      </p>
    </div>
  )
}

export { NotFound }
