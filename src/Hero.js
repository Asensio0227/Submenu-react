import React from 'react'
import phone from './images/phone.svg';
import { useGlobalContext } from './Context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h2>Payments infrastructure for the internet</h2>
          <p>
            Millions of businesses of all sizes – from startups to Fortune 500s – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <button className="btn signin-btn">
            start now
          </button>
        </article>
        <article className="hero-image">
          <img src={phone} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero