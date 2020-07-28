import React, { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '../context/globalContext'


const Logo = () => {
    const { systemConfig } = useContext(GlobalContext)
    return (
        <Link href="/">
            <div className="logo" style={{
                backgroundImage: `url(${systemConfig.icon})`,
                height: 80,
                width: 80,
                cursor: 'pointer'
            }} />
        </Link>
    )
}
export default Logo
