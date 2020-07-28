import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import TemplateSimple from '@/components/templateSimple'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const Contact = () => {
    const { translate } = useContext(GlobalContext)

    return (
        <TemplateSimple title={translate('navbar.sayhello')}>
            <Container>
                <h1 className="text-center">{translate('contact.title')}</h1>
            </Container>
        </TemplateSimple >
    )
}
export default Contact