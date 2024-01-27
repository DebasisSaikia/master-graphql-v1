const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the express server!");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
