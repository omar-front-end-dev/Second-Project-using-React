import { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './Hero.css'

export class Hero extends Component {
  render() {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='carousel__item'>
                    <img className='carousel__img' src="../../../public/images/slider/2.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className='carousel__item'>
                    <img className='carousel__img' src="../../../public/images/slider/3.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel__item'>
                    <img className='carousel__img' src="../../../public/images/slider/4.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    </div>
    )
  }
}
