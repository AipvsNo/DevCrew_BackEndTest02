const express = require('express');
const app = express();
const PORT = 5000;
const router = require("./router/router");
const multer = require('multer');

app.use(express.json());
app.use('/file',router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
