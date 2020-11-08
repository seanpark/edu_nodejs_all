const express = require('express');
const router = express.Router();

function testMiddleware( rew, res, next ){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleware2( rew, res, next ){
    console.log('두번째 미들웨어');
    next();
}

// 로그인 미들웨어 사용시 추가
function loginRequired( rew, res, next ){
    if('로그인이 되어 있지 않으면'){
        res.redirect('로그인창으로')
    } else{
        next();

    }
}

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req,res) =>{
    // res.send('admin products');
    res.render('admin/products.html', {
        message : '<h1>태그가 출력됩니다.</h1>',
        online : 'express'
    })
});

module.exports = router;
