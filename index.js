/**
 * Require certain environment variables
 */

var envvar = require('envvar');
envvar.string('AUTH');

/**
 * Module Dependencies
 */

var debug = require('debug')('ifttt');

var app = module.exports = require('express')();
var webhook = require('express-ifttt-webhook');
var port = process.env.PORT || 9000;
var parse = require('./parse.js');
var isArray = Array.isArray;

/**
 * Environment variables
 */

var auth = process.env.AUTH;
var testURL = process.env.URL;

/**
 * IFTTT webhook
 */

app.use(webhook(authenticate, forward));

/**
 * Authenticate
 */

function authenticate(user, pass, done) {
  debug('recieved hook! authenticating...');
  var a = auth.split(':');

  if (a[0] == user && a[1] == pass) {
    debug('authenticated');
    done(null, { user: a[0], pass: a[1] })
  } else {
    debug('invalid user or password')
    done(null, false);
  }
}

/**
 * Forward data on
 */

function forward(json, done) {
  debug('parsing json %j', json);

  try {
    json = parse(json);
  } catch (e) {
    debug('parse error: %s', e.message);
    done(e);
  }

  // url
  // TODO: support multiple pushes
  json.categories = testURL || json.categories[0] || json.webhook;
  debug('parsed json: %j', json);
  debug('parsed json. posting to: %s', json.categories);

  done(null, json);
};

/**
 * Routes
 */

app.get('/', function(req, res) {
  res.sendStatus(200);
});

/**
 * Listen
 */

if(!module.parent) {
  app.listen(port, function() {
    console.log('Server started on port', port);
  });
}
