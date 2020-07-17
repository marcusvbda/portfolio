import React, { useContext } from 'react'
import { globalContext } from '../context/globalContext'
import Template from '../components/template'
// import Link from 'next/link'
// import Router from 'next/router'
import Head from 'next/head'

const Home = () => {
    const { systemConfig } = useContext(globalContext)

    return (
        <Template title="Home">
            <h1>Hello</h1>
            <h2>World</h2>
            <br />
        </Template>
    )
}
export default Home