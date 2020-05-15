const { success, error } = require("../helpers/responseApi");

/**
 * @desc    Register user
 * @method  POST api/users
 * @access  Public
 */
exports.register = (req, res) => {
  res.send("Register user");
};
