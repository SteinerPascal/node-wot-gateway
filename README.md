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
` avahi-browse --all --resolve --terminate`
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
