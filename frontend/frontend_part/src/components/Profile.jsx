import React from "react";
import { teachers,students,question } from "../data";
import Profile_box from "./Profile_box";
import { useLocation } from "react-router-dom";
import { data } from "./TeacherFrame";

function Profile(props){
    const location = useLocation();
    console.log(data);
    return (
        <div className="profile_main">
            <Profile_box name={data.name} mail={data.mail} img={teachers[0].img} tags={data.tags}/>
        </div>
    );
}

export default Profile;