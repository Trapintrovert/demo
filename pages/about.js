import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/Layout'

const about = () => {
    return (
        <Layout>
            <div className="about">
                <Container>
                    <Row>
                        <Col> 
                            <h2 className='about__heading'>Adedamola Adeniyi </h2>
                            <h5 className='about__sub-heading'>A Full Stack JavaScript Developer</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="about__content">
                                <p>I guess a lot of text should go in here because people badly want
                                to know about a guy who has a kick-ass website they never seen. 
                                So, I would type some text that makes sense and the rest will be just
                                plain crap. Again if you are irritated with this kind of bull crap 
                                please forgive this poor soul because he's ain't a writer. 
                                Just a guy like you who would rather get his job done.
                                I don't mind if you love to know more about me, I mean just
                                Socially on Twitter and Instagram.
                                </p>
                                <p>I don't mind if you love to know more about me, I mean just Socially on <b>Twitter</b> and <b>Instagram.</b></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default about
