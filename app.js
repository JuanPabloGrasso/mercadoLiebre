const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.listen(3030, () => {
    console.log('Levantando servidor http://localhost:3030');
});