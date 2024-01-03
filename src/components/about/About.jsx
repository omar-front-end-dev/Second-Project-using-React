import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class About extends Component {
  render() {
    return (
        <Container fluid>
            <Row className=' align-items-center'>
                <Col className='mb-md-4 mb-0' lg={6}>
                    <div className="about__content">
                        <h1 className='text-capitalize mb-4'>about us</h1>
                        <p className='fw-bold'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta sit quis culpa voluptas consequatur non omnis, cumque delectus facere ducimus quam illo quaerat voluptate temporibus id! Voluptatibus, eaque voluptas!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta sit quis culpa voluptas consequatur non omnis, cumque delectus facere ducimus quam illo quaerat voluptate temporibus id! Voluptatibus, eaque voluptas!
                        </p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="about__image">
                        <img className='img-fluid rounded-2' src="../../../public/images/about/About-1.jpg" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
  }
}
