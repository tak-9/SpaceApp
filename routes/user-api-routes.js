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
        req.logout();
        res.send({});
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



    //     console.log("hello from signup" + req.body.username)
    //     db.User.create({
    //         username: req.body.username,
    //         password: req.body.password
    //     })
    //         .then(function () {
    //             res.send({
    //                 user: {
    //                     id: user.id,
    //                     username: user.username,
    //                     success: true,
    //                     mes: 'user account created'
    //                 }
    //             });
    //         })
    //         .catch(function (err) {
    //             res.status(401).json(err);
    //         });
    // })

}