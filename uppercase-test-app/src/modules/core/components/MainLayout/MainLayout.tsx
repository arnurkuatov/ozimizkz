import {Outlet} from 'react-router-dom'
import styles from './MainLayout.module.scss'

import {FC} from 'react'

import {Header} from "../Header";

const MainLayout: FC = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export {MainLayout}
