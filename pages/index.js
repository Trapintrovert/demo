import React from 'react';
import Link from "next/link";
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
                            strings={["Hi, my name is Adeniyi Adedamola, but I prefer you call me Trap. I’m damn sure you want to ask why Trap, I know right but let’s leave that for another day. Click the button &#x1F447; to know little bit more. " ]}
                            typeSpeed={80}
                            />  
                                
                            </p>
                            <Button className='hero__button'>
                                <Link href="/about">Know More</Link>
                            </Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Layout>
    )
}
export default HomePage;
