# OSC-GPIO

This project is for controlling gpio pins on a raspberyPi using osc messages.

## Run

```
$ npm start
```


## Getting started:

Download and install the osc-gpio

```
git clone https://github.com/bjoernkarmann/osc-gpio.git && cd osc-gpio && npm install
```

To start run this in the same directory

```
npm start
```

## Run at startup:

Enter the **rc.local** file:

```
sudo nano /etc/rc.local
```
Enter this line just before **exit 0**

```
su pi -c 'node /home/pi/osc-gpio/app.js < /dev/null &'
```

## OSC protocol:

The server is listening on port: 9998. To change the state adress: /pin/state

## License

The MIT License (MIT)
