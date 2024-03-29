import React from 'react';
import MottoPhoto from '../assets/phylosophy-photo.jpg';

const About = () => {
  return (
    <div className='container__about'>
      <div className='about__text'>
        <div>
          <h2>Our philosophy</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>
      </div>
      <div className='about__right'>
        <img src={MottoPhoto} alt={MottoPhoto} className='about__photo' />
        <button className='about__btn'>About Us</button>
      </div>
    </div>
  );
};

export default About;
