'use strict';

var path = require('path');
var fs = require('fs');

var mongoClient = require("mongodb").MongoClient;

// Collection Name
var collectionName = "People";

// Put your CosmodDB connection string in this file
var filename = "./connection.txt";
var connectionString = "";
fs.readFile(filename, 'utf8', function (err, data) { 
    if(err) throw err;
    connectionString = data;
    console.log(connectionString);
    doMongo(connectionString);
});

// invoke some Mongo DB commands

var doMongo = function(connectionString) {
    mongoClient.connect(connectionString, function (err, db) {
        if(err) throw err;
        var query = { NameLast : "Mckoan" };
        findRecords(db, query);
        db.close();
        process.exitCode = 1;
    });
}

// Some Mongo Commands

var findRecords = function(db, query) {
    var cursor = db.collection(collectionName).find(query);
    cursor.each(function(err, doc) {
        if(err) throw err;

        if (doc != null) {
            console.log(doc);
        } else {
            console.log('no records returned');
        }
    });
};