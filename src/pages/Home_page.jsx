import { Component } from 'react'
import { Navigation } from '../components/navigation-bar/Navigation';
import { Hero } from '../components/hero_section/hero';
import { About } from '../components/about/About';
import { Section_title } from '../components/section_title/Section_title';
import { Products } from '../components/products/Products';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/Footer';
export class Home_page extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <header id='home'>
            <Hero/>
        </header>
        <section className='about py-5' id='about'>
            <About/>
        </section>
          <Section_title title="products"/>
        <section className='products py-5' id='products'>
          <Products/>
        </section>
        <Section_title title="contact us"/>
        <section className='contact py-5' id='contact'>
          <Contact/>
        </section>
        <footer className='py-5 bg-dark text-white'>
          <Footer/>
        </footer>
      </>
    )
  }
}
