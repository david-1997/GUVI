const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors')
const app = express();
const MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017';
const saltRounds = 10;
app.use(cors());
app.use(bodyparser.json());
app.post('/register', function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        var db = client.db("DB");
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                db.collection('login').insertOne({ email: req.body.email, password: hash }, (err, result) => {
                    if (err) throw err;
                    client.close();
                    res.json({
                        message: "success"
                    })
                })
            })
        })
    })
})
app.listen(3030, function () {
    console.log("Port is running on 3030")
});
