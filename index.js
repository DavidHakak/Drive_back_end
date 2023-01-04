require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/folders", require("./ROUTES/folders.route"));
app.use("/api/files", require("./ROUTES/files.route"));

app.listen(PORT, () => {
  console.log(
    "Conction Port Success!!!, listening to port http://localhost:" + PORT
  );
});
