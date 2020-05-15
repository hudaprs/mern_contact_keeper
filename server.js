const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/contacts", require("./routes/contact"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
