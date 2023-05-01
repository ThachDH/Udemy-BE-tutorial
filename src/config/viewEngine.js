const express = require('express')

const path = require('path');
const configViewEngine = (app) => {
    //config template engine
    // console.log('check dirname', __dirname);
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')
    // config static files
    app.use(express.static(path.join('./src', 'public')));
}


module.exports = configViewEngine; // export như thế này 'configViewEngine' có nghĩa là nó sẽ tham chiếu đến tên này,
//còn configViewEngine() là nó thực thi cái hàm này
