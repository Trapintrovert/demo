import React from 'react'
import Link from "next/link";

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
                                <Link href="https://twitter.com/Trap_Introvert">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </Link>
                                <Link href="https://www.instagram.com/trapintrovert/">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </Link>
                                <Link href="https://www.linkedin.com/in/adedamola-adeniyi-aa73b7106/">
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                </Link>
                                <Link href="https://github.com/Trapintrovert/">
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                </Link>
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
