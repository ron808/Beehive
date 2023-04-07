import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { useState } from 'react';
const select = [
    "Web development",
    "IOT",
    "Machine Learning",
    "Block Chain",
    "Network Security",
    "Computer network",
    "Bigdata",
    "Tailwind",
    "Flutter",
    "Solidity",
    "Rust",
    "C++",
    "Java",
    "Data-Stuctures",
    "Algorithms",
    "JavaScript",
    "Python",
    "React",
    "Angular",
    "Vue",
    "Swift", // Added item
    "Kotlin", // Added item
    "Ruby", // Added item
    "PHP", // Added item
    "ASP.NET", // Added item
    "MongoDB", // Added item
    "SQL", // Added item
    "HTML5", // Added item
    "CSS3", // Added item
    "WordPress", // Added item
  ];



function Ask() {
    const [user,setUser] = useState([{tags:[]}]);
    let name, value;

    const hadleInputs = (e)=>{
        console.log(e.target.name,e.target.value);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
        console.log(user);
    }

    const mutant = async (e)=>{
        console.log("e: ",e.target);
        e.preventDefault();
        const question = user.question;
        const tags = user[0].tags;
        const values = {question, tags}
        // window.location.replace('http://localhost:3000/signup')
        const data = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values),
        }
        await fetch("/ask",data)
        .then(res => res.json())
        .then(data => data?window.location.replace('/succes'):window.location.replace('/failure'))

    }

    
  return (
    <div className='ask'>
        <form method="POST">
        <div className='my_name'>
            <div className='first_box'>
                <div className='first_first_box'><h2>Question:</h2></div>
                <div className='first_second_box'><textarea placeholder='Enter yout Question here.' className='text_area' name="question" onChange={hadleInputs} value={user.question}></textarea></div>
            </div>

            <div className='second_box'>
                <div className='second_first_box'><h2>Tags:</h2></div>
                <div className='second_second_box'><Multiselect className="dolota"
                        isObject={false}
                        onSelect={(e,sel)=>{
                            console.log(e)
                            user[0].tags.push(sel);
                        }} 
                        
                        onRemove={(e,sel)=>{
                            console.log(e)

                            user[0].tags.pop(sel);;
                        }} 
                        options={select}
                        /></div>
            </div>
            <div className='fourth_box'>
                <button onClick={mutant} className='askQuestion'>Ask</button>
            </div>
        </div> 
        </form>
    </div>
  );
}

export default Ask;