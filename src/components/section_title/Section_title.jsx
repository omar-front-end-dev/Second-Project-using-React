/* eslint-disable react/prop-types */
import { Component } from 'react'

export class Section_title extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='section-title py-2 text-center bg-dark mb-4'>
        <h1 className='text-white text-uppercase'>
            {title}
        </h1>
      </div>
    )
  }
}
