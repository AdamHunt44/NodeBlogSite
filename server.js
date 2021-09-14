const express = require('express');

// create instance and listen on port 3000
const app = express();
app.listen(3000);


// response to requests to index and about page
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
})


// 404 page response
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root:__dirname })
})