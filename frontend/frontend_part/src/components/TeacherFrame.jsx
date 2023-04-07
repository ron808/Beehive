import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import { Switch, Route} from "react-router-dom"
import Profile from "./Profile";
var data;
function TeacherFrame(props){

    function paceur(){
        data = props;
    }
    return(
        <Link to="/Profile" onClick={paceur} href='#'>
            <div className="frame">
                <img className="imageofme" src={"https://img.freepik.com/premium-vector/cartoon-illustration-thai-female-teacher-holding-stick-front-blackboard_49924-213.jpg?w=2000"} width="228rem" height="216rem" alt="pop" />
                <h3>{props.name}</h3>
            </div>
        </Link>
    )
}

export {data};

export default TeacherFrame;