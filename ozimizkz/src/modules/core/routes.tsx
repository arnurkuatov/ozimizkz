import {Error as ErrorPage} from './pages/Error'
import {NotFound as NotFoundPage} from './pages/NotFound'
import {routes as homeRoutes} from '../home/routes'


import type {RouteObject} from 'react-router-dom'
import {MainLayout} from "./components/MainLayout";

const mainRoute: RouteObject = {
    path: '/',
    element: <MainLayout/>,
    children: [
        ...homeRoutes
    ],
    errorElement: <ErrorPage/>,
}

const notFoundRoute: RouteObject = {
    path: '*',
    element: <NotFoundPage/>,
}

export {mainRoute, notFoundRoute}
