const express = require('express');

// create instance and 
const app = express();

// register view engine
app.set('view engine', 'ejs');

// Have the server listen to requests on port 3000
app.listen(3000);


// response to requests to index and about page
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})


// 404 page response
app.use((req, res) => {
    res.status(404).render('404');
})