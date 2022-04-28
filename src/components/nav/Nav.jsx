import React, { useState } from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiBookBookmark} from 'react-icons/bi';
import {MdPermContactCalendar} from 'react-icons/md';

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  function handleClick(event) {
    const name = event.target.name;
    // console.log(event.target.name);
    setActiveNav(name);
    console.log(activeNav);
  }

  return (
    <nav>
      <a onClick={()=>{setActiveNav("#")}} href='#' className={activeNav === "#"?"active" : ""}><AiOutlineHome/></a>
      <a onClick={()=>{setActiveNav("#about")}} href='#about'className={activeNav === "#about"?"active" : ""}><AiOutlineUser/></a>
      <a onClick={()=>{setActiveNav("#experience")}} href='#experience' className={activeNav === "#experience"?"active" : ""}><RiServiceLine/></a>
      <a onClick={()=>{setActiveNav("#services")}} href='#services' className={activeNav === "#services"?"active" : ""}><RiServiceLine/></a>
      <a onClick={()=>{setActiveNav("#portfolio")}} href='#portfolio' className={activeNav === "#portfolio"?"active" : ""}><BiBookBookmark/></a>
      <a onClick={()=>{setActiveNav("#contact")}} href='#contact' className={activeNav === "#contact"?"active" : ""}><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav