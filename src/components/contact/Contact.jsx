import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <div className="contact__content">
            <form>
                <Row>
                    <Col md={6} className='mb-4'>
                        <input className='form-control py-3 shadow' type="text" placeholder='Name' />
                    </Col>
                    <Col md={6} className='mb-4'>
                        <input className='form-control py-3 shadow' type="email" placeholder='Email' />
                    </Col>
                </Row>
                <textarea className='form-control mb-4 shadow' rows="5" placeholder='Message'></textarea>
                <button className='form-control py-2 btn btn-dark fs-4 shadow'>Send to Message</button>
            </form>
        </div>
      </Container>
    )
  }
}
