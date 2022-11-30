# node-wot-gateway
node-wot used as my gateway for the plant-twin

## installs
`sudo apt update`
`sudo apt upgrade`
`sudo apt install node` (version >12 is requiredsu)
`sudo apt install npm `
`sudo apt install node-typescript`
`git clone https://github.com/SteinerPascal/node-wot-gateway.git`
`cd node-wot-gateway`
`npm i `
`npm run start`

## build requirements 
`shopt -s globstar`
## links
https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript


## coap requirements
`sudo apt-get install -y avahi-discover`
`sudo apt-get install avahi-utils`
in node project: `npm install @node-wot/binding-coap`
for debugging via cli `sudo npm i coap-cli -g`
ip : fd02:1555:fa32:1:f0c6:2460:4a3b:2f3b

`ping6 fd02:1555:fa32:1:f0c6:2460:4a3b:2f3b`

``
### Building coap client
`sudo apt install autoconf automake libtool`
bash script 
```
#!/bin/bash

git clone --depth 1 --recursive -b dtls https://github.com/home-assistant/libcoap.git
cd libcoap
./autogen.sh
./configure --disable-documentation --disable-shared --without-debug CFLAGS="-D COAP_DEBUG_FD=stderr"
make
make install
```

`sudo ip route add fd02:1555:fa32:1::/64 via fe80::f221:e0ff:fe97:8e0d dev wlan0`
`sudo ip route add fd02:1555:fa32:1::/64 via fe80::ba27:ebff:fe6a:56d7 dev wlan0`
`sudo ip route add fd02:1555:fa32:1::/64 via fe80::1297:bdff:fe2e:c217 dev wlan0`
`sudo ip route del fd02:1555:fa32:1::/64`
`ping6 fd02:1555:fa32:1:f0c6:2460:4a3b:2f3b`
```
::1 dev lo proto kernel metric 256 pref medium
fd02:1555:fa32:1::/64 via fe80::1297:bdff:fe2e:c217 dev wlan0 metric 1024 pref medium
fd11:138a:c613:1::/64 dev wlan0 proto ra metric 303 pref medium
fe80::/64 dev wlan0 proto kernel metric 256 pref medium
default via fe80::f221:e0ff:fe97:8e0d dev wlan0 proto ra metric 303 pref medium
```



### issue no rout to host on ipv6
- make sure knx.thread is active `avahi-browse --all --resolve --terminate`
- check route table if there is a route ` ip -6 r s`
correct route for me was: 
```
fd02:1555:fa32:1::/64 via fe80::1297:bdff:fe2e:c217 dev wlan0 metric 1024 pref medium
```
if it doesn't work with route test route ping `ping6 ff02::2%wlan0`
add reply routes in the 'via' part of the ip and try till a ping was succesful. don't forget to check `avahi-browse --all --resolve --terminate` if knx thread is still running
- click two times on sensor for static red light