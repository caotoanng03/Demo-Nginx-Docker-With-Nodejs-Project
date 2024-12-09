const express = require('express')
const path = require('path')
const app = express();
const port = 8080;

app.use(express.static('public'))

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Request served by Node app');
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})