import React from "react";
import TeacherFrame from "./TeacherFrame";
import { teachers,students,question } from "../data";
<<<<<<< HEAD
import { useState,useEffect } from "react";

function Teacherslist(){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/teacherslist')
          .then(response => response.json())
          .then(data => {
            setData(data)
          })
          .catch(error => {
            console.log(error)
          });
      }, []); 


    function opdesk(teachers){
        return <TeacherFrame name={teachers.name} mail={teachers.mail} url={teachers.img} tags={teachers.tags}/>
    }
=======

// import {datas} from "./Navbar";

var datas;


function opdesk(teachers){
    return <TeacherFrame name={teachers.name} mail={teachers.mail} url={teachers.img} tags={teachers.tags}/>
}

async function abm(){
    const data = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        // body:JSON.stringify(values),
    }
    await fetch("/teacherslist",data)
    .then(res => res.json())
    .then(data => datas = data)
}

abm();
function Teacherslist(){



    console.log(datas)
>>>>>>> origin/main


    return(
        <div className="teacherslist">
            <div className="heading_teacher">
<<<<<<< HEAD
              <h2>Ask a Specific Teacher</h2>
                <div className="teacherflex">
                {data?data.map(opdesk):<p>Loading...</p>}
=======
            <h2>Ask a Specific Teacher</h2>
                <div className="teacherflex">
                {datas.map(opdesk)}
>>>>>>> origin/main
                </div>
            </div>

        </div>
    )
}

export default Teacherslist;