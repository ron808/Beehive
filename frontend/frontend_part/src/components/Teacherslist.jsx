import React from "react";
import TeacherFrame from "./TeacherFrame";
import { teachers,students,question } from "../data";
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


    return(
        <div className="teacherslist">
            <div className="heading_teacher">
              <h2>Ask a Specific Teacher</h2>
                <div className="teacherflex">
                {data?data.map(opdesk):<p>Loading...</p>}
                </div>
            </div>

        </div>
    )
}

export default Teacherslist;