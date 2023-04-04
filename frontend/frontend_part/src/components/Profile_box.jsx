import React from "react";
import Profile from "./Profile";
import { teachers,students,question } from "../data";


function pdes(x){
    return(
        <div className="a_tag">{x}</div>
        // console.log(x)
    )
}

function Profile_box(props){
    return (
        <div className="pallet_of_teach">
        <div className="profile_pic"><img src={"https://i.pinimg.com/originals/1e/90/72/1e9072ad791c9221fbcf0ac94842db9d.jpg"} width="228rem" height="216rem" alt="pop" /></div>
        <div className="baki_sab">
            <h1 className="teach_name">{props.name}</h1>
            <h2 className="teach_mail">{props.mail}</h2>
            <div className="tags">
                <h3>Tags:</h3>
                {props.tags.map(pdes)}
            </div>
        </div>

    </div>
    )
}


export default Profile_box;