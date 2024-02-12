import type {FC} from 'react'
import styles from './Profile.module.scss'
import IconProfile from '../../../../assets/icons/icon-profile.svg'

interface Props {
}

const Profile: FC<Props> = () => {
    return (
        <div className={styles.root}>
            <img src={IconProfile} alt="iconprofile"/>
            Arnur Kuatov
        </div>
    )
}

export {Profile}
