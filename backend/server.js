const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require('mongoose')
const app = express();
var assert = require('assert');



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



//TeacherList

app.post("/teacherslist",async (req,res)=>{
    const teach = await Teacher.find({}).exec();
    console.log(teach);
      res.json(teach);
})

//AskQuestion


// app.get("/ask",(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })
app.post("/ask",(req,res)=>{
    function newa(){
        res.redirect("/ask");
    }
    const {question,tags} = req.body;
    console.log(question,tags);

    const new_que = new Question({
        question:question,
        solved:false,
        tags:tags
    })
    new_que.save();

    setTimeout(newa,2000)
})


app.listen(5000, ()=>{
    console.log("Server is running in 5000");
})