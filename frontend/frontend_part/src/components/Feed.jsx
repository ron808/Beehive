import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "next/dynamic";
import { useState, useEffect, useLayoutEffect,useRef} from "react";



const Feed = ()=>{

    const [data, setData] = useState(null);
    const [question,setQuestion] = useState("How to write a basic Html Code");
    const [solution,setSolution] = useState(`
    <!DOCTYPE html>
    <html>
        <body>
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
        </body>
    </html>
    `);
    const [tags,setTags] = useState(["Web Development","FrontEnd Development"]);


    useEffect(() => {
        fetch('/feed')
          .then(response => response.json())
          .then(data => {
            setData(data)
          })
          .catch(error => {
            console.log(error)
          });
      }, []); 


    function postes(x){
        return (<div className="question_tab" onClick={()=>clicked_question(x)}>
                     <h3 className="my_pre2">Que: {x.question.split(" ").slice(0, 5).join(" ")}...</h3>
                </div>
        )
    }

    function clicked_question(x){
        console.log(x)
        setQuestion(x.question)
        x.solved ? setSolution(x.answer): setSolution("Question not yet solved")
        setTags(x.tags)

    }

    function pdes(x){
        return(
            <span className="another_tag a_tag">{x}</span>
        )
    }

    return (
        <div className="back_main">

        <div className="flex_wala">
            <div className="left_feed">
                <h1>Top Rated Questions</h1>

                <div className="col_ful">
                <div class="darken-top"></div> 
                {data ? (data.map(postes)) : (<p>Loading...</p>)}
                <div class="darken-bottom"></div>
                </div>
                <div className="feed_button">
                    <form>
                        <button className="feed_butt">
                        <Link to="/ask">                        
                            <h2>
                                Ask a Question
                            </h2>
                        </Link>

                        </button>
                    </form>
                </div>
            </div>

            <div className="right_feed">
                <div className="question_box">
                    <h1>Question: </h1>
                    <h2><pre>{question}</pre></h2>
                    {tags.map(pdes)}
                </div>
                <div className="answer_box">
                    <h1>Answer: </h1>
                    <h2 className="answer_real"><pre className="my_pre">{solution!=="Question not yet solved"? solution : <div>
                        Question not yet solved
                        <div></div>
                        <form>
                            Answer the question now:
                            <button className="ask_butt">      
                            <Link
                                to={{
                                pathname: '/answer',
                                search: `?question=${question}`,
                                }}>
      Answer
      </Link></button>
                        </form>
                    </div>}</pre></h2>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Feed;