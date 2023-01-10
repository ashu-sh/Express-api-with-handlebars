const express = require('express');
const port = 3000;
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const router_main = require('./operation')
const handlebars = require('express-handlebars');
const states = require('./Database/states.json');



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','handlebars');
app.engine('handlebars',handlebars.engine({layoutsDir:`${__dirname}/views/layouts`}))




//Route Handeler
app.use(express.json()) 
app.use('/api',router_main)


app.get('/',(req,res)=>{

  res.render('main',{layout:'index',states})

})


app.listen(port,(req,res)=>{

    console.log(`Running on port ${port}`);
})