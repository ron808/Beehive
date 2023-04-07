import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Ask from './components/Ask';
import Teacherslist from './components/Teacherslist';
import Feed from './components/Feed';
import Answer from './components/Answer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";







function Homa() {
  var isUser = false;
  if (isUser) {
    return <div>awdwa</div>;
  }
  return <Home />;
}




function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route path="/" exact>
      <div>
        <Navbar />
        <Homa />
        <BottomNav />
      </div>
      </Route>

      <Route path="/about" exact>
      <div>
        <Navbar />
        <About />
        <BottomNav />
      </div>
      </Route>

      <Route path="/contact" exact>
      <div>
        <Navbar />
        <Contact />
        <BottomNav />
      </div>
      </Route>

      <Route path="/signup" exact>
      <div>
        <Navbar />
        <Signup />
        <BottomNav />
      </div>
      </Route>

      <Route path="/login" exact>
      <div>
        <Navbar />
        <Login />
        <BottomNav />
      </div>
      </Route>


      <Route path="/profile" exact>
      <div>
        <Navbar />
        <Profile />
        <BottomNav />
      </div>
      </Route>

      <Route path="/ask" exact>
      <div>
        <Navbar />
        <Ask />
        <BottomNav />
      </div>
      </Route>


      <Route path="/teacherslist" exact>
      <div>
        <Navbar />
        <Teacherslist />
        <BottomNav />
      </div>
      </Route>

      <Route path="/feed" exact>
      <div>
        <Navbar />
        <Feed />
        <BottomNav />
      </div>
      </Route>


      <Route path="/answer" exact>
      <div>
        <Navbar />
        <Answer />
        <BottomNav />
      </div>
      </Route>


      <Route path="/failure" exact>
      <div>
        <Navbar />
        <Feed />
        <BottomNav />
      </div>
      </Route>



    </Switch>
</Router>
    </div>
  );
}






export default App;
