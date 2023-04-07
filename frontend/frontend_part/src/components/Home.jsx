import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function Home() {
  return (
    <div className='home'>
    <div className='heading'><h1>Beehive</h1></div>
    <div className='head_text'><p>This project is all about connecting students with teachers, and creating a chain like structure throughout the campus of Sathyabama to build a better communication and understanding between all respective individuals. Students can basically ask questions to all or only specific teachers they want to, and teachers can answer the questions and make the questions public for other students with same doubt, and these all will be done in real time, extending the reach of teachers to all the students through the perfect medium. 
      </p></div>
    <div className='home_button'><button><h2><Link to="/signup">Get Started</Link></h2></button>
    </div>

    </div>
  );
}

export default Home;
