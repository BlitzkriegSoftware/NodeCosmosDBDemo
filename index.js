'use strict';

var path = require('path');
var fs = require('fs');

var mongoClient = require("mongodb").MongoClient;

// This is the format of the configuration file (case sensitive)
var settings = {
    "ConnectionString" : "",
    "Database" : "",
    "Collection" : ""
};


// Change this query to whatever you like
var query = { NameLast : /Mca/ };

// Put your CosmodDB connection string and other settings in this file
// This should be valid JSON, use http://jsonlint.com to verify

var filename = "./settings.json";
fs.readFile(filename, 'utf8', function (err, data) { 
    if(err) throw err;

    settings = JSON.parse(data);
    
    console.log(settings.ConnectionString);
    console.log(settings.Database);
    console.log(settings.Collection);
    
    doMongo();
});

// Invoke some Mongo DB commands

var doMongo = function() {
    mongoClient.connect(settings.ConnectionString, function (err, db) {
        if(err) throw err;

        // Switch DB from 'admin' (default) to the desired Database, this is far from obvious
        db = db.db(settings.Database);
        console.log('Current DB: ' + db.databaseName);
        
        // Find some records
        findRecords(db, query);

        db.close();
        
        // Exit Script Gracefully
        process.exitCode = 1;
    });
}

// Find Records and dump them to the console
var findRecords = function(db, query) {
    db.collection(settings.Collection).find(query).toArray(function(err, items) {
        if(err) throw err;
        console.log(items);    
    });
};