import React from 'react';
import group from '../img/group.png'
function Hero() {
    return ( 
        <section className='hero-section'>
            <img className='hero-section__group-img' src={group} alt="group-picture" />
            <h1 className='hero-section__title'>Online Experiences</h1>
            <p className='hero-section__text'>Join unique interactive activities led by <br />
            one-of-a-kind hosts—all without leaving <br />
            home.
            </p>
        </section>
     );
}

export default Hero;