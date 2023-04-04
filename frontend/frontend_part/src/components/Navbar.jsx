import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { useState } from 'react';



var datas;



function Navbar() {

  // async function databreach(){
  //   const data = {
  //     method:"POST",
  //     headers:{
  //         "Content-Type":"application/json"
  //     },
  //     // body:JSON.stringify(values),
  // }
  // await fetch("/teacherslist",data)
  // .then(res => res.json())
  // .then(data => datas = data)

  // }
  return (

      <div className='navbar'>
      <div><div><Link to="/" className='main_logo' href='#'><img height={60} width={200} src='./images/logo.svg'></img></Link></div></div>
      <div><Link to="/" href='#'>Home</Link></div>
      <div><Link to="/about" href='#'>AboutUs</Link></div>
      <div><Link to="/contact" href='#'>ContactUs</Link></div>
      {/* {(signedIn)? */}
      <div><Link to="/Teacherslist" href='#'>Teachers</Link></div>
      {/* null} */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>


  );
}
// export {datas};
export default Navbar;
