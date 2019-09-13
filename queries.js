/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var Entry = mongoose.model('Listing', Schema.Listing);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Entry.findOne({'code': 'LBW'}, function(err, entry) {
    if (err) return handleError(err);
    console.log(entry);
  })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Entry.findOneAndRemove({'code': 'CABL'}, function(err, entry) {
    if (err) return handleError(err);
    console.log(entry);
  })
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  //1953 Museum Rd, Gainesville, FL 32603, United States
  Entry.findOneAndUpdate({'code': 'PHL'},{$set:{'address': '1953 Museum Rd, Gainesville, FL 32603, United States'}}, function(err, entry){
    if (err) return handleError(err);
    console.log(entry);
  })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Entry.find(function(err, entry){
    if (err) return handleError(err);
    console.log(entry);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
