import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'

const Template = ({ children, title }) => {
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
            <Navbar />
            {children}
        </div>
    )
}
export default Template
