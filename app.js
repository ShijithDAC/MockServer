const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const helmet = require("helmet");


const app = express();

app.use(helemt());
// View engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.set('layout','layout');
app.set('view cache',true);
app.engine('html',require('hogan-express'));
app.locals.delimiters = '<% %>';

// Uncomment after placing your favicon in /public
// Use app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',index);


// Catch 404 and forward to error handler
app.use((req,res,next)=> {
    const err = new Error('Not Found');

    err.status = 404;
    next(err);
});

// Error handler
app.use((err,req,res)=> {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;