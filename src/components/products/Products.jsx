import { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export class Products extends Component {
  render() {
    return (
        <Container fluid>
            <div className="products__content">
                <Row>
                    <Col lg={4} md={6} className='mb-3'>
                        <Card>
                            <Card.Img style={{objectFit: "cover"}} variant="top" src="../../../public/images/products/portfolio2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='mb-3'>
                        <Card>
                            <Card.Img style={{objectFit: "cover"}} variant="top" src="../../../public/images/products/portfolio3.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='mb-3'>
                        <Card>
                            <Card.Img style={{objectFit: "cover"}} variant="top" src="../../../public/images/products/portfolio4.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='mb-3'>
                        <Card>
                            <Card.Img style={{objectFit: "cover"}} variant="top" src="../../../public/images/products/portfolio5.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='mb-3'>
                        <Card>
                            <Card.Img style={{objectFit: "cover"}} variant="top" src="../../../public/images/products/portfolio6.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='mb-3'>
                        <Card>
                            <Card.Img style={{objectFit: "cover"}} variant="top" src="../../../public/images/products/portfolio7.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
  }
}
