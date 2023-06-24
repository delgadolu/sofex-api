const dbSetUp = require("./db/db-setup");
const express = require("express");

dbSetUp();

const app = express();

//middlewares
app.use(express.json());

//routes
app.use(require("./routes/index"));

app.listen(8080, () => console.log("server on port 8080"));
