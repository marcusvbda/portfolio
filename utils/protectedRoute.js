import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import Router from 'next/router'


const protectedRoute = Component => {
    const redirectTo = "/user"
    const Handler = (props) => {
        const { isLogged } = useContext(UserContext)
        const [loaded, setLoaded] = useState(false)

        useEffect(() => {
            const frontendRedirect = () => {
                Router.push(redirectTo)
            }

            if (!isLogged()) return frontendRedirect()
            setLoaded(true)
        })

        return (loaded ? <Component {...props} /> : <></>)
    }

    return Handler
}


export default protectedRoute