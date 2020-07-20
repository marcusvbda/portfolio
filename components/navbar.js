import React, { useState, useContext } from 'react'
import Logo from './logo'
import Link from 'next/link'
import { GlobalContext } from '../context/globalContext'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { setLanguage, systemConfig, translate } = useContext(GlobalContext)

    const toggleMenu = () => setShowMenu(!showMenu)

    const MobileMenu = () => {
        return (
            <div className="flex-row x-center y-center">
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
            <div className="language-selector mx-20">
                <div className={`language-item brazil cursor-pointer ${systemConfig.language == "PT_BR" ? 'active' : ''}`} onClick={() => setLanguage("PT_BR")}></div>
                <div className={`language-item usa cursor-pointer ${systemConfig.language == "EN" ? 'active' : ''}`} onClick={() => setLanguage("EN")}></div>
            </div>
        )
    }

    return (
        <nav className="navbar">
            <div className="container flex-row between y-center">
                <Link href="/">
                    <a className="hover-opacity hover-scale">
                        <Logo h={80} w={80} />
                    </a>
                </Link>
                <div className="only-web">
                    <div className="flex-row x-center y-center">
                        {LanguageSelector()}
                        {SayHelloButton()}
                    </div>
                </div>
                <div className="only-mobile">{MobileMenu()}</div>
            </div>
            <div className="only-mobile">
                <div className={`mobile-menu-content flex-column x-center y-center ${showMenu ? 'is-active' : ''}`}>
                    {SayHelloButton()}
                </div>
            </div>
        </nav>
    )
}
export default Navbar