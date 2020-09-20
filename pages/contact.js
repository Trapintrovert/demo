import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'

const contact = () => {
    return (
        <Layout>
            <section className="contact">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center">Connect with me on:</h3>
                            <div className="contact__socials">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                            </div>
                            <div className="contact__email">
                                <div className="contact__socials">
                                    <i className="far fa-envelope" aria-hidden="true"></i>: inboxadeniyi@gmail.com
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default contact
