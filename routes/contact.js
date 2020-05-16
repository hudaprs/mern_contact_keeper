const router = require("express").Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../app/controllers/ContactController");
const auth = require("../app/middleware/auth");

router.get("/", auth, getContacts);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
