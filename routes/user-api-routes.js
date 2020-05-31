var bcrypt = require("bcryptjs");
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticatedAPI = require("../config/middleware/isAuthenticatedAPI");

module.exports = function (app) {

    // https://stackoverflow.com/questions/57293115/passport-deserializeuser-not-being-called

    app.post('/api/login', (req, res, next) => {
        passport.authenticate('local', (err, theUser, failureDetails) => {
            if (err) {
                res.status(500).json({ message: 'Something went wrong authenticating user' });
                return;
            }

            if (!theUser) {
                console.log("!theUser", err, theUser, failureDetails)
                res.status(401).json(failureDetails);
                return;
            }

            // save user in session
            req.login(theUser, (err) => {
                if (err) {
                    res.status(500).json({ message: 'Session save went bad.' });
                    return;
                }
                res.send(req.user);
                //res.status(200).json({errors: false, user: theUser});
            });
        })(req, res, next);
    });

    app.get("/api/logout", function (req, res) {
        console.log("logout successful")
        req.logout();
        res.send({
            success: true,
            mes: 'user logged out'
        });
        
    });

    app.post("/api/signup", function (req, res) {


        if (!req.body.username || !req.body.password) {
            res.status(400).json({
                message: 'Please enter all fields.'
            })
        }

        else {

            console.log("hello from signup" + req.body.username)

            db.User.create({
                username: req.body.username,
                password: req.body.password
            })


                .then(function (user) {
                    res.send({
                        user: {
                            id: user.id,
                            username: user.username,
                            success: true,
                            mes: 'user account created'
                        }
                    });
                })

                .catch(function (err) {
                    res.status(401).json(err);
                });

        }

    })


    app.post("/api/create", async function (req, res) {
        console.log("POST /api/create");
        var username = req.body.username;
        var taskname = req.body.taskname;
        var category = req.body.category;
        var reoccurring = req.body.reoccurring;
        var completed = false;
        getUserId(username)
        .then( (userId) => {
            db.Tasks.create({
                UserId: userId,
                taskname: taskname,
                category: category,
                reoccurring: reoccurring,
                completed: completed
            })
            .then((data) => {
                res.status(201).json({});
            })
            .catch(function (err) {
                console.log("catch create", err);
                res.status(500).json({ "message": "Error in creating." });
            });
        })
        .catch( (err) => {
            console.log("catch getUserId", err);
            res.status(500).json({ "message": "Error in gettingUserId." });

        })
    })

    app.get("/api/all/:username", function (req, res) {    
        var username = req.params.username;
        console.log(username);

        db.Tasks.findAll({
            include:[{
                model: db.User, 
                where: { username: username }
            }]    
        })
        .then(function (results) {
            console.log("Reached api get!");
            res.json(results);
        })
        .catch(function (err) {
            console.log("catch get", err);
            res.status(500).json({ "message": "Error in getting." });
        });
    });


}

// Parameter: username is username in MySQL
// Returns: Corresponding UserId in MySQL 
function getUserId(username){
    return new Promise( (resolve, reject) => {
        db.User.findOne({
            where: {username: username}
        })
        .then((dbResult)=>{
            console.log(dbResult);
            console.log(`ID for ${username} is ${dbResult.dataValues.id}.`);
            resolve(dbResult.dataValues.id);
        })
        .catch((err)=>{
            console.log("err", err);
            reject();
        })    
    } )  

}