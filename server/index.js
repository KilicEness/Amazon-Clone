const express = require('express');

const PORT = 3000;

const app = express();



app.listen(PORT, "0.0.0.0", () => {
    console.log(`connecting at port ${PORT}`);
})