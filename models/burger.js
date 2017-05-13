/**
 * Created by esterlingaccime on 5/5/17.
 */

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        date: DataTypes.DATE
    });

    return Burger;
};