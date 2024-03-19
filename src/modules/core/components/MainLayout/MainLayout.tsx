import {Outlet} from 'react-router-dom'
import styles from './MainLayout.module.scss'

import {FC} from 'react'

const MainLayout: FC = () => {
    return (
        <div className={styles.root}>
            <Outlet/>
        </div>
    )
}

export {MainLayout}
