
module.exports = function (sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
        taskname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reoccurring: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return Tasks;
}