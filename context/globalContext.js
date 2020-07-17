import React, { useEffect, createContext, useState } from 'react'
// import Router from 'next/router'
// import Cookie from 'js-cookie'
// import { isJSON } from '../utils/helpers'

export const globalContext = createContext()

const GlobalContextProvider = ({ children, config }) => {
    const [systemConfig, setSystemConfig] = useState(config || {})

    return (
        <globalContext.Provider value={{ systemConfig }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider