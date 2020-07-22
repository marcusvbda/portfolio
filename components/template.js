import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import Head from 'next/head'
import Navbar from '@/components/navbar'

const Template = ({ children, title, description, image, type }) => {
    const { systemConfig } = useContext(GlobalContext)

    const defaultTitle = "Marcus Vinicius Bassalobre de Assis"
    const defaultDescription = `Marcus Vinicius Bassalobre de Assis, Backend & Frontend developer`
    const defaultImageExtension = "image/png"
    const defaultType = "website"

    const getTitle = () => {
        if (!title) return defaultTitle
        return `${defaultTitle} | ${title}`
    }

    const getDescription = () => {
        if (!description) return defaultDescription
        return description
    }

    const getImage = () => systemConfig.image ? systemConfig.image : image

    const getImageExtension = () => {
        if (!image) return defaultImageExtension
        const ext = image.split(".")
        return ((ext.length > 0) ? (`image/${ext[1] || defaultImageExtension}`) : defaultImageExtension)
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
                <meta property="og:image" content={getImage()} key="image" />
                <meta property="og:url" content={getImageExtension()} key="url" />
                <meta property="og:type" content={getType()} key="type" />
                <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGM" />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}
export default Template
