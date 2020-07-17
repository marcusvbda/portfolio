import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import Template from '../components/template'

const Home = () => {
    const { systemConfig, translate } = useContext(GlobalContext)

    const HomeSection = () => {
        return (
            <div className="container">
                <section id="home">
                    <div className="body-hero flex-column x-center">
                        <h1 className="mb-0 text-center f-30">{translate('index.title')}</h1>
                        <h2 className="mb-0 font-light text-gray f-20 text-center">{translate('index.description')}</h2>
                        <div className="flex-column mt-50 x-center y-center">
                            <div className="avatar">
                                <img className="w-100" src="/images/photo.png" />
                            </div>
                            <div className="hero-endsection">
                                <img className="w-100" src="/images/hero.png" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const AboutSection = () => {
        return (
            <div className="about-hero flex-column x-center x-center y-center">
                <div className="container">
                    <section id="about">
                        <h4 className="presentation">{translate('index.presentation')}</h4>
                        <div className="flex-row x-center">
                            <div className="presentation-description">{translate('index.presentation_description')}</div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

    return (
        <Template title="Home" image={systemConfig.icon}>
            {HomeSection()}
            {AboutSection()}
        </Template >
    )
}
export default Home