import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import Template from '@/components/template'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const Home = () => {
    const { systemConfig, translate } = useContext(GlobalContext)

    const HomeSection = () => {
        return (
            <Container id="home">
                <div className="d-flex flex-column justify-content-center pt-5">
                    <h1 className="mb-0 text-center f-30 mt-5">{translate('index.title')}</h1>
                    <h2 className="mb-0 font-weight-light text-gray f-20 text-center">{translate('index.description')}</h2>
                    <div className="d-flex flex-column  mt-5 justify-content-center align-items-center">
                        <div className="avatar my-5">
                            <img className="w-100" src="/images/photo.png" alt="avatar" />
                        </div>
                        <Link href="#about">
                            <a className="about-btn">{translate('index.know_more')} ...</a>
                        </Link>
                        <div className="hero-endsection mt-5">
                            <img className="w-100" src="/images/hero.png" alt="hero" />
                        </div>
                    </div>
                </div>
            </Container>
        )
    }

    const AboutSection = () => {
        return (
            <div className="about-hero" id="about">
                <Container className="d-flex flex-column align-items-center justify-content-center">
                    <h4 className="presentation">{translate('index.presentation')}</h4>
                    <div className="presentation-description text-center font-weight-light">{translate('index.presentation_description')}</div>
                </Container>
            </div>
        )
    }

    const SkillsSection = () => {
        return (
            <div className="skills-hero d-flex flex-column align-items-center justify-content-center mb-3" id="skills">
                <div className="skills-cards">
                    <div className="skills-card">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="text-center">
                                <img className="skill-icon" src="/images/frontend.png" alt="frontend" />
                            </div>
                            <b className="text-center my-3 f-20">Frontend</b>
                            <span className="text-center my-3">{translate('index.skill_frontend_title')}</span>
                            <b className="text-center text-primary">{translate('index.technologies')}</b>
                            <p className="text-center">HTML, CSS & Javascript</p>
                            <span className="text-center my-3">
                                <b className="text-center text-primary my-3">{translate('index.skill_tool')}</b>
                            </span>
                            {["React", "Vue", "NextJs", "NuxtJs", "Bootstrap", "Materialize", "Bulma", "Photoshop CC", "Visual Studio Code"].map(x => (
                                <p className="mb-0 text-center" key={x}>{x}</p>)
                            )}
                        </div>
                    </div>
                    <div className="skills-card middle">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="text-center">
                                <img className="skill-icon" src="/images/mentor.png" alt="frontend" />
                            </div>
                            <b className="text-center my-3 f-20">{translate('index.academic')}</b>
                            <span className="text-center my-3">{translate('index.academic_title')}</span>
                        </div>
                    </div>
                    <div className="skills-card">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="text-center">
                                <img className="skill-icon" src="/images/frontend.png" alt="frontend" />
                            </div>
                            <b className="text-center my-3 f-20">Backend</b>
                            <span className="text-center my-3">{translate('index.skill_backend_title')}</span>
                            <b className="text-center text-primary">{translate('index.technologies')}</b>
                            <p className="text-center">PHP, MongoDB, MYSQL, C#, ASP.NET Core & PHP</p>
                            <span className="text-center my-3">
                                <b className="text-center text-primary my-3">{translate('index.skill_tool')}</b>
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
            <div className="y-center my-5" id="recent-jobs">
                <Container className="d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-center f-30">{translate('index.my_recent_jobs')}</h4>
                    <div className="d-flex flex-row x-center">
                        <div className="text-center">{translate('index.recent_jobs')}
                            <b className="ml-2">
                                <Link href="/contact">
                                    <a className="text-primary">{translate('navbar.sayhello')}</a>
                                </Link>
                            </b>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <Template>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <RecentJobs />
        </Template >
    )
}
export default Home