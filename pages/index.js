import React from 'react';
import Typed from 'react-typed';
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from "../components/Layout";

const HomePage = (props) => {
   

    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm="12" md='12'  lg='8'>
                        <div className="hero">
                            <p>Hi, <br/>
                            <Typed
                            strings={["I am Adeniyi Adedamola. I think, write and i code. <br/ > And this is my website you are at. Great, ain't it! " ]}
                            typeSpeed={80}
                            />  
                                
                            </p>
                            <Button className='hero__button'>Know More</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Layout>
    )
}
export default HomePage;
