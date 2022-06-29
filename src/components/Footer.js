import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <button>
          <i className='fa fa-facebook fa-2x'></i>
        </button>
        <button>
          <i className='fa fa-instagram fa-2x'></i>
        </button>
        <button>
          <i className='fa fa-twitter fa-2x'></i>
        </button>
      </div>
      <div className='footer__right'>Created by Martin Jurkov</div>
    </div>
  );
};

export default Footer;
