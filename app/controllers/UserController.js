const { success, error } = require("../helpers/responseApi");
const { validationResult } = require("express-validator");

/**
 * @desc    Register user
 * @method  POST api/users
 * @access  Public
 */
exports.register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
};
