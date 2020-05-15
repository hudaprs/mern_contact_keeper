const { success, error } = require("../helpers/responseApi");

/**
 * @desc    Get logged user
 * @method  GET api/users
 * @access  Private
 */
exports.getLoggedUser = (req, res) => {
  res.send("Get logged user");
};

/**
 * @desc    Authenticate user and get token
 * @method  POST api/users
 * @access  Public
 */
exports.login = (req, res) => {
  res.send("Login");
};
