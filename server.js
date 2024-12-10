const express = require('express')
const path = require('path')
const app = express();
const port = 8080;

const appName = process.env.APP_NAME || "Demo-app";

app.use(express.static('public'))

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by Node ${appName}`);
})

app.listen(port, () => {
    console.log(`${appName} listening on port ${port}`);
})