'Access-Control-Allow-Origin'
const express = require('express');
const cors = require('cors');
const myapp = express();
const myroute = require('./routers/routes');
require('dotenv').config();
const port = process.env.PORT || 8900
require('./database/connect');



myapp.use(express.json());
myapp.use(cors());
myapp.use(myroute);






myapp.listen(port,()=>{
    console.log(`server is running at port no: ${port}`);
})

