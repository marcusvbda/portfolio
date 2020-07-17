import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import Template from '../components/template'

const Home = () => {
    const { systemConfig, translate } = useContext(GlobalContext)

    const HomeSection = () => {
        return (
            <div className="container" id="home">
                <div className="body-hero flex-column x-center">
                    <h1 className="mb-0 text-center f-30">{translate('index.title')}</h1>
                    <h2 className="mb-0 font-light text-gray f-20 text-center">{translate('index.description')}</h2>
                    <div className="flex-column mt-50 x-center y-center">
                        <div className="avatar">
                            <img className="w-100" src="/images/photo.png" alt="avatar" />
                        </div>
                        <div className="hero-endsection">
                            <img className="w-100" src="/images/hero.png" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const AboutSection = () => {
        return (
            <div className="about-hero flex-column x-center x-center y-center" id="about">
                <div className="container">
                    <h4 className="presentation">{translate('index.presentation')}</h4>
                    <div className="flex-row x-center">
                        <div className="presentation-description">{translate('index.presentation_description')}</div>
                    </div>
                </div>
            </div>
        )
    }

    const SkillsSection = () => {
        return (
            <div className="skills-hero flex-column x-center x-center y-center" id="skills">
                <div className="skills-cards">
                    <div className="skills-card">
                        <div className="flex-row x-center">
                            <img className="skill-icon" src="/images/frontend.png" />
                        </div>
                    </div>
                    <div className="skills-card middle">
                        <div className="flex-row x-center">
                            <img className="skill-icon" src="/images/code.png" />
                        </div>
                    </div>
                    <div className="skills-card">
                        <div className="flex-row x-center">
                            <img className="skill-icon" src="/images/mentor.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Template title="Home" image={systemConfig.icon}>
            {HomeSection()}
            {AboutSection()}
            {SkillsSection()}
        </Template >
    )
}
export default Home