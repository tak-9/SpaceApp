var db = require("../models");
//createUsers();

async function createUsers() {
    console.log("********* seed.js createUsers *************")

    await db.User.create({
        username: "isolution",
        password: "123",
    });


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

    await db.Tasks.create({
        taskname: "running",
        category: "exercise",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "swimming",
        category: "exercise",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "basket ball",
        category: "exercise",
        completed: 1,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "yoga",
        category: "wellness",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "meditation",
        category: "wellness",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "Eat breakfast",
        category: "wellness",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "Eat Lunch",
        category: "wellness",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "Call a friend",
        category: "social",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "Talk on Zoom",
        category: "social",
        completed: 0,
        reoccurring: 0,
        UserId: 1
    });

    await db.Tasks.create({
        taskname: "userId 4 Talk on Zoom",
        category: "social",
        completed: 0,
        reoccurring: 0,
        UserId: 4
    });

}

module.exports = {
    createUsers : createUsers,
}