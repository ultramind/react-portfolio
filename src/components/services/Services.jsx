import React from "react";
import "./services.css";
import { BsCheck2All } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h3>What I Offer</h3>
      <h2>My Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
