const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const https = require("https")

const app=express()

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


app.get("/",function(req,res){

    res.render("home")
})
app.get("/blog",function(req,res){
    res.render("blog")
})

app.listen(3000, function () {
    console.log("Server started on port 3000")
})