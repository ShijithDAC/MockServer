
const express = require('express');
/*eslint-disable */
const router = express.Router();
const env = require("../config/config").env;
const redis = require("redis");


if(env === "dev"){
    require('dotenv').config({path:__dirname+"/../bin/development.env"});
}
if(env === "prod"){
    require('dotenv').config({path:__dirname+"/../bin/production.env"});
}
/*eslint-enable */

// Enabling the Redis Cache server
const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);

client.on('connect',() => {
    console.log(`connected to redis server`);
});
client.on('error',err => {
    console.log(`Error: ${err}`);
});

/*
Client.set('framework','AngularJS',(err,reply) => {
    if (err) {
        throw err;
    }
    console.log(reply);
});
client.get('framework',(err,reply) => {
    if (err) {
        throw err;
    }
    console.log(reply);
});
*/


/* GET home page. */
/*  The enabling more than 1KB response will be cached */
router.get('/',(req,res,next)=> {
    /* eslint-disable */
    const key = "Redis Key1";
    client.hgetall(key,(err,values) => {
        if(err){
            throw err;
        }
        
        if(values){
            return res.json({"cached_data":values});
        }
        let val = [{
            "_id": "5acf727ac36be219e7a690d9",
            "index": 0,
            "guid": "a8575736-b8d8-415d-9843-9185e69472aa",
            "isActive": false,
            "balance": "$1,753.49",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "brown",
            "name": "Watkins Hopper",
            "gender": "male",
            "company": "XIXAN",
            "email": "watkinshopper@xixan.com",
            "phone": "+1 (997) 498-2816",
            "address": "770 Putnam Avenue, Shelby, Ohio, 1886",
            "about": "Ut Lorem et aliqua exercitation incididunt exercitation adipisicing Lorem. Aliquip ad consectetur magna consectetur ea. Mollit et nulla sit est aliqua. Qui consequat eu minim elit laborum ad nulla nostrud do ullamco nostrud laborum aute do.\r\n",
            "registered": "2016-08-13T08:08:30 -06:-30",
            "latitude": -21.734777,
            "longitude": 89.359018,
            "greeting": "Hello, Watkins Hopper! You have 1 unread messages.",
            "favoriteFruit": "strawberry",
            "a":"b",
            "c":"d",
            "e":"f",
            "g":"h",
            "i":"j",
            "k":"l"
          },{"name":"Shijith"}] 
        for( let i in val){
            client.HMSET(key,val[i]);
        }
        // client.hmset(key,val,(err,result)=>{
        //     if(err){
        //         throw err
        //     }
            client.expire(key,10);
            return res.json({"data":val})
        // })

    });

    
    
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