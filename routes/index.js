const express = require('express');
/*eslint-disable */
const router = express.Router();
/*eslint-enable */

/* GET home page. */
/*  The enabling more than 1KB response will be cached */
router.get('/',(req,res,next)=> {
    /* eslint-disable */
    let val = [
        {
          "_id": "5ace0a1614fa885c7afc805a",
          "index": 0,
          "guid": "e580210c-0542-41a0-82fa-af7006eb8893",
          "isActive": true,
          "balance": "$2,548.34",
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "green",
          "name": "Jolene Conway",
          "gender": "female",
          "company": "VIDTO",
          "email": "joleneconway@vidto.com",
          "phone": "+1 (879) 532-3307",
          "address": "709 Noel Avenue, Orason, West Virginia, 2635",
          "about": "Incididunt culpa ut nostrud consectetur tempor excepteur occaecat excepteur minim tempor reprehenderit deserunt et. Excepteur in quis quis quis laborum tempor cupidatat dolore exercitation duis mollit. Occaecat nulla excepteur voluptate laborum. Culpa qui duis sunt sunt do sint dolore nulla dolor laborum. Fugiat nostrud reprehenderit sunt labore nulla nisi ea quis dolore tempor pariatur tempor qui. Eiusmod veniam magna commodo duis aute proident dolor amet ipsum laborum minim anim sit nisi.\r\n",
          "registered": "2018-01-27T03:23:52 -06:-30",
          "latitude": -13.607725,
          "longitude": -124.82342,
          "tags": [
            "dolor",
            "voluptate",
            "id",
            "incididunt",
            "irure",
            "ullamco",
            "aliquip"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Owens Mejia"
            },
            {
              "id": 1,
              "name": "Bullock Mcintosh"
            },
            {
              "id": 2,
              "name": "Angelia George"
            }
          ],
          "greeting": "Hello, Jolene Conway! You have 9 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5ace0a16e8249fd51d5dced1",
          "index": 1,
          "guid": "49d9d59e-b44c-4b06-a1e0-7b743b15fc51",
          "isActive": false,
          "balance": "$1,898.23",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Williams Koch",
          "gender": "male",
          "company": "IMAGEFLOW",
          "email": "williamskoch@imageflow.com",
          "phone": "+1 (841) 444-3713",
          "address": "964 Elizabeth Place, Bowden, Virginia, 3832",
          "about": "Laborum adipisicing anim elit eiusmod. Fugiat sit dolor esse ad tempor ipsum culpa aliquip in est aute ullamco. Nostrud enim excepteur irure deserunt laborum ut nisi.\r\n",
          "registered": "2014-12-03T12:46:01 -06:-30",
          "latitude": -41.61538,
          "longitude": -2.581382,
          "tags": [
            "qui",
            "elit",
            "proident",
            "minim",
            "enim",
            "et",
            "esse"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Stuart Bray"
            },
            {
              "id": 1,
              "name": "Hunt Nash"
            },
            {
              "id": 2,
              "name": "Ursula Weber"
            }
          ],
          "greeting": "Hello, Williams Koch! You have 8 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5ace0a16341800cfac04ca3d",
          "index": 2,
          "guid": "767dedaa-d6af-4164-aebe-269a41c46e80",
          "isActive": false,
          "balance": "$2,954.78",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Deanna Rasmussen",
          "gender": "female",
          "company": "KEENGEN",
          "email": "deannarasmussen@keengen.com",
          "phone": "+1 (877) 403-2719",
          "address": "811 Corbin Place, Golconda, Idaho, 7100",
          "about": "Ut laboris reprehenderit pariatur ad eiusmod sunt elit consequat ut. Consectetur eu officia ut irure non Lorem id. Tempor laborum ut culpa voluptate laborum elit nulla labore. Proident id mollit dolore quis nostrud reprehenderit pariatur ex id nostrud aliqua.\r\n",
          "registered": "2016-01-14T04:38:20 -06:-30",
          "latitude": 84.785602,
          "longitude": 131.613087,
          "tags": [
            "deserunt",
            "commodo",
            "ad",
            "nisi",
            "culpa",
            "culpa",
            "nostrud"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Vicki Wilkins"
            },
            {
              "id": 1,
              "name": "Erin Mueller"
            },
            {
              "id": 2,
              "name": "Petersen Lloyd"
            }
          ],
          "greeting": "Hello, Deanna Rasmussen! You have 8 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5ace0a16bae6778d5d0b6b49",
          "index": 3,
          "guid": "ec25eb6b-0692-45a2-9dbe-54445e2dc925",
          "isActive": false,
          "balance": "$2,003.10",
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "green",
          "name": "Jimmie Madden",
          "gender": "female",
          "company": "SENMAO",
          "email": "jimmiemadden@senmao.com",
          "phone": "+1 (983) 531-3628",
          "address": "636 Glenwood Road, Grayhawk, Nevada, 3677",
          "about": "In magna labore ullamco ipsum cillum dolor esse irure cillum. In adipisicing elit occaecat occaecat consequat elit cupidatat aute duis veniam ipsum tempor. Minim tempor id ex cupidatat ullamco ipsum anim magna ex dolore.\r\n",
          "registered": "2014-03-21T09:04:18 -06:-30",
          "latitude": 56.192234,
          "longitude": 96.871776,
          "tags": [
            "eu",
            "ut",
            "id",
            "officia",
            "et",
            "laboris",
            "sint"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Katelyn Harrington"
            },
            {
              "id": 1,
              "name": "Ellen Conrad"
            },
            {
              "id": 2,
              "name": "Julie Palmer"
            }
          ],
          "greeting": "Hello, Jimmie Madden! You have 7 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5ace0a165bdd2bf72efc76fc",
          "index": 4,
          "guid": "524999b6-765a-4ab8-8132-9d0f318156f0",
          "isActive": false,
          "balance": "$3,358.97",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "brown",
          "name": "Marta Nichols",
          "gender": "female",
          "company": "STRALOY",
          "email": "martanichols@straloy.com",
          "phone": "+1 (910) 480-2350",
          "address": "938 Holt Court, Greer, Wisconsin, 7414",
          "about": "Adipisicing commodo et eu labore veniam do velit. Cupidatat culpa voluptate sunt elit dolor magna do labore. Do qui commodo esse magna occaecat esse. Officia veniam ut duis id fugiat ea cillum fugiat consectetur velit nostrud ipsum reprehenderit ipsum.\r\n",
          "registered": "2017-03-19T03:02:56 -06:-30",
          "latitude": -31.192796,
          "longitude": 125.457981,
          "tags": [
            "nulla",
            "quis",
            "irure",
            "nisi",
            "laborum",
            "occaecat",
            "culpa"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Tammie Olson"
            },
            {
              "id": 1,
              "name": "Deana Bird"
            },
            {
              "id": 2,
              "name": "Twila Hyde"
            }
          ],
          "greeting": "Hello, Marta Nichols! You have 10 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5ace0a165bcf375bee7def90",
          "index": 5,
          "guid": "26ae7aaa-f47e-4df5-a927-e76c656d0f51",
          "isActive": true,
          "balance": "$1,594.79",
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "brown",
          "name": "Juanita Fry",
          "gender": "female",
          "company": "EMPIRICA",
          "email": "juanitafry@empirica.com",
          "phone": "+1 (825) 474-3829",
          "address": "349 Dictum Court, Faywood, Ohio, 7341",
          "about": "Consequat Lorem sint mollit cillum adipisicing. Tempor do pariatur tempor fugiat aliquip. Officia et ex do veniam amet elit mollit adipisicing. Lorem exercitation fugiat reprehenderit ipsum cupidatat officia dolore. Irure fugiat eu id quis ea mollit et exercitation irure ipsum non.\r\n",
          "registered": "2014-01-03T08:27:13 -06:-30",
          "latitude": 37.84315,
          "longitude": -81.73727,
          "tags": [
            "irure",
            "non",
            "eu",
            "mollit",
            "irure",
            "dolor",
            "irure"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Whitney Chavez"
            },
            {
              "id": 1,
              "name": "Alexander Pugh"
            },
            {
              "id": 2,
              "name": "Dianne Navarro"
            }
          ],
          "greeting": "Hello, Juanita Fry! You have 4 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5ace0a16b7e23aac252e3395",
          "index": 6,
          "guid": "2f0f23c1-93e2-467d-b625-81e4c023d74d",
          "isActive": false,
          "balance": "$2,319.14",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Guzman Orr",
          "gender": "male",
          "company": "INSURESYS",
          "email": "guzmanorr@insuresys.com",
          "phone": "+1 (838) 529-3849",
          "address": "521 Monroe Street, Martinsville, Vermont, 8491",
          "about": "Laborum proident anim sit fugiat ex eu cupidatat reprehenderit. Esse sint aliquip dolor qui tempor. Dolor irure non ullamco non quis ea officia esse sint amet tempor velit sunt.\r\n",
          "registered": "2016-11-19T05:56:54 -06:-30",
          "latitude": 0.951581,
          "longitude": 82.967166,
          "tags": [
            "et",
            "ad",
            "exercitation",
            "incididunt",
            "in",
            "dolore",
            "in"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Battle Wise"
            },
            {
              "id": 1,
              "name": "Melendez Solomon"
            },
            {
              "id": 2,
              "name": "Althea Richard"
            }
          ],
          "greeting": "Hello, Guzman Orr! You have 3 unread messages.",
          "favoriteFruit": "banana"
        }]
    res.json({"data": val});
    
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