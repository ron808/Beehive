import React from "react";
import LoginForm from "./LoginForm";
import { useState,useEffect } from 'react';


function Login(){
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

    return (
        <div>
        <div className='login'>
        <h1>Welcome Back</h1>

        


        <div id="background-wrap_new">
        <div className="star_four star"></div>
        <div className="star_two star"></div>
        <div className="star_one star"></div>
        <div className="star_three star"></div>
        <div className="star_five star"></div>
        <div className="star_six star"></div>


        </div>
        <div className={isactive?'scrolldown':'icon_scroll'}><img src ="/images/scroll-down.png" height="50px" width="50px"/></div>
    </div>


    <div className='second_signup'>
      <div className='login_form cloudz'>
      <LoginForm />
      </div>
    </div>
        </div>
    );
}

export default Login;