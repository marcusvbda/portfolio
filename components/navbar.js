import React, { useState, useContext } from 'react'
import Logo from './logo'
import Link from 'next/link'
import { GlobalContext } from '../context/globalContext'
import { Container } from 'react-bootstrap'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { setLanguage, systemConfig, translate } = useContext(GlobalContext)

    const toggleMenu = () => setShowMenu(!showMenu)

    const MobileMenu = () => {
        return (
            <div className="d-flex align-items-center justify-content-center">
                {LanguageSelector()}
                <div className={`navbar-burger cursor-pointer hover-opacity hover-scale ${showMenu ? 'is-active' : ''}`} onClick={() => toggleMenu()}>
                    <span></span>
                </div>
            </div>
        )
    }

    const SayHelloButton = () => {
        return (
            <Link href="/contact" >
                <a className="sayHello">{translate('navbar.sayhello')}</a>
            </Link>
        )
    }

    const LanguageSelector = () => {
        return (
            <div className="language-selector d-flex flex-row mr-3">
                <div className={`language-item brazil cursor-pointer ${systemConfig.language == "PT_BR" ? 'active' : ''}`} onClick={() => setLanguage("PT_BR")}></div>
                <div className={`language-item usa cursor-pointer ${systemConfig.language == "EN" ? 'active' : ''}`} onClick={() => setLanguage("EN")}></div>
            </div>
        )
    }

    return (
        <nav className="navbar p-0">
            <Container className="d-flex flex-row align-items-center justify-content-between p-0">
                <div className="w-100 d-flex flex-row justify-content-between container py-3">
                    <Link href="/">
                        <Logo h={80} w={80} />
                    </Link>
                    <div className="d-none d-lg-block">
                        <div className="d-flex flex-row x-center y-center align-items-center">
                            {LanguageSelector()}
                            {SayHelloButton()}
                        </div>
                    </div>
                    <div className="d-lg-none d-block">
                        {MobileMenu()}
                    </div>
                </div>
                <div className="d-lg-none d-block w-100">
                    <div className={`mobile-menu-content d-flex flex-column align-items-center justify-content-center ${showMenu ? 'is-active' : ''}`}>
                        {SayHelloButton()}
                    </div>
                </div>
            </Container>
        </nav >
    )
}
export default Navbar