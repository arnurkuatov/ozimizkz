import {ChangeEvent, FC, useState} from 'react'
import styles from "./Header.module.scss";
import UpperCaseLogo from "../../../../assets/img/uppercase.png";
import {Input} from "../../../../ui/components";
import {Profile} from "../Profile";
import {URLSearchParamsInit, useSearchParams} from "react-router-dom";
import {debounce} from "../../../common/utils";

interface Props {
}

const changeValue = debounce(
    (
        value: string,
        searchParams: URLSearchParams,
        cb: (params: URLSearchParamsInit) => void,
    ) => {
        const params = Object.fromEntries([...searchParams])
        params['s'] = value
        // params['page'] = '1'

        if (value.length === 0) {
            delete params['s']
        }

        cb(params)
    },
)
const Header: FC<Props> = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [controlledSearchValue, setControlledSearchValue] = useState('')


    const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setControlledSearchValue(event.target.value)
        changeValue(event.target.value, searchParams, setSearchParams)
    }

    return (
        <div className={styles.root}>
            <img src={UpperCaseLogo} alt="uppercaselog"/>
            <Input value={controlledSearchValue} onChange={handleChangeSearchValue}/>
            <Profile/>
        </div>
    )
}

export {Header}
