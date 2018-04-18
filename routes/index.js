
const express = require('express');
/*eslint-disable */
const router = express.Router();
const env = require("../config/config").env;
const logs = require("../config/config").logging();
const redis = require("redis");


if(env === "dev"){
    require('dotenv').config({path:__dirname+"/../bin/development.env"});
}
if(env === "prod"){
    require('dotenv').config({path:__dirname+"/../bin/production.env"});
}
/*eslint-enable */

// Enabling the Redis Cache server
/* eslint-disable */
const REDIS_PORT = process.env.REDIS_PORT;
/* eslint-enable */
const client = redis.createClient(REDIS_PORT);

client.on('connect',() => {
    console.log(`connected to redis server`);
    logs.log("info",`Server is Connected to Redis Server in ${REDIS_PORT}`);
});
client.on('error',err => {
    console.log(`Error: ${err}`);
    logs.log("error",`Server unable to connect Redis Server in ${REDIS_PORT}`);
});

/* GET home page. */
/*  The enabling more than 1KB response will be cached */
router.get('/',(req,res,next) => {
    /* eslint-disable */
    if(req.session.username === "undefined" || !(req.session.username)){
        logs.log("warn","Session data is not available and will be generated once you login in /mock");
        return res.json({"message":" Please try hitting POST /mock with credentials"});

    }
    console.log("hello");
    logs.log("info","API hit for GET /");
    const key = "Redis_Key1";
    client.hgetall(key,(err,values) => {
        if(err){
            throw err;
        }
        
        if(values){
            return res.json({"cached_data":values});
        }
        let val = [
            {
                "_id": "5ad0568add32ff2cb0436f34",
                "index": 0,
                "guid": "14c4278a-4d74-4126-bf46-3dafa19a5059",
                "isActive": true,
                "balance": "$1,281.76",
                "picture": "http://placehold.it/32x32",
                "age": 25,
                "eyeColor": "blue",
                "name": "Ellis Cole",
                "gender": "male",
                "company": "INSURETY",
                "email": "elliscole@insurety.com",
                "phone": "+1 (819) 523-3542",
                "address": "788 Monroe Street, Lopezo, Arizona, 7407",
                "about": "Labore cupidatat fugiat irure ea. Aliqua eiusmod proident eu sit magna est excepteur cupidatat labore minim dolor. Cillum pariatur exercitation officia consectetur fugiat elit irure exercitation adipisicing proident incididunt nulla fugiat eiusmod. Magna tempor deserunt exercitation non nostrud non ad dolore ex incididunt ut dolor exercitation. Enim amet esse tempor adipisicing non consectetur deserunt. Anim esse deserunt non ullamco commodo aliqua fugiat dolor reprehenderit consequat reprehenderit fugiat.\r\n",
                "registered": "2016-03-15T03:22:56 -06:-30",
                "latitude": 57.355001,
                "longitude": -133.741212,
                "greeting": "Hello, Ellis Cole! You have 6 unread messages.",
                "favoriteFruit": "apple"
            },
            {
                "a": "848 Crooke Avenue, Alamo, District Of Columbia, 3045",
                "b": "Lorem est commodo laborum adipisicing velit excepteur mollit aliquip. Elit minim ea officia velit minim consequat consectetur eiusmod minim occaecat cillum. Laborum eiusmod incididunt duis duis consectetur enim ad duis labore ea enim ea occaecat officia.\r\n",
                "c": "2014-02-01T02:51:14 -06:-30",
                "d": 18.345426,
                "longitude1": 143.128176,
                "greeting": "Hello, Horton Santos! You have 1 unread messages.",
                "favoriteFruit": "apple"
            }
        ] 
        for( let i in val){
            client.HMSET(key,val[i]);
        }
        client.expire(key,10);
        return res.json({"data":val});

    });
         
});

router.post("/mock",(req,res,next)=>{
    logs.log("info","API hit for POST /mock");
    logs.log("info","Here we need to enter the credentials to save the session");
    if(req.session.username){
        // here you can check for the password exist in DB (NOSQL or RDB)
        // if the correct password exists
        logs.log("info","Session data is available and will be directed to /");
        return res.json({"message":" Please try hitting GET /"});
    }
    const user = req.body.username;
    const pass = req.body.password;
    req.session.username = user;
    console.log(req.session.username)
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

router.get("/logout",(req,res,next)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    });
    
});

module.exports = router;