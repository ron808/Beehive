import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
const select = ["Web development","IOT","Machine Learning","Block Chain","Network Security" ,"computer network", "big data"]
function Ask() {
  return (
    <div className='ask'>
        <form method="POST">
        <div className='my_name'>
            <div className='first_box'>
                <div className='first_first_box'><h2>Question:</h2></div>
                <div className='first_second_box'><textarea className='text_area'></textarea></div>
            </div>

            <div className='second_box'>
                <div className='second_first_box'><h2>Tags:</h2></div>
                <div className='second_second_box'><Multiselect className="iklota"
                        isObject={false}
                        onSelect={(e)=>{
                            console.log(e)
                            // user[0].tags.push(sel);
                        }} 
                        
                        onRemove={(e)=>{
                            console.log(e)

                            // user[0].tags.pop(sel);;
                        }} 
                        options={select}
                        /></div>
            </div>
            <div className='fourth_box'>
                <button>Ask</button>
            </div>
        </div> 
        </form>
    </div>
  );
}

export default Ask;