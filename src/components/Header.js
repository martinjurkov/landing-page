import React from 'react';

const Header = ({ scrolling }) => {
  return (
    <>
      <div className='header'>
        <div className='navbar'>
          <div className='navbar__text'>
            <button className='navbar__items--invisible'>
              <i className='fa fa-bars fa-2x'></i>
            </button>
            <h1>MusicStore</h1>
            <div className='navbar__items'>
              <button>Home</button>
              <button>Headphones</button>
              <button>Speakers</button>
              <button>Earphones</button>
            </div>
            <button className='shop__btn'>
              <i className='fa fa-shopping-cart fa-2x' />
            </button>
          </div>
          {/* <p className='navbar__line'></p> */}
        </div>
        <div className='header__left'>
          <div className='header__text'>Let the Music Speak!</div>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className='header__btn'>See Products</button>
        </div>
      </div>
    </>
  );
};

export default Header;
