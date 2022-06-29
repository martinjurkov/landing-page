import React from 'react';
import Headphones from '../assets/headphones-photo.png';
import Speakers from '../assets/speakers-photo.png';
import Earphones from '../assets/earphones-photo.png';

import Card from '../components/shared/Card';

const Categories = () => {
  return (
    <>
      <div className='container container__categories'>
        <Card>
          <img src={Headphones} alt={Headphones} width='200px' />
          <div className='card__bottom'>
            <h3>Headphones</h3>
            <button className='btn__shop'>
              Shop
              <i className='fa fa-chevron-right'></i>
            </button>
          </div>
        </Card>
        <Card>
          <img src={Speakers} alt={Speakers} width='200px' />
          <div className='card__bottom'>
            <h3>Speakers</h3>
            <button className='btn__shop'>
              Shop
              <i className='fa fa-chevron-right'></i>
            </button>
          </div>
        </Card>
        <Card>
          <img src={Earphones} alt={Earphones} width='200px' />
          <div className='card__bottom'>
            <h3>Earphones</h3>
            <button className='btn__shop'>
              Shop
              <i className='fa fa-chevron-right'></i>
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Categories;
