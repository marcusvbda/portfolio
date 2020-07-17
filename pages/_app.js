import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import GlobalContextProvider from '../context/globalContext'
import ParseCookies from '../utils/parseCookies'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps, config }) => {
    return (
        <GlobalContextProvider config={config}>
            <Component {...pageProps} />
        </GlobalContextProvider>
    )
}

App.getInitialProps = async ({ Component, ctx }) => {
    const getChildProps = async (comp, ctx) => {
        let pageProps = {}
        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)
        return pageProps
    }

    const getConfigProps = ctx => {
        const { req } = ctx
        const { language } = ParseCookies(req)

        return {
            language: language || "PT_BR"
        }
    }
    return { pageProps: await getChildProps(Component, ctx), config: getConfigProps(ctx) }
}


export default App