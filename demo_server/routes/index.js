var express = require("express");
var router = express.Router();
var mysql = require("mysql");

/* GET home page. */
router.get("/", async function (req, res, next) {
  // connect to mysql (addr, user, password)

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456Aa@",
    database: "contact",
  });
  connection.connect();
  connection.query("SELECT * FROM user", (err, result, fields) => {
    res.json({
      data: result,
    });
  });
});

router.post("/login", async function (req, res, next) {
  // connect to mysql (addr, user, password)

  // console.log(req.query);
  // console.log(req.headers);
  console.log(req.body);
  const inputName = req.body.name;
  const inputPassword = req.body.password;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456Aa@",
    database: "contact",
  });
  connection.connect();
  connection.query(
    `SELECT * FROM user where name = '${inputName}' and password = '${inputPassword}'`,
    (err, result, fields) => {
      if (result.length > 0) {
        const token = Date.now().toString();
        connection.query(
          `update user set token = '${token}' WHERE (id = ${result[0].id})`,
          () => {}
        );
        result[0].token = token;
        res.json({
          status: 1,
          code: 200,
          message: "Thành công",
          data: result[0],
        });
      } else {
        res.json({
          status: 0,
          code: 404,
          message: "Vui lòng kiểm tra lại thông tin",
        });
      }
    }
  );
});

router.get("/contacts", async function (req, res, next) {
  // connect to mysql (addr, user, password)
  console.log(req.headers);

  const token = req.headers.token;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456Aa@",
    database: "contact",
  });
  connection.connect();
  connection.query(
    `SELECT * FROM user where token ='${token}'`,
    (err, result, fields) => {
      if (result.length > 0) {
        connection.query(
          `SELECT * FROM contact where user_id = '${result[0].id}'`,
          (contactErr, contactResult, contactFields) => {
            res.json({
              status: 1,
              code: 200,
              message: "Thành công",
              data: contactResult,
            });
          }
        );
      } else {
        res.json({
          status: 0,
          code: 403,
          message: "Bạn đã đăng nhập ở nơi khác",
        });
      }
    }
  );
});

module.exports = router;
