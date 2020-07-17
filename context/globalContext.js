import React, { useEffect, createContext, useState } from 'react'
import Cookie from "js-cookie"
import PT_BR from "../langs/PT_BR"
import EN from "../langs/EN"
export const GlobalContext = createContext()

const GlobalContextProvider = ({ children, config }) => {
    const [systemConfig, setSystemConfig] = useState(config || {})

    useEffect(() => {
        setLanguage(systemConfig.language)
    }, [])

    const setLanguage = lang => {
        setSystemConfig({ ...systemConfig, language: lang })
        Cookie.set("language", lang)
    }

    const translate = index => {
        const content = { PT_BR, EN }
        const language = Cookie.get("language") || "PT_BR"
        if (!content[language]) return index
        if (!content[language][index]) return index
        return content[language][index] || index
    }

    return (
        <GlobalContext.Provider value={{ systemConfig, setLanguage, translate }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider