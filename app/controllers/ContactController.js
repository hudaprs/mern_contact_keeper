const { success, error } = require("../helpers/responseApi");

/**
 * @desc    Get all contacts
 * @method  GET api/contacts
 * @access  Private
 */
exports.getContacts = (req, res) => {
  res.send("Get Get all contacts");
};

/**
 * @desc    Create a contact
 * @method  POST api/contacts
 * @access  Private
 */
exports.createContact = (req, res) => {
  res.send("Create new contact");
};

/**
 * @desc    Update a contact
 * @method  PUT api/contacts/:id
 * @access  Private
 */
exports.updateContact = (req, res) => {
  res.send("Update contact");
};

/**
 * @desc    Delete a contact
 * @method  POST api/contacts/:id
 * @access  Private
 */
exports.deleteContact = (req, res) => {
  res.send("Delete contact");
};
