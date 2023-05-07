const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    app.send('Coffee making server is running');
})

app.listen(port, () => {
    console.log(`Coffie Server is running on port : ${port}`)
})