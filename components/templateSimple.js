import React from 'react'
import Head from 'next/head'
import NavbarSimple from '@/components/navbarSimple'

const TemplateGoBack = ({ children, title }) => {
    const defaultTitle = "Marcus Vinicius Bassalobre de Assis"

    const getTitle = () => {
        if (!title) return defaultTitle
        return `${defaultTitle} | ${title}`
    }

    return (
        <div>
            <Head>
                <title>{getTitle()}</title>
                <meta property="og:title" content={getTitle()} key="title" />
            </Head>
            <NavbarSimple />
            {children}
        </div>
    )
}
export default TemplateGoBack
