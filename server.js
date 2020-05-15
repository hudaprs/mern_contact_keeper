const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { success, error } = require("./app/helpers/responseApi");

app.get("/", (req, res) => {
  try {
    res.json(success("OK", { user: "Huda Prasetyo" }, res.statusCode));
  } catch (err) {
    res.json(error(err.message, res.statusCode));
  }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
