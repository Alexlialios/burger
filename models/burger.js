var orm = require("../config/orm.js");
var burger = {
    selectAll: function(tableInput, cb) {
        orm.selectAll(tableInput, function(result){
            cb(result);
        });

    },
    insertOne: function(tableInput, burgerName, devoured, cb) {
        orm.insertOne(tableInput, burgerName, devoured, function(result){
            cb(result);
        });
    },
    updateOne: function(tableInput, objColVals, condition, cb) {
        orm.updateOne(tableInput, objColVals, condition, function(result){
            cb(result);
        });
    }   
}
 
module.exports = burger;