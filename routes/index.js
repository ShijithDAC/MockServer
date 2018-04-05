const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req,res,next)=> {

  res.json({"message":"Hello, Welcome to MOCK Server"});

});

router.post("/mock",(req,res,next)=>{
    
  const user = req.body.username;
  const pass = req.body.password;

  if (user === "MYusername" && pass === "MYpassword")
  {

      console.log("Success");
      res.status(200);
      res.json({"message": "You are Authorised"});
  }
  else
  {
      console.log("Failure");
      res.status(401);
      res.json({"message": "UnAuthorised"});
  }

});


module.exports = router;
