const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const https = require("https")

const app=express()

app.set('views',__dirname+"/views")
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))


app.get("/",function(req,res){

    res.render("home.ejs")
})
const blogItems=[]
app.get("/blog",function(req,res){
    
    res.render("blog",{blogItems:blogItems})
})
app.post("/blog",function(req,res){
    res.redirect("/")
})
app.listen(3000, function () {
    console.log("Server started on port 3000")
})


module.exports=app