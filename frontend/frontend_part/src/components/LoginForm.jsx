import React from "react";
import { useState } from "react";
import {  Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
<<<<<<< HEAD
import ScrollToTop from "./ScrollToTop";
=======

>>>>>>> origin/main


function LoginForm(){



        const timeout = () => {
            // signedIn = true;
          window.location.replace('/');
        };


    const location = useLocation();


    const [user,setUser] = useState([]);
    let name, value;

    const hadleInputs = (e)=>{
        console.log(e.target.name,e.target.value);
        // e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
        console.log(user);
    }





    const mutant = async (e)=>{

        e.preventDefault();
        const mail = user.mail;
        const password = user.password;
        var message,main;
        const values = {mail, password}
        console.log(user);
        // window.location.replace('http://localhost:3000/signup')
        const data = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values),
        }
        await fetch("/login",data)
        .then(res => res.json())
        .then(data => main = data)


        if(main.message){
            alert(main.message);
        }
        else{
            console.log(main)
            timeout();
        }

<<<<<<< HEAD
=======
        
        // if(main.includes("not found")){
        //     console.log(main);
        //     alert(main);
        // }
        // else{
        //     console.log(main);
        //     timeout();
        // }
        
        // if(main){
        //     console.log(main);
        //     alert(main);
        //     console.log("first")
        // }
        // else if(!main){
        //     timeout();
        //     // console.log(message)
        //     console.log("second")
        // }
        // else{
        //     // console.log(message)
        //     console.log("third")
        // }

>>>>>>> origin/main
    }



    
    return (
        <div>
            <form method="POST">
                <label>
                    <p>Email:</p>
                    <input type="mail" name="mail" onChange={hadleInputs} value={user.mail}/>
                </label>
                <label>
                    <p>Password :</p>
                    <input type="password" name="password" onChange={hadleInputs} value={user.password}/>
                </label>

                <button onClick={mutant} className="submit_in_hole" >Submit</button>
            </form>
        </div>
    );

}

export default LoginForm;