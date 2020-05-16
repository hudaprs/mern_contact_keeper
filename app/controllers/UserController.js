const User = require("../models/User");
const { success, error } = require("../helpers/responseApi");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

/**
 * @desc    Register user
 * @method  POST api/users
 * @access  Public
 */
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const { name, email, password } = req.body;

  try {
    // Check existed email
    let user = await User.findOne({ email });

    if (user) return res.status(422).json(error("Email already exists", 422));

    user = new User({
      name,
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(200).json(success("User registered", user, res.statusCode));
  } catch (err) {
    console.error(err.message);
    res.status(500).json(error("Server error"));
  }
};
