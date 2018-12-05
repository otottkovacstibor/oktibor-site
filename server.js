const createError = require('http-errors');
const express = require('express');
const { join } = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cacheControl = require('express-cache-controller');
const compression = require('compression');
const indexRouter = require('./routes/index');

const app = express();

// compress all responses
app.use(compression());

// Cache-control
app.use(cacheControl({ maxAge: 31557600, public: true }));

// View engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view cache', true);
app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || '3000');

app.use(logger('dev'));
app.use(favicon(join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(join(__dirname, 'public')));

app.use('/manifest.json', express.static(join(__dirname, 'public', 'manifest.json')));

app.use(express.static(join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(join(__dirname, 'node_modules/octicons/build')));

app.use('/js', express.static(join(__dirname, 'node_modules/jquery/dist')));
app.use('/js', express.static(join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/css', express.static(join(__dirname, 'node_modules/octicons/build')));
app.use('/fontawesome', express.static(join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

// Home page
app.use('/', (req, res, next) => {
  res.cacheControl = { maxAge: 0 };
  indexRouter(req, res, next);
});

// Catch 404 and forward to Error handler
app.use(({ next }) => next(createError(404)));

const errorHander = (err, req, res, next) => {
  const status = err.status || 500;
  let title = 'Internal server error';
  let message = 'Something went wrong on the server.';
  if (status === 404) {
    message = `The requested URL ${req.path} was not found on this server.`;
    title = err.message;
  }

  const stack = req.app.get('env') === 'development' ? err.stack : '';

  res.locals.error = {
    title, message, stack, status,
  };
  res.cacheControl = { maxAge: 5 };
  res.status(status);
  res.render('error', { title });
};

// Error handler
app.use(errorHander);

app.listen(app.get('port'), () => console.log(`Server listening on: ${app.get('port')}`));
