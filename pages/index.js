import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import Template from '../components/template'

const Home = () => {
    const { systemConfig, translate } = useContext(GlobalContext)

    return (
        <Template title="Home" image={systemConfig.icon}>
            <div className="container">
                <div className="body-hero flex-column x-center">
                    <h1 className="mb-0 text-center f-50">{translate('index.title')}</h1>
                    <h2 className="mb-0 font-light text-gray f-20 text-center">{translate('index.description')}</h2>
                    <div className="flex-row x-center mt-50">
                        <div className="avatar">
                            <img src="/images/photo.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
export default Home