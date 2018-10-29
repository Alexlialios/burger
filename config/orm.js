var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, burgerName, devoured, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) ';
        queryString += 'VALUES ("' + burgerName + '", ' + devoured + ');';

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;
 
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;

      console.log(queryString)

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }    
};

module.exports = orm;