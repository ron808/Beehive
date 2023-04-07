import React from "react";
import Description from "./Description";
import {teachers, students, question} from "../data";


function About(){
    return(
            <div className="mainmain">
                <div className="about_main">
            <div class="vl"></div>

            <div className="heading_about">
               <h1 className="nomnom">About</h1>
                <h3>Us</h3>
            </div>


        </div>
        
            <div className="about_description">
            <div className="bumpum">
            <Description name={students[0].name} para={students[0].data} img={students[0].img}/>
            <Description name={students[1].name} para={students[1].data} img={students[1].img}/>
            <Description name={students[2].name} para={students[2].data} img={students[2].img}/>

            </div>

                
            </div>
            </div>
    );
}

export default About;