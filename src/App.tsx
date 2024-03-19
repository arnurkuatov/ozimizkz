import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import type { FC } from 'react'

import {store} from "./settings/store";
import {router} from "./settings/router";

const App: FC = () => {
    return (
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    )
}

export default App
