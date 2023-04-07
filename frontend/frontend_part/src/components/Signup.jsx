import React from 'react';
import SignupForm from './SignupForm';
<<<<<<< HEAD
import { useState,useEffect } from 'react';
=======
>>>>>>> origin/main
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function namea(){
    return(<h1>asd</h1>)
}

function Signup() {
<<<<<<< HEAD
    const [isactive,setIsActive] = useState(false);


    useEffect(() => {
        const myFunction = () => {
          console.log('Function executed!');
          setIsActive(!isactive)
        };
        const intervalId = setInterval(myFunction, 5000);
        return () => {
          clearInterval(intervalId);
        };
      });
    
=======
>>>>>>> origin/main
  return (
  <div>
  <div className='signup'>
        <h1>Welcome</h1>
        <h2>To The Community</h2>

        <div id="background-wrap">
    <div class="x1">
        <div className="cloud"></div>
    </div>

    <div class="x2">
        <div className="cloud"></div>
    </div>

    <div class="x3">
        <div className="cloud"></div>
    </div>

    <div class="x4">
        <div className="cloud"></div>
    </div>

    <div class="x5">
        <div className="cloud"></div>
    </div>
    <div class="x6">
        <div className="cloud"></div>
    </div>
    <div class="x7">
        <div className="cloud"></div>
    </div>
</div>
<<<<<<< HEAD
    <div className={isactive?'scrolldown':'icon_scroll'}><img src ="/images/scroll-down.png" height="50px" width="50px"/></div>
=======
>>>>>>> origin/main
    </div>


    <div className='second_signup'>
      <div className='signup_form clouds'>
      <SignupForm />
      </div>
    </div>

  </div>
    
  );
}

export default Signup;