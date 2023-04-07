import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Answer = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const question = searchParams.get('question');

    const [answer,setAnswer] = useState("")


      const changeme = (e)=>{
        e.preventDefault();
        const ques = question;
        const ans = answer;
        var main;
        const values = {ques, ans}
        // window.location.replace('http://localhost:3000/signup')
        const data = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values),
        }
        fetch("/answer",data)
        .then(res => res.json())
        .then(data => main = data)
        .then(window.location.replace('/feed'))

      }

      const hadleInputs= (e)=>{
        console.log(e.target.name,e.target.value);
        setAnswer(e.target.value)
        console.log("asda",answer);
      }

  return (
  <div className='space'>
    <form>
    <div className='answerit'>
            <h1>Question: {question}</h1>
            <textarea placeholder='Answer the question here' className='textone' name="answer" onChange={hadleInputs} value={answer}></textarea>
            <button onClick={changeme} className='butt_of_answer'>Submit</button>
        </div>
    </form>
  </div>

  );
};

export default Answer;