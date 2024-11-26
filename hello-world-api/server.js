const express = require('express');
const cors = require('cors');
const helloRoute = require('./routes/hello');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS
app.use('/hello', helloRoute);

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
