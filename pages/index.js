import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import Template from '../components/template'
import Link from 'next/link'

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
                        <div className="flex-column x-center">
                            <div className="text-center">
                                <img className="skill-icon" src="/images/frontend.png" />
                            </div>
                            <b className="text-center my-20 f-25">Frontend</b>
                            <span className="text-center my-20">{translate('index.skill_frontend_title')}</span>
                            <b className="text-center text-primary">{translate('index.technologies')}</b>
                            <p className="text-center">HTML, CSS & Javascript</p>
                            <span className="text-center my-20">
                                <b className="text-center text-primary my-20">{translate('index.skill_tool')}</b>
                            </span>
                            {["React", "Vue", "NextJs", "NuxtJs", "Bootstrap", "Materialize", "Bulma", "Photoshop CC", "Visual Studio Code"].map(x => (
                                <p className="my-0 text-center" key={x}>{x}</p>)
                            )}
                        </div>
                    </div>
                    <div className="skills-card middle">
                        <div className="flex-column x-center">
                            <div className="text-center">
                                <img className="skill-icon" src="/images/mentor.png" />
                            </div>
                            <b className="text-center my-20 f-25">{translate('index.academic')}</b>
                            <span className="text-center my-20">{translate('index.academic_title')}</span>
                        </div>
                    </div>
                    <div className="skills-card">
                        <div className="flex-column x-center">
                            <div className="text-center">
                                <img className="skill-icon" src="/images/code.png" />
                            </div>
                            <b className="text-center my-20 f-25">Backend</b>
                            <span className="text-center my-20">{translate('index.skill_backend_title')}</span>
                            <b className="text-center text-primary">{translate('index.technologies')}</b>
                            <p className="text-center">PHP, MongoDB, MYSQL, C#, ASP.NET CORE & PHP</p>
                            <span className="text-center my-20">
                                <b className="text-center text-primary my-20">{translate('index.skill_tool')}</b>
                            </span>
                            {["Laravel", "ASP.NET CORE", "Magento", "Express", "Wordpress", "Visual Studio Code"].map(x => (
                                <p className="my-0 text-center" key={x}>{x}</p>)
                            )}

                        </div>
                    </div>
                </div>
            </div >
        )
    }

    const RecentJobs = () => {
        return (
            <div className="recent-hero flex-column x-center x-center y-center my-50" id="about">
                <div className="container">
                    <h4 className="text-center f-40">{translate('index.my_recent_jobs')}</h4>
                    <div className="flex-row x-center">
                        <div className="text-center">{translate('index.recent_jobs')}
                            <b className="ml-10">
                                <Link href="/contact">
                                    <a className="text-primary">{translate('navbar.sayhello')}</a>
                                </Link>
                            </b>
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
            {RecentJobs()}
        </Template >
    )
}
export default Home