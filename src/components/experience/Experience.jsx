import React from 'react'
import './experience.css';
import {FaAward} from 'react-icons/fa';

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>Experience</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>FrontEnd Development</h3>
                <div className='experience_content'>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>Bootstrap</h4>
                            <small>Basics</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>React</h4>
                            <small>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>Material UI</h4>
                            <small>Basics</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience__backend'>
                <h3>BackEnd Development</h3>
                <div className='experience_content'>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>PHP</h4>
                            <small>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                            <small>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>Node JS</h4>
                            <small>Basics</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>Express JS</h4>
                            <small>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaAward className='experience__details-icon'/>
                        <div>
                            <h4>MongoDB</h4>
                            <small>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience