const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());


routes.get("/", (req,resp) =>{
    resp.render('index')
})

routes.get("/contact",(req,resp) =>
{
    resp.render("contact")
})

routes.post('/contact', (req, res) => {
    const { contact_no, email, query } = req.body;
  
    // Insert the form data into the database
    const sql = 'INSERT INTO contact ( contact_no, email, query) VALUES (?, ?, ?)';
    con.query(sql, [ contact_no, email, query], (err, result) => {
      if (err) {
        console.error('Error inserting data: ' + err);
        res.status(500).json({ error: 'Error submitting the form' });
      } else {
        console.log('Data inserted: ' + result.insertId);
        res.render('process_contact_form')
      }
        
    });
    
  });

  routes.get('/about', (req,resp) =>{
     resp.render('about')

  });

  routes.get('/games' , (req,resp) =>{
    resp.render('games')
  });

  routes.get('/sports' , (req, resp) =>{
    resp.render('sports')
  });

  routes.get('/sea_games' , (req,resp) =>{
    resp.render('sea_games')
  });

  routes.get('/music' , (req,resp) =>{
    resp.render('music')
  });

  routes.get('/arts' , (req,resp) =>{
    resp.render('arts')
  });

  routes.get('/modeling' , (req,resp) =>{
    resp.render('modeling')
  });

  routes.get('/acting' , (req,resp) =>{
    resp.render('acting')
  });

  routes.get('/photography' , (req,resp) =>{
    resp.render('photography')
  });

  routes.get('/painting' , (req,resp) =>{
    resp.render('painting')
  });
  

module.exports= routes