import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    getImage() {
        return `${process.env.LOCATION_ORIGIN}/${process.env.ICON}`
    }

    getImageExtension() {
        const ext = process.env.ICON.split(".")
        return ((ext.length > 0) ? (`image/${ext[1] || "image/png"}`) : "image/png")
    }

    getDescription() {
        return "Marcus Vinicius Bassalobre de Assis, Backend & Frontend developer"
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href={this.getImage()} />
                    <meta property="og:image" content={this.getImage()} />
                    <meta property="og:url" content={this.getImageExtension()} />
                    <meta property="og:description" content={this.getDescription()} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={this.getDescription()} />
                    <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGM" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default _Document