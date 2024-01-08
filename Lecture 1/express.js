const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Slash Route</h1>');
});

app.get('/profile', (req, res) => {
    res.send('<h1>Profile Route</h1>');
});

app.listen(port, () => {
    console.log(`app listening on port http://127.0.0.1:${port}`);
});
