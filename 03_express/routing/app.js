const express = require('express');
const nunjucks = require('nunjucks');
const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('templates', {
    autoescape : true ,  // true : XSS, 태그 등 파싱되지 않도록 처리
    express : app
});

app.get('/', (req,res) => {
    res.send('express start');
});

app.use('/admin', admin);

app.listen( port, () => {
    console.log('Express listening on port', port);
});