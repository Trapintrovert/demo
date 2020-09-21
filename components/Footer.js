import React from 'react'
import { Container, Row, Col,  } from 'reactstrap'
import Link from 'next/link';


const Year = new Date();

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer__content">
                            <p> &copy; Copyright {Year.getFullYear()}</p>
                            <p> UI/UX with &#x1F499; by <Link href='https://twitter.com/WebMaye'>WebMaye</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
