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
                console.log("!theUser",err, theUser, failureDetails)
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
        req.logout();
        res.send({});
    });

    app.post("/api/signup", async function (req, res) {
        console.log("POST /api/signup", req);
        var user = req.body.user;

        await db.User.create(student)
        .then((data) => {
            res.status(201).json({});
        })
        .catch(function (err) {
            console.log("catch create", err);
            res.status(500).json({ "message": "Error in creating." });
        });
    })

}