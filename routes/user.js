const router = require("express").Router();
const { register } = require("../app/controllers/UserController");

router.post("/", register);

module.exports = router;
