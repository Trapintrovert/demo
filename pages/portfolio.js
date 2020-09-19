import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';

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
                                            <CardTitle>Heritage Apparel <i className="fas fa-arrow-right" aria-hidden="true"></i></CardTitle>
                                            
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                    <Card body>
                                        <img src={meyoapp} alt="Meyo app" className="image" />
                                        <CardTitle>Meyo App</CardTitle>
                                    
                                    </Card>
                                    </Col>
                                    <Col sm="4">
                                    <Card body>
                                        <img src={atlandfoods} alt="Atland Foods" className="image" />  
                                        <CardTitle>AtlandFoods</CardTitle>
                                    </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                <Col sm="4">
                                    <Card body>
                                        <img src={aelustre} alt="aelustre" className="image" />
                                        <CardTitle>AelustreNg</CardTitle>
                                    </Card>
                                </Col>
                                <Col sm="4">
                                    <Card body>
                                        <img src={hillory} alt="hillorylogistics" className="image" />
                                        <CardTitle>Hillory Logistics</CardTitle>
                                    </Card>
                                </Col>
                                <Col sm="4">
                                    <Card body>
                                        <img src={sugar} alt="Sugarstreet" className="image" />
                                        <CardTitle>Sugar Street</CardTitle>
                                    </Card>
                                </Col>
                            </Row>
                            </TabPane>
                            <TabPane tabId="3">
                            <Row>
                                <Col sm="4">
                                    <Card body>
                                        <img src={crwnClothing} alt="Crwn Clothing" className="image" />
                                        <CardTitle>Crwn Clothing</CardTitle>
                                        
                                    </Card>
                                </Col>
                                <Col sm="4">
                                <Card body>
                                    <img src={chatfood} alt="Chatfood " className="image" />
                                    <CardTitle>Chatfood AMS</CardTitle>
                                   
                                </Card>
                                </Col>
                                <Col sm="4">
                                <Card body>
                                    <img src={oguntech} alt="Oguntech" className="image" />  
                                    <CardTitle>Ogun Tech</CardTitle>
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
