import React from 'react'
import './about.css';
import AboutMe from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {BsFolderPlus} from 'react-icons/bs';


function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={AboutMe} alt="me" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expreince</h5>
              <small>4+ Years working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <BsFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, labore magni neque adipisci ipsa reprehenderit. Dolor, sapiente. Expedita officia provident voluptatum ea officiis dignissimos facilis beatae dolor. Possimus, eaque magnam?
          </p>
          <a className='btn btn-primary' href='#contact'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About