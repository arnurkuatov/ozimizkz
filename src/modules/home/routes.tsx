import {RouteObject} from "react-router-dom";
import {Home} from "./pages/Home";

const routes: RouteObject[] = [
    {
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]

export { routes }
