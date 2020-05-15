const router = require("express").Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../app/controllers/ContactController");

router.get("/", getContacts);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
