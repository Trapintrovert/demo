import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';


import Layout from '../components/Layout'


const portfolio = () => {

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
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Wordpress
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    color='info'
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    React
                                </Button>
                            </NavItem>
                            <NavItem>
                            <Button
                                color='info'
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                Node
                            </Button>
                        </NavItem>
                        </Nav>
                        <TabContent className="mag-top" activeTab={activeTab}>
                            <TabPane tabId="1">
                            <Row>
                                <Col sm="4">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        
                                    </Card>
                                </Col>
                                <Col sm="4">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        
                                    </Card>
                                </Col>
                                <Col sm="4">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        
                                    </Card>
                                </Col>
                            </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                <Col sm="4">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="4">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                                </Col>
                                <Col sm="4">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
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
