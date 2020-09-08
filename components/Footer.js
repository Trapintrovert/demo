import React from 'react'
import { Container, Row, Col,  } from 'reactstrap'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <p className="float-left"> &copy; Copyright 2020</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
