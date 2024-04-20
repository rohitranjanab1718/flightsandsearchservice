const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
console.log(PORT);
const setupAndStartServer = async() =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`)
    })
}

setupAndStartServer();