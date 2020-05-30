var db = require("../models");
//createUsers();

async function createUsers() {
    console.log("********* seed.js createUsers *************")

    await db.User.create({
        username: "lisa@hotmail.com",
        password: "123",
    });
       
    await db.User.create({
        username: "rita",
        password: "123",
    });

    await db.User.create({
        username: "jasper",
        password: "123",
    });

    await db.User.create({
        username: "takuji",
        password: "123",
    });

}

module.exports = {
    createUsers : createUsers,
}