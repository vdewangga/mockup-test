const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());


// untuk membaca json body
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Routes
app.use("/api/v1", require('./controller'));

// Running Server
const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`App listening at http://${host}:${port}`);
});

module.exports = app;