import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'

const Template = ({ children, title, description, image, type }) => {
    const defaultTitle = "Marcus Vinicius Bassalobre de Assis"
    const defaultDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum nunc id erat suscipit, in dignissim enim tristique.`
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

    const getImage = () => image

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
            </Head>
            <Navbar />
            {children}
        </div>
    )
}
export default Template
