const router = require("express").Router();
const { getLoggedUser, login } = require("../app/controllers/AuthController");
const loginValidation = require("../app/middleware/validations/LoginValidation");

router.get("/", getLoggedUser);
router.post("/", loginValidation, login);

module.exports = router;
