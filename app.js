//var gpio = require("pi-gpio");

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

      // set gpio pin 17 to LOW
      gpio.open(17, "output", function(err) {
        gpio.write(17, 0, function() {
            gpio.close(16);
        });
      });
    }
    if(osc.fromBuffer(msg).address=="/on"){
      console.log("Relay ON");

      // set gpio pin 17 to HIGH
      gpio.open(17, "output", function(err) {
        gpio.write(17, 1, function() {
            gpio.close(16);
        });
      });
    }
  } catch (err) {
    console.log('Could not decode OSC message');
  }

});

udp.bind(9998);
console.log('Listening for OSC messages on port 9998');
