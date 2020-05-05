const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let todo_items=[];
let work_items=[];
let day="";
app.get("/",function(req,res)
{
  day= date.getDate();
  console.log(date.getDay());
  
  res.render("list",{today:day,todo:todo_items});
  
});

app.post("/",function(req,res)
{
  var  todo_item=req.body.todoItem;
   todo_items.push(todo_item);
    
    res.redirect("/");
});
app.get("/work",function(req,res)
{
  day="Work List"
  res.render("work",{today:day,todo:work_items});
});
app.post("/work",function(req,res)
{
  var  todo_item=req.body.todoItem; 
  work_items.push(todo_item);
  console.log(req.body);
    
  res.redirect("/work");
});

app.listen("3000",function()
{
  console.log("working at port 3000");
});