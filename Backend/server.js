const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const fetch = require('node-fetch');
app.enable('trust proxy');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
 
var router = express.Router();

const creds = require('./config');
var nodemailer = require('nodemailer');
// const router =express.Router();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

var transport = {
    host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
   
    user: creds.USER,
    pass: creds.PASS
  
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
   
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

const {GA_TRACKING_ID} =  process.env


const trackEvent = (category, action, label, value, valuee) => {
  const data = {
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
    params: data,
  });
};

app.get('/', async (req, res, next) => {
  // Event value must be numeric.
  try {
    await trackEvent(
      'Scroll',
      'ViewPage',
      'Scoll',
      '100',
      '1'
    );
    res.status(200).send('Event tracked.').end();
  } catch (error) {
    // This sample treats an event tracking error as a fatal error. Depending
    // on your application's needs, failing to track an event may not be
    // considered an error.
    next(error);
  }
});

router.post('/send', (req, res, next) => {
 
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: creds.Email,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
         status: 'success'
      })
  
      transporter.sendMail({
        from: creds.Email,
        to: email,
        subject: "Submission was successful",
        text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
      }, function(error, info){
        if(error) {
          console.log(error);
        } else{
          console.log('Message sent: ' + info.response);
        }
      });
    }
  })

})

app.use('/', router);
