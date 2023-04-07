import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { useState } from 'react';



var datas;



function Navbar() {


  return (

      <div className='navbar'>
      <div><div><Link to="/feed" className='main_logo' href='#'><img height={60} width={200} src='./images/logo.svg'></img></Link></div></div>
      <div><Link to="/" href='#'>Home</Link></div>
      <div><Link to="/about" href='#'>AboutUs</Link></div>
      <div><Link to="/contact" href='#'>ContactUs</Link></div>
      <div><Link to="/Teacherslist" href='#'>Teachers</Link></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>


  );
}
// export {datas};
export default Navbar;
