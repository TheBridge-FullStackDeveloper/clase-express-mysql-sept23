const express = require("express");
const app = express();
const db = require("./config/database")
const PORT = 3000;

app.use(express.json());
//*routes
app.use("/posts",require("./routes/posts"))

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});




app.get("/", (req, res) => {
  let sql = "SELECT * FROM posts";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/id/:id", (req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/id/:id", (req, res) => {
  let newTitle = req.body.title;
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Post updated...");
  });
});

app.delete("/id/:id", (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Post deleted");
  });
});

app.listen(PORT, () => console.log(`I love you ${PORT} <3`));
