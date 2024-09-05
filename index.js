const express = require('express');

const app = express();
app.use(express.json());

app.get('/' , (req , res ) =>{
    res.send("Hello, Express!");
});

app.get('/about' , (req , res ) =>{
    res.send("this is about page");
});

app.post('/data' , (req , res ) =>{
    console.log(req.body);
    res.send("data recevied");
});

const users =[
    {id:1 , name : "user1"},
    {id:2 , name : "user2"}
]

app.post("/users" , (req, res) =>{
    const newUser = req.body;
    const userId = users.length + 1;
    newUser.Id = userId;

    users.push(newUser);
    res.status(201).json({message : "user created successfully" , user : newUser});
})

app.get('/users' , (req , res ) =>{
    res.status(200).json({data : users});
});

app.delete("/users/:id" , (req, res) =>{
    const userId = req.params.id;
    console.log("user Id" , userId);

    const userIndex = users.findIndex((user) => user.id == userId);
    if(userIndex == -1){
        return res.status(404).json({message: "user not found"});
    } 
    users.splice(userIndex , 1);
    res.json({message: "user deleted successfully"})
})

const port = 3000;
 app.listen(port , ()=>{
    console.log(`server is listening on ${port}`);
 })
