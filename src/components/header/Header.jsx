import React from 'react';
import './header.css';
import CTA  from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

function Header() {
  return (
    <header>
      <div className='container header__container'>
          <h5 className=''>Hello I am</h5>
          <h1>Akachukwu Udechukwu</h1>
          <h5>FullStack Developer</h5>
          <CTA/>
          <HeaderSocial/>
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
          <a className='scroll__down' href=''>Scroll Down</a>
      </div>  
    </header>
  )
}

export default Header