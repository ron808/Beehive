import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function Home() {
  return (
    <div className='home'>
    <div className='heading'><h1>Beehive</h1></div>
    <div className='head_text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sapien id diam rutrum malesuada quis nec dui. Suspendisse potenti. Phasellus dapibus non arcu ut maximus. Aliquam nunc arcu, ullamcorper eu porttitor eget, blandit nec.
</p></div>
    <div className='home_button'><button><h2><Link to="/signup">Get Started</Link></h2></button>
    </div>

    </div>
  );
}

export default Home;
