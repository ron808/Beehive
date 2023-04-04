import React from 'react';
import SignupForm from './SignupForm';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function namea(){
    return(<h1>asd</h1>)
}

function Signup() {
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