import React from 'react';
import NewEarphone from '../assets/new-earphones.png';

const NewProducts = () => {
  return (
    <>
      <h1 className='container new__title'>New Products</h1>
      <div className='container'>
        <div className='new__first'>
          <div className='text__first'>
            <h2 className='title__first'>Z7 Speaker</h2>
            <button className='btn__first'>See Product</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='new__second'>
          <img
            src={NewEarphone}
            alt={NewEarphone}
            className='new__second--img'
          />
          <div className='text__second'>
            <h2 className='title__second'>YX1 EARPHONES</h2>
            <p>Upgrade to premium earphones today</p>
            <button className='btn__second'>See Product</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
