const express =  require('express');
const hbs = require("hbs")
const bodyParser = require('body-parser')
const routes = require('./routes/main')
const app =express()
const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});
con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log("db connected succesfully");
    }
});
// con.query("select * from user",(err,result) =>{
// console.log("result",result);
// })



app.use("",routes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static('src'))
app.set('view engine','hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")



app.listen(process.env.PORT | 6500, () =>
{
    console.log("server started");
})