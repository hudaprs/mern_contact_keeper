const router = require("express").Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../app/controllers/ContactController");
const auth = require("../app/middleware/auth");
const contactValidation = require("../app/middleware/validations/ContactValidation");

router.get("/", auth, getContacts);
router.post("/", [auth, contactValidation], createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
