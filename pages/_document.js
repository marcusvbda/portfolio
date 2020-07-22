import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    getImageExtension() {
        const ext = process.env.ICON.split(".")
        return ((ext.length > 0) ? (`image/${ext[1] || "image/png"}`) : "image/png")
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href={process.env.ICON} />
                    <meta property="og:image" content={`${process.env.LOCATION_ORIGIN}/${process.env.ICON}`} key="image" />
                    <meta property="og:url" content={this.getImageExtension()} key="url" />
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