//package
const express = require("express");
const server = express();

//start server
const mysql = require("mysql");

// setting up database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "student",
  database: "blog"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("MySQL is connected");
});

// routes

server.get("/create-table", function(req, res) {
  console.log("hitting create table");
  let sql =
    "CREATE TABLE post(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body TEXT, PRIMARY KEY (ID));";
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.send("CREATED TABLE POST");
  });
});

// create a route that adds a post record
// code here
server.get("/post1", function(req, res) {
  let post = {
    title: "My first db encounter",
    body: "the teacher told me how to do sql injection judge."
  };
  let sql = "INSERT INTO post SET ?";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("added first record to our post table");
  });
});

// create a route that add another post record
// code here
server.get("/post2", function(req, res) {
  let post = {
    title: "My first db encounter",
    body: "amber alert going of during class, hope they find the kid."
  };
  let sql = "INSERT INTO post SET ?";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("added second record");
  });
});

// create a route that deletes post record
server.get("/delete_post", function(req, res) {
  console.log(req.param.id);
  let sql = "DELETE FROM post WHERE ID=1";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("deleted a post");
  });
});

server.listen(3000, function() {
  console.log("server is lit...");
});
