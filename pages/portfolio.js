import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import Link from "next/link";

import Layout from '../components/Layout'


const portfolio = () => {
    //Images
    const aelustre = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441149/aelustre.png';
    const hillory = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441158/hillorylogistics.png';
    const sugar = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441153/sugarstreet.png';
    const heritage = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441153/heritageapparels.png';
    const meyoapp = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441130/meyoapp.png';
    const atlandfoods = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441152/atlandfoods.png';
    const oguntech = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441128/oguntech.png';
    const chatfood = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441138/chatfood.png';
    const crwnClothing = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441138/crwn-clothing.png';

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Layout>
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="portfolio__heading">Work</h2>
                            <h5 className="portfolio__sub-heading">Filter Project</h5>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                            <Button
                                color='info'
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Html, CSS & Bootstrap
                            </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    color='info'
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Wordpress
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    color='info'
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    React & Node
                                </Button>
                            </NavItem>
                        </Nav>
                        <TabContent className="mag-top" activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="4">
                                        <Card body>
                                            <img src={heritage} alt="Heritage Apparel" className="image" />
                                            <CardTitle>
                                                Heritage Apparel 
                                                <Link href="https://www.heritageapparels.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                            </CardTitle>
                                            
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                    <Card body>
                                        <img src={meyoapp} alt="Meyo app" className="image" />
                                        <CardTitle>
                                            Meyo App
                                            <Link href="https://www.meyoapp.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                        </CardTitle>
                                    
                                    </Card>
                                    </Col>
                                    <Col sm="4">
                                    <Card body>
                                        <img src={atlandfoods} alt="Atland Foods" className="image" />  
                                        <CardTitle>
                                            AtlandFoods
                                            <Link href="https://www.meyoapp.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                        </CardTitle>
                                    </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                <Col sm="4">
                                    <Card body>
                                        <img src={aelustre} alt="aelustre" className="image" />
                                        <CardTitle>
                                            AelustreNg
                                            <Link href="https://aelustre.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                        </CardTitle>
                                    </Card>
                                </Col>
                                <Col sm="4">
                                    <Card body>
                                        <img src={hillory} alt="hillorylogistics" className="image" />
                                        <CardTitle>
                                            Hillory Logistics
                                            <Link href="https://hillorylogistics.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                        </CardTitle>
                                    </Card>
                                </Col>
                                <Col sm="4">
                                    <Card body>
                                        <img src={sugar} alt="Sugarstreet" className="image" />
                                        <CardTitle>
                                            Sugar Street
                                            <Link href="https://sugarstreetng.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                        </CardTitle>
                                    </Card>
                                </Col>
                            </Row>
                            </TabPane>
                            <TabPane tabId="3">
                            <Row>
                                <Col sm="4">
                                    <Card body>
                                        <img src={crwnClothing} alt="Crwn Clothing" className="image" />
                                        <CardTitle>
                                            Crwn Clothing
                                            <Link href="https://crwn-commerce-live.herokuapp.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                        </CardTitle>
                                    </Card>
                                </Col>
                                <Col sm="4">
                                <Card body>
                                    <img src={chatfood} alt="Chatfood " className="image" />
                                    <CardTitle>
                                        Chatfood AMS
                                        <Link href="https://immense-cove-06725.herokuapp.com"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                    </CardTitle>
                                   
                                </Card>
                                </Col>
                                <Col sm="4">
                                <Card body>
                                    <img src={oguntech} alt="Oguntech" className="image" />  
                                    <CardTitle>
                                        Ogun Tech
                                        <Link href="https://oguntechwebsite.herokuapp.com/"><i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                                    </CardTitle>
                                </Card>
                                </Col>
                            </Row>
                            </TabPane>
                        </TabContent>
                       
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default portfolio
