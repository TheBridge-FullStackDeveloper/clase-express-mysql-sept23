const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
// app.post("/", (req, res) => {
//   let sql = `INSERT INTO posts (title, body) values
//       ('${req.body.title}', '${req.body.body}');`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post added...");
//   });
// });
router.post('/',(req,res)=>{
    let post = {title:req.body.title, body:req.body.body};
    let sql = 'INSERT INTO posts SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post added...')
    })
  })

module.exports = router;
