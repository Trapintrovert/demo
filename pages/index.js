import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from "../components/Layout";

const HomePage = (props) => {
   

    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm="12" md='8' >
                        <div className="hero">
                            <p>Hi, <br/>
                                I am <b>Adeniyi Adedamola. </b> 
                                I think, write and i code. 
                                And this is my website 
                                you are at.
                                Great, ain't it!
                            </p>
                            <Button className='hero-button'>Know More</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Layout>
    )
}
export default HomePage;
