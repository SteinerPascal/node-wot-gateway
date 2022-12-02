# node-wot-gateway
node-wot used as my gateway for the plant-twin

## installs for node-wot-gateway
`sudo apt update`

`sudo apt upgrade`

`sudo apt install node` (version >12 is requiredsu)

`sudo apt install npm `

`sudo apt install node-typescript`

`git clone https://github.com/SteinerPascal/node-wot-gateway.git`

`cd node-wot-gateway`

`npm i `

## COAP debugging requirements

`sudo apt-get install -y avahi-discover`

`sudo apt-get install avahi-utils`

`sudo apt install autoconf automake libtool`

then run script:
```
#!/bin/bash

git clone --depth 1 --recursive -b dtls https://github.com/home-assistant/libcoap.git
cd libcoap
./autogen.sh
./configure --disable-documentation --disable-shared --without-debug CFLAGS="-D COAP_DEBUG_FD=stderr"
make
make install
```

### Debug COAP

`sudo ip route add fd02:1555:fa32:1::/64 via fe80::1297:bdff:fe2e:c217 dev wlan0`

`sudo ip route del fd02:1555:fa32:1::/64`

`ping6 fd02:1555:fa32:1:f0c6:2460:4a3b:2f3b`

`coap-client coap://[fd02:1555:fa32:1:f0c6:2460:4a3b:2f3b]/f`


### issue no rout to host on ipv6
- make sure knx.thread is active `avahi-browse --all --resolve --terminate`
- check route table if there is a route `ip -6 r s`
- if there is no route for this IP, then look for all the routers in your network `ping6 ff02::2%wlan0`
- for each IP result from previous address, add route route and test: 
```
fd02:1555:fa32:1::/64 via fe80::1297:bdff:fe2e:c217 dev wlan0 metric 1024 pref medium
```
- click two times on sensor for static red light