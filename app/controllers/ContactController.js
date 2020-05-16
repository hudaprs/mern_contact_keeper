const { success, error } = require("../helpers/responseApi");
const { validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const User = require("../models/User");

/**
 * @desc    Get all contacts
 * @method  GET api/contacts
 * @access  Private
 */
exports.getContacts = async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    // Check existing contacts
    if (contact.length == 0)
      return res
        .status(200)
        .json(
          success("User doesn't have contact yet", contact, res.statusCode)
        );

    res
      .status(200)
      .json(success(`${req.user.name} Contact list`, contact, res.statusCode));
  } catch (err) {
    console.error(err.message);
    res.status(500).json(error("Server error", res.statusCode));
  }
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
