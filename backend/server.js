var express = require("express");
var app = express();

const Storage = require("node-persist");
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
var jsonParser = bodyParser.json();

app.post("/addtask", jsonParser, async (req, res)=>{
    const{task}=req.body;
    console.log(req.body);
    const tasks= await Storage.setItem(task, {task});
    res.send("task send successfully");
})
app.get("/alltask",async (req,res)=>{
    const task = await Storage.values();
    res.json(task);
})

app.listen(5000, async()=>{
    await Storage.init()
    await Storage.clear()
    console.log("server started");
})