const express = require('express');
const router = express.Router();
const states = require('./Database/states.json') //Module for accessing Data from JSON database



router.get('/',(req,res)=>{
    
        res.send(states);
        res.end();
})

//fetching Data by perticular id
//Handeling GET request
router.get('/:id',(req,res)=>{

    const state = states.filter(c=>c.id===String(req.params.id));  //?????????????????
        
    if (!state) {
        
        res.status(404).send(`Data not found on this route`);
    }else{

        res.send(state);
    }
})

//Posting data 
//Handeling Post request
router.post('/',(req,res)=>{

    if (!req.body.name || req.body.name.length < 3) {
        
        res.status(400).send(`Bad request ${400}, Name should be minimum 3 characters`);
        res.end();
    } 
    else {

        const state = {

        id:states.length+1,
        name:req.body.name,
        state:req.body.state
        }
        states.push(state);
        // res.json(states)
        res.redirect('/')
        
    }  
})

//Update the existing json Data 
//Handeling Update Request
router.put('/:id',(req,res)=>{
        
    const state = states.filter(c=>c.id===String(req.params.id));  //???????????????????

    if (!state) {
        
        res.status(404).send(`Data not found on this id`);

    }else{

        state.name = req.body.name; //updating Name
        state.state=req.body.state; //updating state name
        res.send(state);

    }
})

//Handeling delete Requests
router.delete('/:id',(req,res)=>{
    const state = states.filter(c=>c.id===String(req.params.id)); //??????????????????????
    
    if (!state) {

        res.status(404).send(`Data not found on this ${this.id}`)
        
    } else {

        const index = states.indexOf(state);
        states.splice(index,1);

        res.send(`deleted successfully`);
    
    } 
})

module.exports = router;