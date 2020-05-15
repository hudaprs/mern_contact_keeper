const router = require("express").Router();
const { getLoggedUser, login } = require("../app/controllers/AuthController");

router.get("/", getLoggedUser);
router.post("/", login);

module.exports = router;
