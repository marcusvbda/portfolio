import React, { useState, useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import TemplateSimple from '@/components/templateSimple'
import { Container, Row, Col, Form } from 'react-bootstrap'

const Contact = ({ contact_email }) => {
    const { translate } = useContext(GlobalContext)
    const [form, setForm] = useState({
        subject: null,
        html: null,
    })

    const sendEmail = () => {
        window.open(`mailto:${contact_email}?subject=${form.subject}&body=${form.html}`)
    }

    const handleSubmit = event => {
        event.preventDefault()
        return sendEmail()
    }

    return (
        <TemplateSimple title={translate('navbar.sayhello')}>
            <Container>
                <h1 className="text-center f-30">{translate('contact.title')}</h1>
                <Row className="form-contact justify-content-center">
                    <form onSubmit={handleSubmit} className="d-flex flex-wrap col-xs-12 col-md-8">
                        <Col xs={12} md={12}>
                            <Form.Group>
                                <Form.Label>{translate('contact.subject')}</Form.Label>
                                <Form.Control type="text" size="lg" required value={form.subject} onChange={i => setForm({ ...form, subject: i.target.value })} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={12}>
                            <Form.Group>
                                <Form.Label>{translate('contact.message')}</Form.Label>
                                <Form.Control style={{ resize: 'none' }} value={form.html} as="textarea" rows="5" type="text" size="lg" required onChange={i => setForm({ ...form, html: i.target.value })} />
                            </Form.Group>
                        </Col>
                        <Col col={12} className="text-center my-4 d-flex justify-content-center">
                            <button className="btn-theme mb-5" type="submit">
                                {translate('contact.send_message')}
                            </button>
                        </Col>
                    </form>
                </Row>
            </Container>
        </TemplateSimple >
    )
}


Contact.getInitialProps = async () => {
    return {
       contact_email: "bassalobre.vinicius@gmail.com"
       //contact_email : process.env.CONTACT_EMAIL
    }
}
export default Contact
