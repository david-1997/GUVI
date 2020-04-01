const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoClient = require('mongodb');
const url = "mongodb://localhost:27017"
const bcrypt = require('bcryptjs');
const saltrounds = 10;
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function authenticate(req, res, next) {
    let header = req.header('Authorization')
    if (header == undefined) {
        res.status(401).json({
            message: "unauthorized"
        });
    }
    else {
        var decode = jwt.verify(header, 'privatekey');
        if (decode !== undefined) {
            req.email = decode.email          
            next();
        }
        else {
            res.status('401').json({
                message: "Unauthorized"
            });
        }
    }
}

app.post("/register", function (req, res) {
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        var newData = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        bcrypt.genSalt(saltrounds, function (err, salt) {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                if (err) throw err;
                newData.password = hash;
                db.collection("userdetails").insertOne(newData, function (err, result) {
                    if (err) throw err;
                    client.close();
                    res.json({
                        message: "User registered"
                    })
                })
            })
        })
    })
})

app.post("/login", function (req, res) {
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        db.collection("users").findOne({ email: req.body.email }, function (err, userData) {
            if (err) throw err;
            bcrypt.compare(req.body.password, userData.password, function (err, result) {
                if (result) {
                    var jwtToken = jwt.sign({ email: req.body.email }, 'privatekey')
                    res.json({
                        message: "success",
                        token: jwtToken,
                        userid:userData._id
                    })
                }
                else {
                    res.json({
                        message: "Login Failed",
                    })
                }
            })
        })
    })
})

app.get("/dashboard", authenticate, function (req, res) {  
    res.json({
        message: "protected",
        email:req.email
    })
})

app.get('/user/:id', function (req, res) {
 var userid=req.params.id
 var ObjectId = require('mongodb').ObjectID;
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        var userData = db.collection("users").findOne({},{_id:ObjectId(userid)});
        userData.then(function (data) {
            client.close();
            res.json(data)
        })
            .catch(function (err) {
                client.close();
                res.json({
                    message: "error"
                })
            })
    });
});

app.post("/insert", function (req, res) {
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        var newData = {
            product: req.body.product,
            quantity: req.body.quantity
        }
        db.collection("UserProducts").insertOne(newData, function (err, result) {
            if (err) throw err;
            client.close();
            res.json({
                messsage: "Product added"
            })
        })
    })
});

app.get("/display", function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        var cartItems = db.collection("UserProducts").find().toArray();
        cartItems.then(function (data) {
            client.close();
            res.json(data);
        })
            .catch(function (err) {
                client.close();
                res.json({
                    message: "error"
                })
            })
    });
});

app.delete("/delete/:id", function (req, res) {
    let pid=req.params.id
    var ObjectId = require('mongodb').ObjectID;
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        db.collection("UserProducts").deleteOne({ _id: ObjectId(pdtid) }, function (err, result) {
            if (err) throw err;
            client.close();
            res.json({
                message: "Product deleted"
            })
        });
    });
});

app.put("/update/:id", function (req, res) {
    let pid=req.params.id
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("DB");
        var ObjectId = require('mongodb').ObjectID;
        db.collection("UserProducts").updateOne(
            { _id: ObjectId(pid) },
            { $set: {product:req.body.product,quantity: req.body.quantity} }, function (err, result) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "Product updated"
                })
            });
    });
});

app.get("/logout", function (req, res) {
    mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db("DB");
        db.collection("UserProducts").drop(function(err,result){
            if(err) throw err;
            client.close();
            res.json({
                message:"Logged out successfully"
            })
        })
    })
});



app.listen(3000, function () {
    console.log("Port is running in 3000")
})