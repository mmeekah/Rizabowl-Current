const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

// Define routes
app.use("/api/user", require("./routes/user"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//create a server listening at localhost:3100
const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
