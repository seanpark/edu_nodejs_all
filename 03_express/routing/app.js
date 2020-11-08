const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('templates', {
    autoescape : true ,  // true : XSS, 태그 등 파싱되지 않도록 처리
    express : app
});
 

// 미들웨어 세팅
app.use( logger('dev') );

app.get('/', (req,res) => {
    res.send('express start');
});

function vipMiddleware( req, res, next){
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', vipMiddleware, admin);

app.listen( port, () => {
    console.log('Express listening on port', port);
});