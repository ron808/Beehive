import React from "react";

function Description(props){
    return(
        <div className="des_flex">
            <img src ={props.img} height="200px" width="200px"/>
            <div className="naam_kuch">
                <h1>
                    {props.name}
                </h1>
                <p>
                    {props.para}
                </p>
            </div>
        </div>
    )
} 
export default Description;