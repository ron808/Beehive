const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require('mongoose')
const app = express();
var assert = require('assert');


<<<<<<< HEAD
// const dotenv = require('dotenv');
// dotenv.config();

// const port = `${process.env.BACKEND_PORT}`;
=======

>>>>>>> origin/main
// app.use(bodyParser.urlencoded({
//     extended: true
// }));



app.use(express.json());


  
//MONGO CONNECT
// mongoose.connect('mongodb:@localhost:27017/Beehive');

mongoose.connect('mongodb://localhost:27017/Beehive');

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true]
    },
    mail:{
        type:String,
        required:[true]
    },
    password:{
        type:String,
        required:[true]
    },
    tags:{
        type:Array,
        required:[true]
    },
    image:{
        data: Buffer,
        contentType: String
    }

});

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true]
    },
    mail:{
        type:String,
        required:[true]
    },
    password:{
        type:String,
        required:[true]
    },
    tags:{
        type:Array,
        required:[true]
    },

});

const questionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true]
    },
    answer:{
        type:String,
    },
    solved:{
        type:Boolean,
        required:[true]
    },
    solvedBy:{
        type:String,
    },
    tags:{
        type:Array,
        required:[true]
    },

});


const Teacher = mongoose.model('Teacher',teacherSchema);
const Student = mongoose.model('Student',studentSchema);
const Question = mongoose.model('Question',questionSchema);






// SignUp
app.get("/signup",(req,res)=>{
    // res.sendFile(__dirname+'/public/index.html')
})
app.post("/signup",(req,res)=>{
    

    const {name, mail, password, tags} = req.body;
    // console.log(name, mail, password, tags);
    console.log(req.body);

    if(mail.includes("@sathyabama.ac.in")){
        const new_teach = new Teacher({
            name:name,
            password:password,
            mail:mail,
            tags:tags
        })
    new_teach.save();

    }
    else{
        const new_stud = new Student({
            name:name,
            password:password,
            mail:mail,
            tags:tags
        })
    new_stud.save();

    }


    // const new_stud = new Student({
    //     name:req.body.name,
    //     avt_name:req.body.avt,
    //     password:md5(req.body.password),
    //     email:req.body.email,
    //     country:req.body.country,
    //     comm_inv:arrar
    // })
    
})


//SignIn
// app.get("/signin",(req,res)=>{

//     res.sendFile(__dirname+'/public/index.html')

// })
app.post("/login",async (req,res)=>{
    const {mail, password} = req.body;

    console.log(mail, password);

    if(mail.includes("@sathyabama.ac.in")){

 

        var teach = await Teacher.findOne({mail:mail, password:password}).exec();

        // console.log(teach.name)

            if(teach){
                console.log("teacher found")
                res.json({teach});
            }
            else{
                console.log("teacher not found")
                res.json({message:"teacher not found"});
            }
        // teach.then(function (err,user){
        //     if(err){
        //         console.log(err)
        //     }
        //     else if(user){
        //         console.log("teacher found")
        //         res.json({user});
        //     }
        //     else{
        //         console.log("teacher not found")
        //         res.json({message:"teacher not found"});
        //     }
        // });
    }
    else{
        var stud = await Student.findOne({mail:mail, password:password}).exec();
        
        // console.log(stud.name)


            if(stud){
                console.log("student found")
                res.json({stud});
            }
            else{
                console.log("student not found")
                res.json({message:"student not found"});
            }


        // stud.then(function (err,user){
        //     if(err){
        //         console.log(err)
        //     }
        //     else if(user){
        //         console.log("student found")
        //         res.json({user});
        //     }
        //     else{
        //         console.log("student not found")
        //         res.json({message:"student not found"});
        //     }
        // });
    }
      

})




//profilePage



//feed
<<<<<<< HEAD
// app.post("/feed", (req,res)=>{
//     const teach =  Question.find({}).exec();
//     console.log(teach);
//     teach.then((result)=>{
//         // console.log(result)
//       res.json(result);
//     })
// })
app.get("/feed", (req,res)=>{
    const teach =  Question.find({}).exec();
    // console.log(teach);
    teach.then((result)=>{
        // console.log(result)
      res.json(result);
    })
})

=======
>>>>>>> origin/main



//TeacherList

<<<<<<< HEAD
// app.post("/teacherslist",async (req,res)=>{
//     const teach = await Teacher.find({}).exec();
//     console.log(teach);
//       res.json(teach);
// })
app.get("/teacherslist",(req,res)=>{
    const teach = Teacher.find({}).exec();
    console.log(teach);
    teach.then((result)=>{
        res.json(result);
        }
    )
=======
app.post("/teacherslist",async (req,res)=>{
    const teach = await Teacher.find({}).exec();
    console.log(teach);
      res.json(teach);
>>>>>>> origin/main
})

//AskQuestion


// app.get("/ask",(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })
app.post("/ask",(req,res)=>{
<<<<<<< HEAD
    // function newa(){
    //     res.redirect("/ask");
    // }
    const {question,tags} = req.body;
    console.log(question,tags);

    try {
=======
    function newa(){
        res.redirect("/ask");
    }
    const {question,tags} = req.body;
    console.log(question,tags);

>>>>>>> origin/main
    const new_que = new Question({
        question:question,
        solved:false,
        tags:tags
    })
    new_que.save();

<<<<<<< HEAD
    res.status(200).json({ success: true, message: 'Data added successfully', data: new_que });
} catch (error) {
  res.status(500).json({ success: false, message: 'Failed to add data', error: error.message });
}

    // setTimeout(newa,2000)
})

app.post("/answer",(req,res)=>{
    const {ques,ans} = req.body;
    console.log(ques,ans);


    const question = Question.findOneAndUpdate({question:ques},{answer:ans,solved:true}).exec();
        question.then((result)=>{
            res.json(result);
            }
        )

})


// router.post('/addData', async (req, res) => {
//     try {
//       // Add data to Mongoose model
//       const newData = new MyModel(req.body);
//       await newData.save();
  
//       // Send JSON response to React frontend
//       res.status(200).json({ success: true, message: 'Data added successfully', data: newData });
//     } catch (error) {
//       res.status(500).json({ success: false, message: 'Failed to add data', error: error.message });
//     }
//   });



=======
    setTimeout(newa,2000)
})

>>>>>>> origin/main

app.listen(5000, ()=>{
    console.log("Server is running in 5000");
})