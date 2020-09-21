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
                            <h2 className='about__heading'> Adeniyi Adedamola</h2>
                            <h5 className='about__sub-heading'>A Full Stack JavaScript Developer</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="about__content">
                                <p>I believe there is lot to learn about people but truth is, people say less of who/what they really are by words and letters, the most important piece of people is left in their actions. So, I will only describe myself here as I think of myself based on my interest and perspective. </p>
                                <p>I’m a deep thinker, I like to analyze problem from it root to understand the cause then check for all elements from start to end to identify the solution. I have interest in Philosophy, Psychology, Entrepreneurship, Technology, Art and Contemporary Culture, Nature and Music.</p>
                                <p>I think whenever there is need to use my right-side of the brain, I believe thinking can be little too much sometime. Sometimes all you need to do is to wander through the universe and end up with a great smile on your face, imaging being in places you ever dream of or creating objects and events within your mind. Isn’t that incredible? You rule everything within.</p>
                                <p>I’m a minimalist, I don’t believe I need everything or everyone, I just need things and people that are important to me and I always try to identify my wants and needs every time. I like to define my wins and loses.</p>
                                <p>I like to read. Some of my top books are <b><i>Emotional Intelligence by Daniel Goleman, Mindset: The Psychology of Success by Carol S. Dweck, The Book of Joy by Dalai Lama, Desmond Tutu and Douglas Abraham, Awaken the Giant Within by Tony Robbins, and Tao of Seneca Vol I, ii, iii.</i></b></p>
                                <p>I should probably stop here, you can contact me via email or IG (See contact page) if you want to know more about me. &#x270C;</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default about
