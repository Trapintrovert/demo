import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'

const contact = () => {
    return (
        <Layout>
            <section className="contact">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-center">Connect with me on:</h3>

                            <div className="contact__socials">
                                <i className="fas fa-twitter" aria-hidden="true"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default contact
