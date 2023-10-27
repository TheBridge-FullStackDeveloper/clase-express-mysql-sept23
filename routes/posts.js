const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();
// app.post("/", (req, res) => {
//   let sql = `INSERT INTO posts (title, body) values
//       ('${req.body.title}', '${req.body.body}');`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post added...");
//   });
// });
router.post("/", PostController.create);
router.get("/", PostController.getAll);
router.get("/id/:id",PostController.getById);
router.put("/id/:id", PostController.update);
router.delete("/id/:id", PostController.delete);

module.exports = router;
