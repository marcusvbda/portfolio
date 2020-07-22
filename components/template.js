import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'

const Template = ({ children, title, description, type }) => {
    const defaultTitle = "Marcus Vinicius Bassalobre de Assis"
    const defaultDescription = `Marcus Vinicius Bassalobre de Assis, Backend & Frontend developer`
    const defaultType = "website"

    const getTitle = () => {
        if (!title) return defaultTitle
        return `${defaultTitle} | ${title}`
    }

    const getDescription = () => {
        if (!description) return defaultDescription
        return description
    }

    const getType = () => {
        if (!type) return defaultType
        return type
    }

    return (
        <div>
            <Head>
                <title>{getTitle()}</title>
                <meta property="og:title" content={getTitle()} key="title" />
                <meta property="og:description" content={getDescription()} key="description" />
                <meta name="description" content={getDescription()} />
                <meta property="og:type" content={getType()} key="type" />
                <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGM" />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}
export default Template
