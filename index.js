require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         record: true,
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+19712225228',
         from: '+17542036760'
       })
      .then(call => console.log(call.sid));
