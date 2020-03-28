const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors')
const app = express();
const MongoClient = require('mongodb');
const url ='mongodb://localhost:27017';
app.use(cors());
app.use(bodyparser.json())
app.post('/users', function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db = client.db("DB");
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err) throw err;
            client.close();
            res.send(result)
        })
    })
})
app.listen(3000, function () {
    console.log("Port is running on 3000")
});