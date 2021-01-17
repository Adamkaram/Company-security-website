"use strict";

var express = require('express');

var cors = require('cors');

require('dotenv').config();

var app = express();

var fetch = require('node-fetch');

app.enable('trust proxy');
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
var router = express.Router();

var creds = require('./config');

var nodemailer = require('nodemailer'); // const router =express.Router();


app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});
var transport = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};
var transporter = nodemailer.createTransport(transport);
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
var GA_TRACKING_ID = process.env.GA_TRACKING_ID;

var trackEvent = function trackEvent(category, action, label, value, valuee) {
  var data = {
    // API Version.
    v: '1',
    // Tracking ID / Property ID.
    tid: GA_TRACKING_ID,
    // Anonymous Client Identifier. Ideally, this should be a UUID that
    // is associated with particular user, device, or browser instance.
    cid: '555',
    // Event hit type.
    t: 'pageview',
    // Event category.
    ec: category,
    // Event action.
    ea: action,
    // Event label.
    el: label,
    // Event value.
    ev: value,
    //Non-Interaction Hit
    ni: value
  };
  return fetch('http://www.google-analytics.com/debug/collect', {
    params: data
  });
};

app.get('/', function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(trackEvent('Scroll', 'ViewPage', 'Scoll', '100', '1'));

        case 3:
          res.status(200).send('Event tracked.').end();
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          // This sample treats an event tracking error as a fatal error. Depending
          // on your application's needs, failing to track an event may not be
          // considered an error.
          next(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
router.post('/send', function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = "name: ".concat(name, " \n email: ").concat(email, " \n message: ").concat(message, " ");
  var mail = {
    from: name,
    to: creds.Email,
    // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  };
  transporter.sendMail(mail, function (err, data) {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
        status: 'success'
      });
      transporter.sendMail({
        from: creds.Email,
        to: email,
        subject: "Submission was successful",
        text: "Thank you for contacting us!\n\nForm details\nName: ".concat(name, "\n Email: ").concat(email, "\n Message: ").concat(message)
      }, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });
    }
  });
});
app.use('/', router);