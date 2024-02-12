import { createBrowserRouter } from 'react-router-dom'

import { setNavigate } from './navigate'
import {mainRoute} from "../../modules/core/routes.tsx";


const router = createBrowserRouter([mainRoute])

setNavigate(router.navigate)

export { router }
