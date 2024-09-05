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



const port = 3000;
 app.listen(port , ()=>{
    console.log(`server is listening on ${port}`);
 })
