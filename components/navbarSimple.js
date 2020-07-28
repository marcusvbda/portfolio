import React, { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '../context/globalContext'
import { Container } from 'react-bootstrap'
import Logo from "@/components/logo"

const NavbarSimple = () => {
    const { setLanguage, systemConfig } = useContext(GlobalContext)


    const LanguageSelector = () => {
        return (
            <div className="language-selector d-flex flex-row mr-3">
                <div className={`language-item brazil cursor-pointer ${systemConfig.language == "PT_BR" ? 'active' : ''}`} onClick={() => setLanguage("PT_BR")}></div>
                <div className={`language-item usa cursor-pointer ${systemConfig.language == "EN" ? 'active' : ''}`} onClick={() => setLanguage("EN")}></div>
            </div>
        )
    }

    return (
        <>
            <nav className="navbar p-0">
                <Container className="d-flex flex-row align-items-center justify-content-between p-0">
                    <div className="w-100 d-flex flex-row justify-content-between container py-3">
                        <Logo />
                        <div className="d-none d-lg-block">
                            <div className="d-flex flex-row x-center y-center align-items-center">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </Container>
            </nav >
            <div className="image-inline d-flex justify-content-center align-items-center">
                <div className="avatar my-5">
                    <img className="w-100" src="/images/photo.png" alt="avatar" />
                </div>
            </div>
        </>
    )
}
export default NavbarSimple