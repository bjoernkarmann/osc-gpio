var rpio = require('rpio');
var pin = 12;

rpio.open(pin, rpio.OUTPUT, rpio.LOW);

var osc = require('osc-min'),
    dgram = require('dgram'),
    remote;


// listen for OSC messages and print them to the console
var udp = dgram.createSocket('udp4', function(msg, rinfo) {

  // save the remote address
  remote = rinfo.address;

  try {
    if(osc.fromBuffer(msg).address=="/off"){
      console.log("Relay Off");
      rpio.write(pin, rpio.HIGH);
    }
    if(osc.fromBuffer(msg).address=="/on"){
      console.log("Relay ON");
      rpio.write(pin, rpio.LOW);
    }
  } catch (err) {
    console.log('Could not decode OSC message');
  }

});

udp.bind(9998);
console.log('Listening for OSC messages on port 9998');
