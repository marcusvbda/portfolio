import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const Logo = ({ h, w }) => {
    const { systemConfig } = useContext(GlobalContext)

    return (
        <div className="logo" style={{
            backgroundImage: `url(${systemConfig.icon})`,
            height: h,
            width: w
        }} />
    )
}
export default Logo