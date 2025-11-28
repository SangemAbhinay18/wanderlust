const express = require("express");
const router = express.Router();

//users
router.get("/",(req,res)=>{
    res.send("get for users");
   });
   
   router.get("/:id",(req,res) => {
       res.send("GET for users id");
   });
   
   router.post("/",(req,res) => {
       res.send("post for users");
   });
   
   router.delete("/:id",(req,res) => {
       res.send("delete");
   });

   module.exports = router;