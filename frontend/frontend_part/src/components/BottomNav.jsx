import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
<<<<<<< HEAD
import ScrollToTop from "./ScrollToTop";
=======
>>>>>>> origin/main



function BottomNav() {
  return (
    <div className='bottom_nav flex'>
<<<<<<< HEAD
    <ScrollToTop />
=======
>>>>>>> origin/main
        <div className='border one botton_logo'><img height={230} width={550} src='./images/beeh.svg'></img></div>
        <div className='flex border two'>
            <div className='border three flex_coloumn'>
                <div className='border golden five'><p><Link to="/">Home</Link></p></div>
                <div className='border golden six'><p><Link to="/signup">SignUp/Login</Link></p></div>
            </div>
            <div className='border four flex_coloumn'>
                <div className='border golden seven'><p><Link to="/about">AboutUs</Link></p></div>
                <div className='border golden eight'><p><Link to="/contact">ContactUs</Link></p></div>
            </div>
        </div>
    </div>
  );
}

export default BottomNav;
