import React from 'react';
import MusicianPhoto from '../assets/musician-photo.jpg';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <img
          src={MusicianPhoto}
          alt={MusicianPhoto}
          className='contact__photo'
        />
      </div>
      <div className='contact__card'>
        <p>Do you have any questions?</p>
        <button>Contact Us</button>
      </div>
      <div className='contact__card--invisible'>
        <p>Do you have any questions?</p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Contact;
