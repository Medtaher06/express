import express from "express";

const GlobalRoute = express.Router();

const ListUsers = [
    {name:'ahmed' , email:'', address:''},
    {name:'ala' , email:'', address:''},
    {name:'tahar' , email:'', address:''},

]
const data = 'Hello ';



GlobalRoute.get('/',(req, res) => {

    res.render('../views/pages/Home',{
        users : ListUsers,
        simpleText: data,
    });

 

});
GlobalRoute.get('/About',(req, res) => {

    res.render('../views/pages/About');
    
   });


export default GlobalRoute; 