const mongoose = require('mongoose');
const DBurl = process.env.DATABASE

mongoose.connect(DBurl).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})



