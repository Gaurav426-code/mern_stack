

const express = require('express');
const myapp = express.Router();
const mypattern = require('../schema/myschema');



myapp.get("/",(req,res)=>{
    res.send("welcome to express");
});

myapp.get("/about",(req,res)=>{
    res.send("welcome to express about");
});


myapp.get("/contact",(req,res)=>{
    res.send("this is external route path");
});



myapp.get("/alldata",async(req,res)=>{
    const alldatas = await mypattern.find();
    res.send(alldatas);
});


myapp.post("/createdata",async(req,res)=>{
    const {fullname,email,dob,mobile,gender,course,pic,payment,address,role} = req.body;
    const adduser = new mypattern({
        fullname,email,dob,mobile,gender,course,pic,payment,address,role
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
});


myapp.delete("/deleteuser/:id", async (req, res) => {
    const { id } = req.params;
    const del = await mypattern.findByIdAndDelete({"_id": id });
    res.status(256).json(del);
});





myapp.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    if (email === "" || pass === "") {
        res.status(412).json({ message: "error email phone", status: 420 });
    }                                                                                                                       
    else {
        const logindetails = await mypattern.findOne({ email: email });
        
        if (logindetails) {
            if (logindetails.email === email && logindetails.mobile === pass) {
                res.status(200).json({ message: "welcome1", status: 220 ,logindata:logindetails});
            }
            else {
                res.status(300).json({ message: "email and password don't match", status: 421 });
            }
        }
        else {
            res.status(300).json({ message: "error", status: 620 });
        }

    }
});








module.exports = myapp;



